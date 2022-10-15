const btnMenu = document.querySelector(".nav-wrapper i")
const navMenu = document.querySelector(".nav-wrapper")

const btnClick = () => {
    navMenu.classList.toggle("active")
}

btnMenu.addEventListener("click", btnClick)

const btnOffer1 = document.querySelector(".first")
const mainOffer1 = document.querySelector(".offer1")

const btnOffer2 = document.querySelector(".second")
const mainOffer2 = document.querySelector(".offer2")

const btnOffer3 = document.querySelector(".third")
const mainOffer3 = document.querySelector(".offer3")

const offerClick1 = () => {
    mainOffer1.classList.toggle("active")
    btnOffer1.classList.toggle("active")
}

btnOffer1.addEventListener("click", offerClick1)

const offerClick2 = () => {
    mainOffer2.classList.toggle("active")
    btnOffer2.classList.toggle("active")
}

btnOffer2.addEventListener("click", offerClick2)

const offerClick3 = () => {
    mainOffer3.classList.toggle("active")
    btnOffer3.classList.toggle("active")
}

btnOffer3.addEventListener("click", offerClick3)

// alert("PRZECZYTAJ NAJPIERW!")