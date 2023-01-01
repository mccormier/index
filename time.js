const time = new Date();
// date part ///
var month=time.getMonth()+1;
var day=time.getDate();
var year=time.getFullYear();
if (month <10 ){month='0' + month;}
if (day <10 ){day='0' + day;}
var x3= month+'-'+day+'-'+year;
// time part //
var hour=time.getHours();
var minute=time.getMinutes();
var second=time.getSeconds();
if(hour <10 ){hour='0'+hour;}
if(minute <10 ) {minute='0' + minute; }
var x3 = x3 + ' ' +  hour+':'+minute+':'+second
// these are the most useful ones IMO

time.getDate(); // returns value 1-31 for day of the month

time.getDay(); //returns value 0-6 for day of the week

time.getFullYear(); //returns a 4 digit value for the current year

time.getHours(); //returns value 0-23 for the current hour

time.getMinutes(); //returns value 0-59 for the current minute of the hour

time.getSeconds(); //returns value 0-59 for current second of the minute

time.getMilliseconds(); //returns value 0-999 for current ms of the second

time.getTime(); //returns date as ms since Jan 1, 1970

time.toDateString(); //returns a string (e.g. "Fri May 9 2020")

time.toLocaleString(); //returns date and time (e.g. "9/12/2015, 6:08:25 PM")

time.toLocaleTimeString(); //returns time (e.g. "6:08:25 PM")

time.toLocaleDateString(); //returns date (e.g. "9/12/2015")

let now = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();