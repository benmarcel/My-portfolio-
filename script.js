const main = document.querySelector(".main")
const navIcon = document.querySelector(".nav-icon")
const toggleIcon = document.querySelector(".toggle-icon")
const moon = document.querySelector(".moon")
const sun = document.querySelector(".sun")
const sidebar = document.querySelector(".sidebar")
const close = document.querySelector(".close")
const readBtn = document.querySelector(".read")
const article = document.querySelector(".article")
toggleIcon.addEventListener("click", ()=>{
    if (main.classList.contains("dark")) {
        main.classList.remove("dark")
        main.classList.add("light")
        sun.classList.add("hidden")
        moon.classList.remove("hidden")

    }else{
        main.classList.add("dark")
        main.classList.remove("light")
        sun.classList.remove("hidden")
        moon.classList.add("hidden")

    }
})
let rect = article.offsetHeight

readBtn.addEventListener("click", ()=>{
    console.log(typeof(rect), rect);
    
    if (readBtn.textContent === "Read more") {
        article.style.height = "100%"
        readBtn.textContent = "Show less"
    }else{
      article.style.height = `${rect}px`;
        readBtn.textContent = "Read more"
    }
})
navIcon.addEventListener("click", ()=>{
    sidebar.classList.remove("hidden")
})
close.addEventListener("click", ()=>{
    sidebar.classList.add("hidden")
})

