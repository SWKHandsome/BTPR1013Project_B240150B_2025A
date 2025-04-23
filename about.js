let darktheme = false;
const darkmode = document.getElementById('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
}

themeSwitch.addEventListener("click",() => {
    darktheme = !darktheme;

    if(darktheme){
        enableDarkmode()
    }else{
        disableDarkmode()
    }
})
