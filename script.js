const themeToggle = document.querySelector("#theme-toggle")
const themeIcon = document.querySelector("#theme-icon")
const allThemed = document.querySelectorAll(".themed")

themeToggle.addEventListener('click', () => {
    themeIcon.classList.toggle("down")
    themeIcon.classList.toggle("fa-moon")
    themeIcon.classList.toggle("fa-sun")

    allThemed.forEach( 
        (item) => { 
            item.classList.contains("light-theme") ? enableDarkMode(item)
            : item.classList.contains("dark-theme") ? enableLightMode(item)
            : item.classList.contains("sec-light-theme") ? enableSecDarkMode(item)
            : enableSecLightMode(item)
        }
    )
})

function enableDarkMode(item) {
    item.classList.remove("light-theme");
    item.classList.add("dark-theme");
    themeToggle.ariaLabel = "Switch to light theme"
}

function enableLightMode(item) {
    item.classList.remove("dark-theme");
    item.classList.add("light-theme");
    themeToggle.ariaLabel = "Switch to dark theme"
}

function enableSecDarkMode(item) {
    item.classList.remove("sec-light-theme")
    item.classList.add("sec-dark-theme")
}

function enableSecLightMode(item) {
    item.classList.remove("sec-dark-theme")
    item.classList.add("sec-light-theme")
}