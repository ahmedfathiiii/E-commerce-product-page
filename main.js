let hamburger = document.querySelector(".hamburger")
let closeside = document.querySelector(".closeside")
let navbarmobile = document.querySelector(".navbarmobile")
let blackback = document.querySelector(".blackback")
let thumb = document.querySelectorAll(".thumb")
let mainimg = document.querySelector(".mainimg")
let productimg = document.querySelector(".productimg")

hamburger.addEventListener("click", () => {
    navbarmobile.style.transform = "translateX(0)"
    blackback.style.display = "block"
    navbarmobile.classList.add("transition")
    blackback.classList.add("transition")
})
closeside.addEventListener("click", () => {
    navbarmobile.style.transform = "translateX(-450px)"
    blackback.style.display = "none"
})





let thumbarr = Array.from(thumb)
thumbarr.forEach(e => {
    e.addEventListener("click", () => {
        thumbarr.forEach(s => {
            s.classList.remove("active")
        })
        e.classList.toggle("active")
        let l = e.src.split("/").splice(-1).toString()
        let out = l.slice(0, 15)
        out += ".jpg"
        mainimg.src = `images/${out}`
    })
})

// to view full photo
let productimgview = document.querySelector(".lightboxmain")
let mainimgview = document.querySelector(".mainimgview")
let thumbview = document.querySelectorAll(".thumbview")
let closebox = document.querySelector(".closebox")
mainimg.addEventListener("click", () => {
    productimgview.style.display = "flex"
    let thumbarrview = Array.from(thumbview)
    thumbarrview.forEach(e => {
        e.addEventListener("click", () => {
            thumbarrview.forEach(s => {
                s.classList.remove("active")
            })
            e.classList.toggle("active")
            let l = e.src.split("/").splice(-1).toString()
            let out = l.slice(0, 15)
            out += ".jpg"
            mainimgview.src = `images/${out}`
        })
    })

})

closebox.addEventListener("click", () => {
    if (productimgview.style.display == "flex") {
        productimgview.style.display = "none"
    }
})



let minus = document.querySelector(".minus")
let plus = document.querySelector(".plus")
let count = document.querySelector(".num")
let d = 0

plus.addEventListener("click", () => {
    count.innerHTML = ++d
})
minus.addEventListener("click", () => {
    if (d >= 2) {
        count.innerHTML = --d
    } else {
        return
    }
})

// show your cart

let cartbut = document.querySelector(".cart")
let cartproduct = document.querySelector(".cartproduct")

cartbut.addEventListener("click", () => {
    cartproduct.classList.toggle("show")
})

// add to cart & delete from cart
let addtocart = document.querySelector(".addtocart")
let productcartphoto = document.querySelector(".productcartphoto")
let productcartname = document.querySelector(".productcartname")
let productcartcheckin = document.querySelector(".productcartcheckin")
let productcartprice = document.querySelector(".productcartprice")
let price = document.querySelector(".pricenum")
let productcarttotalprice = document.querySelector(".productcarttotalprice")
let empty = document.querySelector(".empty")
let cartcount = document.querySelector(".cartcount")
addtocart.addEventListener("click", () => {
    if (count.innerHTML > 0) {
        productcartphoto.src = mainimg.src
        productcartcheckin.style.display = "flex"
        productcartprice.innerHTML = `${price.innerHTML} x ${count.innerHTML}`
        let totalout = parseInt(price.innerHTML.slice(1, -1)) * parseInt(count.innerHTML)
        productcarttotalprice.innerHTML = `$${totalout}`
        empty.style.display = "none"
        cartcount.innerHTML = count.innerHTML
        cartcount.style.display = "block"


    }
})

let deletebut = document.querySelector(".delete")
deletebut.addEventListener("click", () => {
    productcartcheckin.style.display = "none"
    empty.style.display = "flex"
    cartcount.style.display = "none"
})

// slideshow mobile

let prevBut = document.querySelector(".prev")
let nextBut = document.querySelector(".next")
let slides = document.querySelectorAll(".slide")
let slidesarr = Array.from(slides)
console.log(slidesarr)

nextBut.addEventListener("click", () => {
    for (let i = 0; i < slidesarr.length; i++) {
        if (slidesarr[i].classList.contains("show")) {
            slidesarr[i].classList.remove("show")
            i += 1
            slidesarr[i].classList.add("show")
        } else if (slidesarr[3].classList.contains("show")) {
            slidesarr[3].classList.remove("show")
            slidesarr[0].classList.add("show")
        }
    }
})
prevBut.addEventListener("click", () => {
    for (let i = 0; i < slidesarr.length; i++) {
        if (slidesarr[i].classList.contains("show")) {
            slidesarr[i].classList.remove("show")
            i -= 1
            slidesarr[i].classList.add("show")
        } else if (slidesarr[0].classList.contains("show")) {
            slidesarr[0].classList.remove("show")
            slidesarr[3].classList.add("show")
        }
    }
})

setInterval(() => {
    for (let i = 0; i < slidesarr.length; i++) {
        if (slidesarr[i].classList.contains("show")) {
            slidesarr[i].classList.remove("show")
            i += 1
            slidesarr[i].classList.add("show")
        } else if (slidesarr[3].classList.contains("show")) {
            slidesarr[3].classList.remove("show")
            slidesarr[0].classList.add("show")
        }
    }
}, 10000)




