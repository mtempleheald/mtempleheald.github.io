I stole this script from somewhere, I forget where. I found it useful at the time for testing planned schedules for dbms_scheduler jobs.  

```PLSQL
declare
   l_start_date         TIMESTAMP;
   l_next_date          TIMESTAMP;
   l_return_date        TIMESTAMP;
   daily_6am            CONSTANT VARCHAR2(4000) := \'FREQ=DAILY; BYHOUR=6\';
   weekdays_3am         CONSTANT VARCHAR2(4000) := \'FREQ=DAILY; BYDAY=MON,TUE,WED,THU,FRI; BYHOUR=3\';
   hourly_25past        CONSTANT VARCHAR2(4000) := \'FREQ=HOURLY; BYMINUTE=25\';
   workday_20mins       CONSTANT VARCHAR2(4000) := \'FREQ=MINUTELY; BYHOUR=9,10,11,12,13,14,15,16,17; INTERVAL=20\';
   lastSunofmonth315pm  CONSTANT VARCHAR2(4000) := \'FREQ=MONTHLY; BYDAY=-1SUN; BYHOUR=15; BYMINUTE=15\';
   every5minutes        CONSTANT VARCHAR2(4000) := \'FREQ=MINUTELY; INTERVAL=5\';
   every5minsplus2      CONSTANT VARCHAR2(4000) := \'FREQ=MINUTELY; BYMINUTE=2,7,12,17,22,27,32,37,42,47,52,57\';
   
   l_calendar         VARCHAR2(4000) := every5minsplus2;
begin
   l_start_date := trunc(SYSTIMESTAMP);
   l_return_date := l_start_date;
   for ctr in 1..100 loop
      dbms_scheduler.evaluate_calendar_string (l_calendar
                                              ,l_start_date
                                              ,l_return_date
                                              ,l_next_date);
      dbms_output.put_line(\'Next Run on: \' ||
          to_char(l_next_date,\'day dd/mm/yyyy hh24:mi:ss\')
      );
      l_return_date := l_next_date;
   end loop;
end;
```