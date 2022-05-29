 function fi(){
   var x=document.getElementsByClassName("peagy");
   x[0].style.display="none";
   document.body.style.overflowY="auto";
  }
function calculateNote(){
          var note=0,nbrCP=0,nbrCI=0;
          let p=eliminateP=eliminateI=false;
          let notes=document.getElementsByClassName('mdl1');
          let cycle=document.querySelector('input[type="radio"][name="CycleS"]:checked');
           for (var i = 0;i < notes.length ; i++){
                   note+=Math.abs(notes[i].value);
                   if(Math.abs(notes[i].value)>20 || Math.abs(notes[i].value)<0){p=true;}
           }
          note=(note/(notes.length)).toFixed(2);
             if(p){
                 alert('the range allowed for certain note is 0 to 20 , please Correct it !');
                 console.log('thanks for trying !');
                 note="...";
                 for (var i = 0;i < notes.length ; i++){
                      if(notes[i].value>20 || notes[i].value<0){
                        notes[i].value="";
                      }
            
                 }}
             for (var i = 0;i < notes.length ; i++){
                      if(notes[i].value<10){
                        nbrCP++;
                        if(notes[i].value<6){eliminateP=true;}
                      }
                      if(notes[i].value<12){
                        nbrCI++;
                       if(notes[i].value<7){eliminateI=true;}
                      }
                  }
          /*if(cycle.value=="P"){
                      if(note>=10 && nbrCP<4 && eliminateP==false){
                              p='<i style="background-color:lightgreen;border-radius:6px;padding: 5px 30px;margin: 20px 10px;font-size:18px;">V</i>';
                       }else{
                              p='<i style="background-color:rgb(150,0,0);border-radius:6px;padding: 5px 30px;margin: 20px 10px;font-size: 18px;">Aj</i>';
                       }
          }else{
                       if(note>=12 && nbrCI<4 && eliminateI==false){
                              p='<i style="background-color:lightgreen;border-radius:6px;padding: 5px 30px;margin: 20px 10px;font-size:18px;">V</i>';
                       }else{
                              p='<i style="background-color:rgb(150,0,0);border-radius:6px;padding: 5px 30px;margin: 20px 10px;font-size:18px;">Aj</i>';
                       }
          } */
               if((cycle.value=="P" && note>=10 && nbrCP<4 && eliminateP==false)||(cycle.value=="I" && note>=12 && nbrCI<4 && eliminateI==false)){
                              p='<i style="background-color:lightgreen;border-radius:6px;padding: 5px 30px;margin: 20px 10px;font-size:18px;">V</i>';
                }else{
                              p='<i style="background-color:rgb(150,0,0);border-radius:6px;padding: 5px 30px;margin: 20px 10px;font-size: 18px;">Aj</i>';
                }
          document.getElementById('outty1').innerHTML=`${note}`
          document.getElementById('outty2').innerHTML=`${p}`
      }
     /*---------------------------------JAVASCRIPT1----------------------------------*/
    function lookfor(){
        var z=[];
        var x=document.getElementById("in").value.toLowerCase();
        const y=document.getElementsByClassName("lookyR");
         for(var i=0;i<y.length;i++){z[i]=false;
         	            for(var k=0;k<y[i].innerText.length-x.length+1;k++){
         	                     if(y[i].innerText.substring(k,k+x.length).toLowerCase()==x){
         	                                 z[i]=true;
         	                     }
         	                     if(z[i]){
         	                                 y[i].style.display="block";
         	                     }else{
                     	                     y[i].style.display="none";
         	                     }
                     }
     }
    
}
     /*---------------------------------JAVASCRIPT1----------------------------------*/

function dateyy(){
    const months = ["Janvier", "Fevrier", "Mars", "Avril", "mai","juin", "Juillet", "aout", "September", "October", "November", "December"];
    const days=["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"]
    const d = new Date();
    let month = months[d.getMonth()];
    let name_day=days[d.getDay()];
    const year= d.getFullYear();
    const day=d.getDate();
    let timey =name_day +"  "+day+"  "+ month +"  "+ year;
    document.getElementById("topTime").textContent=timey;
  }
     /*---------------------------------JAVASCRIPT1----------------------------------*/
   /* var k=1;
	function funhide(){
		var x=document.getElementById("pow");
		if(k%2==0){
	   x.style.left="0vw";
	   x.style.margin="0";
	   document.getElementById("z").style.filter="blur(0px)";
	   
	}else {
		x.style.left="92.5vw";
		x.style.width="7.5vw";
		document.getElementById("z").style.filter="blur(8px)";
	}
	k++;
	}*/
	var c=1;
	function fun2hide(){
		var b=document.getElementById("pow");
		if(c%2==0){
	   b.style.left="0vw";
	   document.getElementById("z_2").style.filter="blur(0px)";
      document.body.style.overflow="auto";

	}else {
		b.style.left="92.5vw";
	    b.style.width="7.5vw";
      document.body.style.overflow="hidden";
		document.getElementById("z_2").style.filter="blur(8px)";
	}
	c++;
	} 
	/*---------------------------------JAVASCRIPT2----------------------------------*/

function hideheader(x1) {
  if (x1.matches) { // If media query matches
  	var y1=document.getElementsByClassName("pellow");
    for (var i = y1.length - 1; i >= 0; i--) {
	y1[i].style.display = "none";
	 }
	document.getElementById("pow").style.display="inline";
	document.getElementById("powxx").style.display="inline";
}}
function showheader(x2) {
  if (x2.matches) { // If media query matches
  	var y2=document.getElementsByClassName("pellow");
    for (var i = y2.length - 1; i >= 0; i--) {
	y2[i].style.display = "inline";
	 }
    document.getElementById("pow").style.display="none";
    document.getElementById("powxx").style.display="none";
}}
var x1 = window.matchMedia("(max-width: 768px)")
hideheader(x1) // Call listener function at run time
x1.addListener(hideheader) // Attach listener function on state changes
var x2 = window.matchMedia("(min-width: 769px)")
showheader(x2) // Call listener function at run time
x2.addListener(showheader) // Attach listener function on state changes
