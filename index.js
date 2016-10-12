function mytimmer() {
   mydate = new Date();
   y = mydate.getFullYear();
   z = mydate.getMonth();
   w = mydate.getDay();
   d = mydate.getDate();
   h = mydate.getHours();
   m = mydate.getMinutes();
   s = mydate.getSeconds();
  ms = mydate.getMilliseconds();
  rr = h +":"+ m +":"+s 
 document.getElementById("time").innerHTML = rr ;
 setTimeout("mytimmer()", 1000);
 }
mytimmer();