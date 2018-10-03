document.getElementById("hibiscus").addEventListener("click", moveit);
var h1Tag=document.getElementsByTagName("h1")[0];

function moveit(ele){
    //alert(ele.target.src);
    //var h1Tag= document.getElementsByTagName("h1")[0];
    h1Tag.style.position= "relative";
    h1Tag.style.top="150px";
    document.getElementsByTagName("footer")[0].style.backgroundColor="purple";


    var timer= setInterval(flashImage, 3000);

}
 function flashImage(){
     var img=document.getElementById("hibiscus");
     var cls = img.className;
     if(cls =="show"){
         img.className="hide";
         h1Tag.style.display= "block";
     }
    else{
        img.className="show";
        h1Tag.style.display = "none";
    }
 }