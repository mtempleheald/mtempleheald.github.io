This can be useful for situations where you wish to generate a report for a manually selected set of individuals.  
I first used this in conjunction with a tabular form with checkbox in Oracle Application Express.  
It simply parses a comma-separated string e.g. \'23,45,67,999,20483\' into a \"table\" of values which can be used by an IN statement.  
Rather than having to filter on a function which converts a demilited string into a set of rows, the following query can be used directly.  
Just remember to add a comment to that effect, this isn't easy to read at a glance.  

#### Query

```PLSQL
SELECT SUBSTR (strCSV,
               INSTR (strCSV, ',', 1, LEVEL) + 1,
               INSTR (strCSV, ',', 1, LEVEL + 1) - INSTR (strCSV, ',', 1, LEVEL) - 1 
              ) as fieldname
FROM  (SELECT ','||&STRING||',' strCSV
       FROM   dual)
CONNECT BY LEVEL <= LENGTH(&STRING) - LENGTH(REPLACE(&STRING,',','')) + 1
ORDER BY fieldname
```

#### An alternative is available in the DBMS_UTILITY package

```PLSQL
DECLARE
  v_arr dbms_utility.uncl_array;
  v_cnt BINARY_INTEGER;
BEGIN
  dbms_utility.comma_to_table('A,B,C,F,D',v_cnt,v_arr);
  FOR i IN 1 .. v_cnt LOOP
    dbms_output.put_line(v_arr(i));
  END loop;
END;
```

### Use this method to parse initials from a full name (experimental)

```PLSQL
WITH data
AS   (SELECT fieldname
      ,      order_by
      FROM (SELECT UPPER(SUBSTR (forenames, INSTR (forenames, ' ', 1, LEVEL) + 1, 1 )) fieldname
            ,      level                                                               order_by
            FROM  (SELECT ' '||&FNAME||' ' forenames
                   FROM   dual
                  )
            CONNECT BY LEVEL <= LENGTH(&FNAME) - LENGTH(REPLACE(&FNAME,' ','')) + 1
           )
      )
SELECT REGEXP_REPLACE(REPLACE(SYS_CONNECT_BY_PATH(fieldname,','),',',''),'( ){1,}') initials
FROM   data
WHERE  order_by = (SELECT MAX(order_by)
                   FROM   data)
START WITH order_by = 1
CONNECT BY PRIOR order_by + 1 = order_by
```
