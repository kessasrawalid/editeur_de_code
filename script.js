var codes=document.getElementById("codes");
var play=document.getElementById("play");
var remove=document.getElementById("remove");
var result=document.getElementById("result");


play.onclick =()=>{
result.innerHTML=codes.value;
localStorage.setItem("result",codes.value);

}
remove.onclick =()=>{
    result.innerHTML="";
    
    
    }

onload =()=>{
       codes.value=localStorage.getItem("result");
       result.innerHTML=codes.value;
        
        }