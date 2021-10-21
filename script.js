STYLE 1

let btn = document.querySelector("button");
let div = document.querySelector("div");
btn.addEventListener("click", () => {
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
});

================================================
  
STYLE 2

function clicked(){
   if(img==1){
   document.getElementById("img").style.display="inline";
     return img=0;
   } else{
      document.getElementById("img").style.display="none";
     return img=1;
   }

}
