// Show and Hide in Services 

let courseShow = document.getElementById("coursesShow")
let eventShow = document.getElementById("eventsShow")
let courses = document.getElementById("courses")
let events = document.getElementById("events")
let goBackBtn = document.getElementById("goBackBtn")

function coursesShow() {
    courseShow.classList.add("active")
    eventShow.classList.add("active")
    courses.classList.remove("active")
    goBackBtn.classList.remove("active")
}

function eventsShow() {
    courseShow.classList.add("active")
    eventShow.classList.add("active")
    events.classList.remove("active")
    goBackBtn.classList.remove("active")
}

function goBack() {
    courseShow.classList.remove("active")
    eventShow.classList.remove("active")
    events.classList.add("active")
    courses.classList.add("active")
    goBackBtn.classList.add("active")
}


// Scrool To Top Btn 

let scrollBtn = document.getElementById("scrollBtn")

window.onscroll = function(){
    if(window.scrollY > 100){
        scrollBtn.style.display= "block"
    }else{
        scrollBtn.style.display= "none"
    }
}

scrollBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// Register alert 

function courseRegister() {
    alert("You have successfully registered for this course")
}

// Show Pass 
let pass = document.getElementById("password")
let eyeShow = document.getElementById("eyeShow")

function showPass(){
    if(pass.type === "password"){
        pass.type = "text"
        eyeShow.innerHTML = '<i class="fas fa-eye-slash"></i>'
    }else {
        pass.type = "password"
        eyeShow.innerHTML = '<i class="fa-solid fa-eye"></i>'
    }
}