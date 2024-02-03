let button_top = 20
let button_bottom = 50
let font_size = 1.5
let click_count = 0

let message = ["ไม่", "ใช่หยออ", "ม่ายเชื่อ", "แน่ใจหยออ", "ไม่รักเราจิงหยออ", "เราเลี้ยงหนมนาาา", "แต่เยารักแกนาาา", "แงงงงงงงงงง", "รักเราเถอะนาาาาาา", "นาาาาาาาาาาาาาาา"]

function Iloveyou() {
    button_top += 20
    button_bottom += 20
    font_size += 1.5

    if (click_count < 9) {
        click_count += 1
    }
    document.getElementById('btn-yes').style.padding = `${button_top}px ${button_bottom}px`
    document.getElementById('btn-yes').style.fontSize = `${font_size}rem`
    document.getElementById('btn-no').innerHTML = message[click_count]
}

function yesIloveyou() {
    document.getElementById('text').innerHTML = "เยยยยยยย้เราก้รักแกนะคะะ"
    document.getElementById('btn').remove()
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('btn-no').addEventListener('click', Iloveyou);
    document.getElementById('btn-yes').addEventListener('click', yesIloveyou);
});