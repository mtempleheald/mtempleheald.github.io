I was getting irritated with breadcrumbs in APEX, specifically having to maintain a separate list for both breadcrumbs and "normal" navigation.  
What I wanted was:

- every time you moved to a new page, remember the previous one as a parent
- if you move to a page you'd already been to, reset to that point.

So when a new version of APEX came out, I looked into the new plug-in development feature, this is the result.

The idea is simple, consisting of the following elements:

- Add a Region to Page 0 of the application referencing the plug-in, this renders a new breadcrumb element on each render (page load)
- Add navigation to the application
  - I used a list (which has no notion of breadcrumbs), implemented on each page for demonstration purposes
  - This could equally well be chart navigation, interactive reports, etc
- An APEX collection to store the current state of the breadcrumbs

For the record, I'm not suggesting that this is a particularly good approach, it doesn't cater for session state management and it is another server process to execute, which will obviously affect performance, but [it works](https://apex.oracle.com/pls/apex/f?p=55790:1::::::).

### Creating a Plug-In

Creating a plug-in is as simple as creating a package which exposes a function with the right signature, in this case, for a Region plug-in:

```SQL
FUNCTION render (p_region              IN apex_plugin.t_region
                ,p_plugin              IN apex_plugin.t_plugin
                ,p_is_printer_friendly IN BOOLEAN)
  RETURN apex_plugin.t_region_render_result
```

Implementing the plug-in is even easier, simply add a plug-in Shared Component to the application, referencing the PL/SQL package, in this case:
Render Procedure/Function Name = true_breadcrumbs.render

### The Code

##### Page 0 Region Position 02 (didn't have to be here)

- Identification > Title: True Breadcrumbs
- Identification > Type: True Breadcrumbs [Plug-In]
- Header and Footer > Header Text (this is only a demo, I wouldn't normally add CSS directly in the HTML)

```HTML
<style type="text/css">
  ul.true_breadcrumbs {
    list-style-type: none;
  }
  ul.true_breadcrumbs li {
    display: inline;
  }
  ul.true_breadcrumbs li:before {
    content: " > ";
  }
  ul.true_breadcrumbs li:first-child:before {
    content: "";
  }
</style>
```

##### Package header

```SQL
create or replace PACKAGE true_breadcrumbs AS

  FUNCTION render (p_region              IN apex_plugin.t_region
                  ,p_plugin              IN apex_plugin.t_plugin
                  ,p_is_printer_friendly IN BOOLEAN)
    RETURN apex_plugin.t_region_render_result;

END true_breadcrumbs;
```

##### Package body

```SQL
create or replace PACKAGE BODY true_breadcrumbs AS
/**
%usage   Set of program units which work together to provide an easily-implemented breadcrumb solution without manual development effort
%usage   Designed to be implemented on a global page ("page 0")
%usage   Displayed by default on all pages except 101 (login), other popups can be excluded by altering the conditional display settings
%author  Mark Temple-Heald
%version 1.0  25-JAN-2014 Initial version
*/
  CURSOR c_breadcrumbs IS
    SELECT N001 application_id
    ,      N002 page_id
    ,      C001 page_name
    ,      seq_id
    FROM   apex_collections
    WHERE  collection_name = 'TRUE_BREADCRUMBS'
    ORDER BY seq_id;

/**
%usage   Use the ApEx data dictionary to obtain the page name from the page id, for use as a breadcrumb label
*/
  FUNCTION get_page_name (p_application_id IN apex_application_pages.application_id%TYPE
                         ,p_page_id        IN apex_application_pages.page_id%TYPE)
    RETURN apex_application_pages.page_name%TYPE
  IS
    v_page_name apex_application_pages.page_name%TYPE;
  BEGIN

    SELECT page_name
    INTO   v_page_name
    FROM   apex_application_pages
    WHERE  application_id = p_application_id
    AND    page_id        = p_page_id;

    RETURN v_page_name;

  END get_page_name;

/**
%usage   Update the breadcrumb collection to produce the shortest path from source to the current breadcrumb
*/
  PROCEDURE update_breadcrumbs (p_application_id IN apex_application_pages.application_id%TYPE
                               ,p_page_id        IN apex_application_pages.page_id%TYPE
                               ,p_page_name      IN apex_application_pages.page_name%TYPE)
  IS
    v_found BOOLEAN := FALSE;
    v_seq_id NUMBER;
  BEGIN
    -- create collection if it doesn't already exist
    -- list of pages visited in chronological order starting with the first page visited (where this region plug-in is displayed)
    -- N001 = APP_ID, N002 = APP_PAGE_ID, C001 = Breadcrumb title/ page name
    IF NOT apex_collection.collection_exists ('TRUE_BREADCRUMBS') THEN
      apex_collection.create_collection ('TRUE_BREADCRUMBS');
    END IF;

    IF p_page_id = 101 THEN

      -- the login page should not appear in breadcrumbs, so the next page visited will be home
      apex_collection.truncate_collection ('TRUE_BREADCRUMBS');

    ELSE

      FOR i IN c_breadcrumbs LOOP

        IF v_found THEN
          -- within this loop we've already encountered this page, so delete breadcrumbs further down the trail
          apex_collection.delete_member ('TRUE_BREADCRUMBS', i.seq_id);
        END IF;
        IF i.application_id = p_application_id AND
           i.page_id        = p_page_id
        THEN
          -- we have already visited this page within this session, so mark for delete of everything further down the breacrumb trail
          v_found := TRUE;
        END IF;

      END LOOP;

      IF NOT v_found THEN

        v_seq_id := apex_collection.add_member (p_collection_name => 'TRUE_BREADCRUMBS'
                                               ,p_n001            => p_application_id
                                               ,p_n002            => p_page_id
                                               ,p_c001            => p_page_name);

      END IF;

    END IF;

  END update_breadcrumbs;
/**
%usage   Produce HTML to represent the breadcrumbs, based on what is stored in the global associative array
*/
  FUNCTION make_html
    RETURN VARCHAR2
  IS
    v_html VARCHAR2(4000);
  BEGIN
    v_html := '<ul class="true_breadcrumbs">';
    FOR i IN c_breadcrumbs LOOP
      v_html := v_html || '<li><a href="f?p='||i.application_id||':'||i.page_id||':'||V('APP_SESSION')||'">'||i.page_name||'</a></li>';
    END LOOP;
    v_html := v_html || '</ul>';
    RETURN v_html;
  END make_html;
/**
%usage   Function implementing the region plug-in interface which produces breadcrumbs in unstyled HTML
%usage   The first time this is called (the first page accessed within this application) will act as the home breadcrumb
%usage   Any page accessed which is not currently in the trail will be added.
%usage   Any page revisited will become the new current breadcrumb, truncating crumbs further down the trail
*/
  FUNCTION render (p_region              IN apex_plugin.t_region
                  ,p_plugin              IN apex_plugin.t_plugin
                  ,p_is_printer_friendly IN BOOLEAN)
    RETURN apex_plugin.t_region_render_result
  IS
    v_application_id apex_application_pages.application_id%TYPE;
    v_page_id        apex_application_pages.page_id%TYPE;
    v_page_name      apex_application_pages.page_name%TYPE;
    v_return         apex_plugin.t_region_render_result;
  BEGIN

    IF apex_application.g_debug THEN
      apex_plugin_util.debug_region (p_plugin, p_region);
    END IF;

    v_application_id := NV('APP_ID');
    v_page_id        := NV('APP_PAGE_ID');
    v_page_name      := get_page_name (v_application_id, v_page_id);
    update_breadcrumbs (v_application_id, v_page_id, v_page_name);
    sys.htp.p (make_html);

    RETURN v_return;

  END render;

END true_breadcrumbs;

```
