# Web Journey without JavaScript

An exploration into developing a full web journey without JavaScript.

I'm not overly keen on JavaScript (or dynamic languages in general), but the true motivation here is layering, specifically the repetition of business logic in 2 places.

## Vision

- Want all business logic to reside _only_ on the server, since we can't trust anything handled client side.
- Need interactivity in the browser, else it will be a poor user experience, but this needs to be data-driven and not contain business logic.

## Initial thoughts

WebAssembly is now available as an alternative to JavaScript in the browser, for many use cases. There are limits, most notably the inability to interact directly with the DOM.
So the solution will require some JavaScript plumbing.

The JavaScript elements should be limited to context-agnostic data-driven validation/display toggling, using a library such as [validate.js](https://validatejs.org/).

## Design principles

- JavaScript is a pre-requisite, so beyond showing a nice message don't worry about progressive enhancement.
- We can share code front and backend (if that makes sense) but we must write it only once
- All code must be testable
- The application must be responsive with no significant latency
-

## Solution design

Easiest to think about this in terms of interface boundaries

| JavaScript        | WASM Frontend | Backend        | Notes                                    |
| ----------------- | ------------- | -------------- | ---------------------------------------- |
| onLoad setup      | setupForm     | getQuestionSet | grab data from backend to generate form  |
| onChange validate | -             | -              | perform simple validation in front end   |
| onChange update   | updateX       | -              | update central WASM model as they change |
| onSubmit validate | validateX     | -              | perform complex multifield validation    |
| onSubmit submit   | submitX       | submitX        | ensure validated, pass to backend        |

### QuestionSet data structure

There should be sufficient information in here for both display and simple validation.

```JSON
{
    "question-set": "string", // questionset identifier, there may be many in a single journey
    "questions": [
        {
            "type": "string", // text | number | datetime | select | radio | ...
            "name": "string", // form control name
            "label": "string", // form control label
            "default": "string", // maps to (value | checked) property
            "helptext": "string", // markdown tooltip or subtext, depending on cosmetic choices
            "valid-required": "boolean", // maps to required property
            "valid-max": "integer", // maps to (max | maxLength) property
            "valid-min": "integer", // maps to (min | minLength) property
            "valid-regexp": "string", // maps to pattern property
            "valid-errmsg": "string", // error message to go with regexp validation
            "data-source": "string", // data-source attribute used for reference data
            "pre-markdown": "string", // markdown to render before the question
            "post-markdown": "string", // markdown to render after the question
            "display-if-parent": "string", // data-parent attribute - hide until parent condition met
            "display-if-value": "string" // data-parent-val attribute
        },
        // ...
    ]
}
```

### Validate & submit

- Should have already performed simple validation in the browser
- Should already have all required values from the questionset submitted during navigation
- Assume neither of these things are true, validate in full.  
  This can mean running validation twice, but the client side stuff was for the user's benefit and we didn't write it by hand for this journey, the underlying data which drives it was generated in the backend.

1. All fields in questionset answered, click submit button.
2. JavaScript onSubmit() code calls WebAssembly ProcessQuestionSet() which returns error string or "".
3. JavaScript either displays errors or navigates onwards (can preload next page while waiting for response)
4. Wasm applies business logic and passes data on for further processing if required

- Page URLs and navigation are the domain of the JS.
- Data, session and persistence are the domain of the backend & wasm frontend
  These 2 aspects aren't entirely independent...

If we choose to go down the SPA route then we can consider the WASM memory as the session data.  
We also have the option here to break up the questionSet into as many or as few chunks as we like.
We can even combine questionSets within the same business logic, since all exist in session data together.

If we choose to go down the multipage route then we need to call out to a persistence layer in between pages.
This persistence layer could be in the browser (localStorage/sessionStorage) or backend via an async API call, either way this should be handled by WASM.
Any time we need to look at data spanning questionSets (pages in this scenario) we need to also perform data retrieval steps to pull in data from other pages, this starts to feel messy so SPA seems preferable all things considered.

### Conclusion

- Layer separation is clear and there is no code duplication.
- Browser-based data-annotation-driven validation is proven and well known
- The practicalities of interop for questionSet submission to be proven, can't add too much latency.
- WASM to backend APIs via REST or gRPC to be considered - not clear on security in WASM
