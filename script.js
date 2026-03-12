function abrirGoogleCalendar(){

const titulo = encodeURIComponent("Boda Norma & Carlos")

const descripcion = encodeURIComponent("Nos casamos")

const ubicacion = encodeURIComponent("Ceremonia y evento")

const inicio = "20260627T160000"
const fin = "20260627T230000"

const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${titulo}&details=${descripcion}&location=${ubicacion}&dates=${inicio}/${fin}`

window.open(url, "_blank")



}
/* =========================
   ABRIR SOBRE
========================= */

const openBtn = document.getElementById("openInvite")
const music = document.getElementById("music")

if(openBtn){

openBtn.onclick = () => {

const envelope = document.getElementById("envelope")

/* iniciar musica */
if(music){
music.play().catch(()=>{})
}

envelope.classList.add("open")

setTimeout(()=>{

envelope.style.opacity="0"

},900)

setTimeout(()=>{

envelope.style.display="none"

document.body.style.overflow="auto"

},1600)

}

}


/* =========================
   MUSICA
========================= */

const btn = document.getElementById("musicBtn")

if(btn && music){

btn.onclick = () => {

if(music.paused){
music.play()
}else{
music.pause()
}

}

}


/* =========================
   COUNTDOWN
========================= */

const countdown = document.getElementById("countdown")

if(countdown){

const eventDate = new Date("Jun 27, 2026 16:00:00")

setInterval(()=>{

const now = new Date()

const diff = eventDate - now

const days = Math.floor(diff / (1000*60*60*24))

const hours = Math.floor((diff/(1000*60*60)) % 24)

countdown.innerHTML = `${days} días ${hours} hrs`

},1000)

}


/* =========================
   REVEAL SCROLL
========================= */

const reveals = document.querySelectorAll(".reveal")

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active")

}

})

},{
threshold:0.15
})

reveals.forEach(section=>{
observer.observe(section)
})




/* =========================
   RSVP WHATSAPP
========================= */

const rsvpForm = document.getElementById("rsvpForm")

if(rsvpForm){

rsvpForm.addEventListener("submit",function(e){

e.preventDefault()

const nombre = document.getElementById("nombre").value
const personas = document.getElementById("personas").value

const mensaje =
`Confirmación de asistencia:
Nombre: ${nombre}
Personas: ${personas}`

window.open(
`https://wa.me/521XXXXXXXXXX?text=${encodeURIComponent(mensaje)}`
)

/* ABRIR GOOGLE CALENDAR */

abrirGoogleCalendar()

})
}

const seal = document.getElementById("openInvite");
const envelopeImg = document.getElementById("envelopeImg");
const envelopeSection = document.getElementById("envelope");

seal.addEventListener("click", () => {

envelopeImg.src = "img/sobre-abierto.png";

setTimeout(()=>{

envelopeSection.style.opacity = "0";

setTimeout(()=>{
envelopeSection.style.display="none";
document.body.style.overflow="auto";
},800);

},1200);

});

/* =========================
   GALERIA SWIPE
========================= */

const slides = document.querySelectorAll(".slide")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")

let index = 0

function showSlide(i){

slides.forEach(slide => slide.classList.remove("active"))

slides[i].classList.add("active")

}

/* botones */

if(next){
next.onclick = () => {

index++

if(index >= slides.length){
index = 0
}

showSlide(index)

}
}

if(prev){
prev.onclick = () => {

index--

if(index < 0){
index = slides.length - 1
}

showSlide(index)

}
}

/* =========================
GALERIA SWIPE
========================= */

const slider = document.querySelector(".slides")

if(slider){

let startX = 0
let currentX = 0
let index = 0

const slides = slider.children
const totalSlides = slides.length

function updateSlide(){

slider.style.transform = "translateX(-" + (index * 100) + "%)"

}

slider.addEventListener("touchstart",(e)=>{

startX = e.touches[0].clientX

})

slider.addEventListener("touchmove",(e)=>{

currentX = e.touches[0].clientX

})

slider.addEventListener("touchend",()=>{

let diff = startX - currentX

if(Math.abs(diff) > 50){

if(diff > 0){

index++

}else{

index--

}

if(index < 0) index = 0
if(index >= totalSlides) index = totalSlides - 1

updateSlide()

}

})

}
