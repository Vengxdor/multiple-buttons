const boxes = document.querySelectorAll(".boxes");
const boxText = document.querySelector(".activo .box-text")


// boxes.forEach(box => {
//    box.addEventListener("click", () => {
//      boxes.forEach(otherBox => otherBox.classList.remove("activo"));
//      box.classList.add("activo");
//  });
// })


boxes.forEach(box=>{
   box.addEventListener("click", event=>{
      boxes.forEach(b =>{
         b.classList.remove("activo")
         b.setAttribute("aria-extended", "false")
      })
/*=============================================================*/
      const target = event.currentTarget
      target.classList.add("activo")
      target.setAttribute("aria-extended", "true")
   })
})