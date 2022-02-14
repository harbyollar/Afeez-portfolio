/** script for the navbar when body scrolled down */
window.onscroll = function() {scrollFunction()
};
    
    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav").style.backgroundColor = "black";
        document.getElementById("nav").style.color = "white";
      } else {
        document.getElementById("nav").style.backgroundColor = "white";
        document.getElementById("nav").style.color = "black";
      }
    }

/**script for the experience/ eduction/trainings */
function Exp(){
  document.getElementById('demo').innerHTML = document.getElementById('exp').style.display = "block";
  document.getElementById('edu').style.display = "none";
  document.getElementById('train').style.display = "none"
}
function Train(){
  document.getElementById('demo').innerHTML = document.getElementById('train').style.display = "block";
  document.getElementById('edu').style.display = "none";
  document.getElementById('exp').style.display = "none"
}
function Edu(){
  document.getElementById('demo').innerHTML = document.getElementById('edu').style.display = "block";
  document.getElementById('train').style.display = "none";
  document.getElementById('exp').style.display = "none"
}

/** */
document.getElementById('btn1').addEventListener("click", Exp);
document.getElementById('btn2').addEventListener("click", Edu);
document.getElementById('btn3').addEventListener("click", Train);