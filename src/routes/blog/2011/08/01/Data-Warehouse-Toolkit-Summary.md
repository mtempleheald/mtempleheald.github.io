I recently read the _The Data Warehouse Toolkit (Second Edition)_ before embarking on a project to implement a new data warehouse.  
I recommend reading this book, it is clear, detailed and accessible, but here is a super succinct summary for my own benefit.

#### Fact tables

- few columns, many rows
- always at lowest level (granular) detail
  - lowest level of detail required for business reporting, not necessarily the lowest level grain held by the source system
- typically try to avoid semi-additive facts (e.g. balance)
- always avoid to-date totals, not consistent with the grain
- try to avoid textual facts
  - tend to be filtered out into a separate dimension (mini dimension)

#### Factless fact tables

- convenient representation of many-many relationships between dimensions, even if there is no obvious numeric fact at that level
- may wish to add artificial fact (always == 1) to clarify queries

#### Coverage tables

- special form of factless fact table
- one row per dimension Cartesian product, regardless of occupation, flag to indicate available/ in use
- There is a data overhead involved in doing this so it is only for special uses

#### Dimension tables

- few rows, many columns
- denormalised extensively – few rows => small impact in size compared with performance improvements
- Avoid snowflaking (normalising of dimensions) – will slow queries
- Need surrogate key (SKey) to uniquely identify a row even if a suitable business key exists, future proofing
- Need getSKey function for each dim (based on natural key)
- Cater for null values using a “-1” entry
- Typically expect 5-15 dimensions per dimensional model

#### Date dimension

- 1 row per day
- Day, week, month, quarter, year info on each line
- Easier filtering/ formatting than SQL date conversion functions
- The ONLY dimension with a meaningful key – in date order
- This predictability is important for partitioning, backups and restorations, whereby all rows relating to a date range should be partitioned together

#### Data Modelling Approach

- Separate ERD(s) into business processes & model separately
- Many-many tables become facts
- Denormalise remaining tables – become dimensions
- Convert identifiers into meaningful data e.g. ‘M’ becomes ‘Male’
- Agree on these “conformed” dimensions and seek to reuse
- Likewise seek to use conformed facts with standard, meaningful attributes

#### Maintaining the DW Bus Matrix

- Business process (data mart = set of closely-related fact tables) vs common dimensions. This is a very high level planning aid (p79)
- Enables coherent vision of DW architecture
- Can extend to include fact table/ granularity/ facts for full picture. This is more closely tied to the implementation phase (p321)

#### Conformed dimensions

- Agreed business nomenclature to avoid redundancy and inaccuracy
- Common columns are identical
- 1 may have extra columns e.g. confidential information
- 1 may have extra rows (subset of data) –be careful re. referential integrity

#### Slowly Changing Dimensions (SCD)

- Type 1 – overwrite old version – lose history
- Type 2 – create new dim row – keep history but cannot look at both together
- Type 3 – consider 2 (or 3…) previous versions
  - require fact column for each version
  - can compare versions as of date X
- Combinations of the above

#### Role-Playing dimensions

- When need 2 dates on a table need 2 references to Date Dim.
- Cant refer to same table twice so use views instead
- Applicable to other dimensions but common with date dimension

#### Dimension Outriggers

- Constitutes normalisation of dimensions – use sparingly
- Useful when dimensions of significantly differing grain and main dimension is large  
  e.g. customers + demographics (age, gender etc)
- Location is a valid candidate for an outrigger – can use GIS tools too

#### Degenerate dimensions

- Number left in fact table without corresponding dim table.
  Can be later expanded to a dimension if required (but use surrogate keys then!)
  Can be grouped/ filtered in the meantime.
- If dimension contains similar numbers of rows to the fact table,
  this may be a good candidate for a degenerate dimension

#### Junk dimensions

- Groups of typically low-cardinality flags
- may look like Cartesian product but with a surrogate key
- can be used to reduce the number of columns in a fact table, potentially space-saving.

#### Mini dimensions

- Separate textual fact out from fact table into mini dimension.
- Enabled high-performance filtering of data

#### Header/Line facts with different granularity

- Remove higher-level fact table by duplicating facts from the higher-level header fact row down to lower-level line fact row(s), much like dimension denormalisation
- Or maintain both tables at different granularity (only when necessary)

#### Real-Time Partitions

- Physically & administratively separate “partition” (different tables) from the rest of the warehouse.
- Contains all activity since last standard ETL run, same structure as standard DW tables.

#### Bridge tables (p164)

- For variable-depth hierarchies
- May contain parent skey, subsidiary skey, level, bottom flag, top flag
- Can create view new_fact = bridge + fact to hide complexity
- Combine with a weighting factor attribute on the bridge table, summed over the group it should always equal 1

#### Audit Dimension

- Source system, ETL version, confidences
- use skey to link to rows updated by that particular ETL run

#### Keyword Outrigger Dimension

- Attribute such as '\\UNIX\\LINUX\\SQL\\' for skills for a person
- Can filter using LIKE '%\\SQL\\%' (avoids complicated union views)

#### Superdimension (similar to junk dimension)

- Combine 2 or more dimensions into a single dimension.  
  This is likely to be a Cartesian product and is suitable only for small date volumes
- E.g. flights – class flown != class purchased (up/downgrades), create superdimension with 9 rows (coach/business/first)^2

#### Fact Dimension

- For sparse fact tables, i.e. groups of attributes often empty
- separate these attribute groups into separate fact dimensions and link with surrogate key
- Allows us to keep fact table structure static, no new columns
- Very flexible but may expand too quickly if facts become less sparse
- may considerably complicate data access
- Type + content dimensions to handle heterogeneous products

#### Late-arriving fact rows

- For each dimension establish surrogate key based on natural key (plus SCD effective dates)
- insert into correct physical partition based on date
- If historical data cannot change (has been reported, though inaccurate)
  then may need 2 sets of dates (operational/ booking)

#### Late-arriving dimension rows (applied to slowly changing dimensions)

- Insert new row with new surrogate key
- Scan forwards from this date and correct later rows with same natural key
- Update all fact rows to correct surrogate key

The summary of traps to avoid on P326 is well worth reading too.  
In order to improve performance of the ETL you can use a cyclic redundancy checksum (CRC) algorithm on dimension staging tables.  
This is a more efficient way to determine if row has been updated than comparing each column.
