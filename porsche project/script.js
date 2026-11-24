const burgerIcons = document.querySelector(".burger-icons");
const openMenu = document.querySelector("#open");
const closeMenu = document.querySelector("#close")
const mobileMenuList = document.querySelector(".mobile-menu-list")
burgerIcons.addEventListener("click", function(){
    openMenu.classList.toggle("hide")
    closeMenu.classList.toggle("hide")
    mobileMenuList.classList.toggle("show-menu")
})

const btnAll = document.querySelector("#buyCarAll")
const btnTesla = document.querySelector("#buyCarTesla")
const btnAudi = document.querySelector("#buyCarAudi")
const btnPorsche = document.querySelector("#buyCarPorsche")

const tesla = document.querySelectorAll('[data-brand="tesla"]')
const audi = document.querySelectorAll('[data-brand="audi"]')
const porsche = document.querySelectorAll('[data-brand="porsche"]')
const allcar = document.querySelectorAll('.buyCarBox')
console.log(tesla)
btnAll.addEventListener("click", function(){
    for(let i = 0;i<allcar.length; i = i+1){
        if(tesla[i]){
        tesla[i].style.display = "block"
        console.log(tesla[i])
        }
        if(audi[i]){
        audi[i].style.display = "block"
        console.log(audi[i])
        }
        if(porsche[i]){
        porsche[i].style.display = "block"
        console.log(porsche[i])
        }
    }
})
btnTesla.addEventListener("click", function(){
    for(let i = 0;i<allcar.length; i = i+1){
        if(tesla[i]){
        tesla[i].style.display = "block"
        console.log(tesla[i])
        }
        if(audi[i]){
        audi[i].style.display = "none"
        console.log(audi[i])
        }
        if(porsche[i]){
        porsche[i].style.display = "none"
        console.log(porsche[i])
        }
    }
})
btnAudi.addEventListener("click", function(){
    for(let i = 0;i<allcar.length; i = i+1){
        if(tesla[i]){
        tesla[i].style.display = "none"
        console.log(tesla[i])
        }
        if(audi[i]){
        audi[i].style.display = "block"
        console.log(audi[i])
        }
        if(porsche[i]){
        porsche[i].style.display = "none"
        console.log(porsche[i])
        }
    }
})
btnPorsche.addEventListener("click", function(){
    for(let i = 0;i<allcar.length; i = i+1){
        if(tesla[i]){
        tesla[i].style.display = "none"
        console.log(tesla[i])
        }
        if(audi[i]){
        audi[i].style.display = "none"
        console.log(audi[i])
        }
        if(porsche[i]){
        porsche[i].style.display = "block"
        console.log(porsche[i])
        }
    }
})