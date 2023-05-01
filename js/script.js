/**
 * Author: Douglas Matos da Silva
 * Github: douglasmatosdev
 * App Name: damp3ft
 */

let URL_DOWNLOAD = "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q="
let input = document.querySelector("#damp3ft-text-input");

document.querySelector("#damp3ft_button").addEventListener("click", fn_damp3ft)

input.onkeydown = function (e) {
    if (e.key == "Enter") {
        fn_damp3ft()
    }
}

function fn_damp3ft() {
    let url = URL_DOWNLOAD + getInputContent()
    downloadAudio(url)
}

function getInputContent() {
    let text = input.value.trim();
    return text;
}

function downloadAudio(value) {
    window.open(value)
}