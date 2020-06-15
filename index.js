 let boxUno = document.getElementById("box-1");
 let boxDos = document.getElementById("box-2");
 let boxTres = document.getElementById("box-3");
 let boxCuatro = document.getElementById("box-4");
 
 let img1 = document.getElementById("dolce");
 let img2 = document.getElementById("pera");
 let img3 = document.getElementById("demi");
 let img4 = document.getElementById("tentacion");

let boxtextoUno = document.getElementById("contendortexto");
let boxtextodos = document.getElementById("contendortexto2");
let boxtextoTres = document.getElementById("contendortexto3");
let boxtextoCuatro = document.getElementById("contendortexto4");

boxUno.addEventListener("mouseover", mouseOver);
boxUno.addEventListener("mouseout", mouseOut);

boxDos.addEventListener("mouseover", mouseOver2);
boxDos.addEventListener("mouseout", mouseOut2);

boxTres.addEventListener("mouseover", mouseOver3);
boxTres.addEventListener("mouseout", mouseOut3);

boxCuatro.addEventListener("mouseover", mouseOver4);
boxCuatro.addEventListener("mouseout", mouseOut4);

function mouseOver() {   
    boxtextoUno.style.display = "flex"
    img1.style.opacity = "block";

  };


  function mouseOut() {   
    boxtextoUno.style.display = "none"
    img1.style.display = "block"


  };



  function mouseOver2() {   
    boxtextodos.style.display = "flex"
    img2.style.display = "block"
  };


  function mouseOut2() {   
    boxtextodos.style.display = "none";
    img2.style.display = "block";
  };



  function mouseOver3() {   
    boxtextoTres.style.display = "flex";
    img3.style.display = "none";
  };


  function mouseOut3() {   
    boxtextoTres.style.display = "none";
    img3.style.display = "block";
  };


  function mouseOver4() {   
    boxtextoCuatro.style.display = "flex";
    img4.style.display = "none";
  };


  function mouseOut4() {   
    boxtextoCuatro.style.display = "none";
    img4.style.display = "block";
  };






let insta = document.getElementById("instagram-feed-demo");
let animado = document.querySelectorAll(".animado");
let tituloDerecha = document.getElementById("derecha");
let sidra = document.getElementById("sidra");
let logo = document.getElementById("logo");

function scroll(){
let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++){
        alturaAnimado = animado[i].offsetTop;

        if (alturaAnimado - 700 < scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("animadoArriba");
        }
}
}






function instraScroll() {
    let scrollTop = document.documentElement.scrollTop; 
    alturaAnimado = insta.offsetTop;
    
            if (alturaAnimado - 700 < scrollTop){
                insta.style.opacity = 1;
                insta.classList.add("animadoArriba");
            }
    
        alturaAnimado = insta.offsetTop;

            if (alturaAnimado - 800 < scrollTop){
              instagram.style.opacity = 1;
              instagram.classList.add("animadoArriba");
            }
    
    }




function scrollDerecha(){
    let scrollTop = document.documentElement.scrollTop;
     alturaAnimado = tituloDerecha.offsetTop;
    
        if (alturaAnimado - 800 < scrollTop){
            tituloDerecha.style.opacity = 1;
            tituloDerecha.classList.add("scale0");
        }
        


}
let form = document.getElementById("form");
let izq1 = document.getElementById("izquierda");
let instagram = document.getElementById("instagram-feed-demo");
let scaleContacto = document.getElementById("scaleContacto");
let scaleDonde = document.getElementById("scaledonde");
let scale = document.getElementById("scale");




// function instragram(){
//   let scrollTop = document.documentElement.scrollTop; 
//           alturaAnimado = instagram.offsetTop;
 
// }

function scrollScale(){
    let scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop)
     alturaAnimado = scale.offsetTop;
     scaleAnimado = scaleDonde.offsetTop;
        if (alturaAnimado - 1200 < scrollTop){
            scale.style.opacity = 1;
            scale.classList.add("scale0");

          } if(alturaAnimado - 100 < scrollTop){
                 scaleDonde.style.opacity = 1;
                 scaleDonde.classList.add("scale2");
               }

               
        
                    if (alturaAnimado - 100 < scrollTop){
                       scaleContacto.style.opacity = 1;
                        scaleContacto.classList.add("scale2");
                      }


         if (alturaAnimado - 30 < scrollTop){
            form.style.opacity = 1;
            form.classList.add("animado-derecha");

          }
  
          if (alturaAnimado - 30 < scrollTop){
            izq1.style.opacity = 1;
          izq1.classList.add("animado-derecha");
          }
         


        }
        




// function scrollContacto(){
//   let scrollTop = document.documentElement.scrollTop;
//   console.log()

//    alturaAnimado = scaleContacto.offsetTop;
  
//       if (alturaAnimado - 200 < scrollTop){
//         scaleContacto.style.opacity = 1;
//         scaleContacto.classList.add("scale2");
//       }
      
// }










//  function izqmapa(){
//   let scrollTop = document.documentElement.scrollTop;
//   alturaAnimado = izq1.offsetTop;
 
//      if (alturaAnimado - 30008 < scrollTop){
//       izq1.style.opacity = 1;
//       izq1.classList.add("animado-derecha");
//      }
     
  
//  }



// function scrollDondes(){

//       }

// function izqform(){
//   let scrollTop = document.documentElement.scrollTop; 
//           alturaAnimado = form.offsetTop;
  
//           if (alturaAnimado - 1200 < scrollTop){
//             form.style.opacity = 1;
//             form.classList.add("animado-derecha");
//           }
  
// }






function parallax(){
    let scrollTopd = document.documentElement.scrollTop;
    sidra.style.transform = 'translateY(' + scrollTopd * -0.5 + 'px)'
    // logo.style.transform = 'translateY(' + scrollTopd * -0.5 + 'px)'
    }



//  window.addEventListener('scroll', scrollContacto);

// window.addEventListener('scroll', instragram);

 window.addEventListener('scroll', scrollScale);
window.addEventListener('scroll', instraScroll);
 window.addEventListener('scroll', parallax);
window.addEventListener('scroll', scroll);
window.addEventListener('scroll', scrollDerecha);
// window.addEventListener('scroll', scrollDondes);

// // window.addEventListener('scroll', izqform);
// window.addEventListener('scroll', izqmapa);


