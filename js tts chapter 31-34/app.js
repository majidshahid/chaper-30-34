var date = new Date();
document.write(date + "<br>");


var month =date.getMonth();
var monthName = ["january","february","march","april","may","june","july","aug","sep","oct","nov","dec"];
alert("current Month : "+ monthName[month]);


var day = date.getDay();
var dayname = ["sun","mon","tue","wed","thu","fri","sat"];
alert("today is "+  dayname [day]);


if (dayname[day]=== "sun"||dayname[day]=== "sat"){
    document.write("its fun day")
}

var days = date.getDate();
if (days < 16){
document.write("First fifteen days of the month")
}else if(days >=16){
    document.write('last fifteen days of the month')
}

document.write("current date : "+ date + "<br>");

var olddate = date.getTime();
var second = date.getSeconds();
document.write("millisecond since january 1,1970 : "+ olddate + "<br>")
document.write("second since january 1,1970 : "+ second + "<br>")


var hours = date.getHours();
console.log(hours)
if (hours == 1-12){
document.write("its AM" + "<br>")
}else {
    document.write("its PM" + "<br>")
}



var yesterday = new Date(date)
yesterday.setDate(yesterday.getDate() - 1)
document.write("later date : " + yesterday)


var ramadan = new Date("April 14, 2021");
var diffb = date.getTime();
var b =ramadan.getTime();
var diff = diffb-b;
var calculateDay= Math.round(diff/(1000*60*60*24));
alert (calculateDay +" days have passed since 1st ramadan ,2021");


var reffdate= new Date("Dec 1, 2015");
var ans = Math.round((date.getTime()-reffdate.getTime())/1000) ;
document.write ("On Reference Date : " + reffdate+ "<br>");
document.write(ans + "second passed since 1/12/2015" +"<br>");


var hours1= new Date(date);
hours1.setHours(hours1.getHours()-1);
document.write("current date : " + date +"<br>");
document.write("1 hours ago :"+hours1 +"<br>")


var hundradYearAgo = new Date(date);
hundradYearAgo.setFullYear(hundradYearAgo.getFullYear()-100);
document.write("current date : " + date +"<br>");
document.write("100 Year Ago : " + hundradYearAgo + "<br>") 

var  mm = prompt("enter date if birth","1/apr/2001");
var dob = new Date (mm);
var date1 = new Date();
var month = dob.getFullYear()
var datemonth = date1.getFullYear()
var age = (datemonth - month );
document.write(age + "<br>");

var customerName =prompt("enter your name ","majid");
var month = prompt("enter month ","apr");
var numunit = +prompt("enter your unit","700");
 var unit = 16;
 var afterduadate = numunit*unit
 var latecharge= 350;
 var latebill =afterduadate+latecharge
 document.write ("Customer Name : "+ customerName +"<br>");
 document.write ("Month : "+ month +"<br>");
 document.write ("Number of Unit  : "+ numunit +"<br>");
 document.write ("Charges per unit : "+ unit +"<br>");
 document.write("Net Amount payable (with in dua date) : " + afterduadate +"<br>" );
 document.write("late payment surcharge : " + latecharge+ "<br>");
 document.write("Gross Amount Payable (after dua date ) : " + latebill+"<br>" )