// Custom scripts

let select = document.querySelector('.section__order-content__form-inputs__custom__select')
let select_trigger = document.querySelector('.section__order-content__form-inputs__custom_trigger')
let value = document.querySelectorAll('.section__order-content__form-inputs__custom__select-option')
let select__arrow = document.querySelector('.select__arrow')
let input_range = document.querySelector('.input-range')
let range_value = document.querySelector('.section__order-content__form-range__label-info__percent')

select_trigger.addEventListener('click', () => {
    select.classList.toggle('active')
    if(select.classList.contains('active')) {
        select_trigger.style.color = '#FFFFFF'
        select_trigger.style.backgroundColor = '#3D4050'
        select__arrow.setAttribute('src', '../img/top_arrow.svg')
    } else {
        select_trigger.style.color = '#272733'
        select_trigger.style.backgroundColor = '#FFFFFF'
        select__arrow.setAttribute('src', '../img/bottom_arrow.svg')
    }
})

for (let i of value){
    i.addEventListener('click', () => {
        select_trigger.innerHTML = `${i.getAttribute('value')} <img class="select__arrow" src="../img/bottom_arrow.svg" alt="icon">`
        select.classList.remove('active')
        select_trigger.style.color = '#272733'
        select_trigger.style.backgroundColor = '#FFFFFF'
    })
}


input_range.addEventListener('input', () => {
    range_value.innerHTML = `${input_range.value} %`
})


// Бургер меню

let menu = document.querySelector('.menu')
let btn = document.querySelector('.burger')



btn.addEventListener('click', () => {
    menu.classList.toggle('menu_active')
})