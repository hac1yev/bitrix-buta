$('.slick').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
	touchThreshold : 100,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 3,
    speed: 500,
	centerMode: true,
    nav: false,
    arrows: false,
    responsive: [{
            breakpoint: 969,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 601,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

const all_reference_button = document.querySelector('#all_reference_button');
const reference_show_id = document.querySelector('#referance-show-id');
const color_mode = document.querySelector('#color_mode');
const btn_color_mode_switch_inner = document.querySelector('.btn-color-mode-switch-inner');
const percent = document.querySelector('.percent');
const basic_h2 = document.querySelector('#basic_h2');
const standart_h2 = document.querySelector('#standart_h2');
const professional_h2 = document.querySelector('#professional_h2');
const enterprice_h2 = document.querySelector('#enterprice_h2');
const enterprice_select = document.querySelector('#enterprice_select');

all_reference_button.addEventListener('click', () => {
    reference_show_id.classList.toggle('show_hide_all_referance');
})

color_mode.addEventListener('click', (e) => {
    percent.classList.toggle('perc');
    if(e.target.checked) {
        btn_color_mode_switch_inner.classList.add('switch-inner-after');
        basic_h2.innerHTML = '$ 588';
        standart_h2.innerHTML = '$ 1188';
        professional_h2.innerHTML = '$ 2388';
        if(enterprice_select.value === '250u') {
            enterprice_h2.innerHTML = '$ 4788';
        }
        if(enterprice_select.value === '500u') {
            enterprice_h2.innerText = '$7668'
        }
        if(enterprice_select.value === '1000u') {
            enterprice_h2.innerText = '$9588'
        }
        if(enterprice_select.value === '2000u') {
            enterprice_h2.innerText = '$19188'
        }
        if(enterprice_select.value === '3000u') {
            enterprice_h2.innerText = '$28788'
        }
        if(enterprice_select.value === '4000u') {
            enterprice_h2.innerText = '$38388'
        }
        if(enterprice_select.value === '5000u') {
            enterprice_h2.innerText = '$47988'
        }
        if(enterprice_select.value === '6000u') {
            enterprice_h2.innerText = '$57588'
        }
        if(enterprice_select.value === '7000u') {
            enterprice_h2.innerText = '$67188'
        }
        if(enterprice_select.value === '8000u') {
            enterprice_h2.innerText = '$76788'
        }
        if(enterprice_select.value === '9000u') {
            enterprice_h2.innerText = '$86388'
        }
        if(enterprice_select.value === '10000u') {
            enterprice_h2.innerText = '$95988'
        }
    }else{
        btn_color_mode_switch_inner.classList.remove('switch-inner-after');
        basic_h2.innerHTML = '$ 183';
        standart_h2.innerHTML = '$ 372';
        professional_h2.innerHTML = '$ 747';
        if(enterprice_select.value === '250u') {
            enterprice_h2.innerText = '$1497'
        }
        if(enterprice_select.value === '500u') {
            enterprice_h2.innerText = '$2397'
        }
        if(enterprice_select.value === '1000u') {
            enterprice_h2.innerText = '$2997'
        }
        if(enterprice_select.value === '2000u') {
            enterprice_h2.innerText = '$5997'
        }
        if(enterprice_select.value === '3000u') {
            enterprice_h2.innerText = '$8997'
        }
        if(enterprice_select.value === '4000u') {
            enterprice_h2.innerText = '$11997'
        }
        if(enterprice_select.value === '5000u') {
            enterprice_h2.innerText = '$14997'
        }
        if(enterprice_select.value === '6000u') {
            enterprice_h2.innerText = '$17997'
        }
        if(enterprice_select.value === '7000u') {
            enterprice_h2.innerText = '$20997'
        }
        if(enterprice_select.value === '8000u') {
            enterprice_h2.innerText = '$23997'
        }
        if(enterprice_select.value === '9000u') {
            enterprice_h2.innerText = '$26997'
        }
        if(enterprice_select.value === '10000u') {
            enterprice_h2.innerText = '$29997'
        }
    }
});

enterprice_select.addEventListener('change', (e) => {
    if(!color_mode.checked) {
        if(e.target.value === '250u') {
            enterprice_h2.innerText = '$1497'
        }
        if(e.target.value === '500u') {
            enterprice_h2.innerText = '$2397'
        }
        if(e.target.value === '1000u') {
            enterprice_h2.innerText = '$2997'
        }
        if(e.target.value === '2000u') {
            enterprice_h2.innerText = '$5997'
        }
        if(e.target.value === '3000u') {
            enterprice_h2.innerText = '$8997'
        }
        if(e.target.value === '4000u') {
            enterprice_h2.innerText = '$11997'
        }
        if(e.target.value === '5000u') {
            enterprice_h2.innerText = '$14997'
        }
        if(e.target.value === '6000u') {
            enterprice_h2.innerText = '$17997'
        }
        if(e.target.value === '7000u') {
            enterprice_h2.innerText = '$20997'
        }
        if(e.target.value === '8000u') {
            enterprice_h2.innerText = '$23997'
        }
        if(e.target.value === '9000u') {
            enterprice_h2.innerText = '$26997'
        }
        if(e.target.value === '10000u') {
            enterprice_h2.innerText = '$29997'
        }
    }else{
        if(e.target.value === '250u') {
            enterprice_h2.innerText = '$4788'
        }
        if(e.target.value === '500u') {
            enterprice_h2.innerText = '$7668'
        }
        if(e.target.value === '1000u') {
            enterprice_h2.innerText = '$9588'
        }
        if(e.target.value === '2000u') {
            enterprice_h2.innerText = '$19188'
        }
        if(e.target.value === '3000u') {
            enterprice_h2.innerText = '$28788'
        }
        if(e.target.value === '4000u') {
            enterprice_h2.innerText = '$38388'
        }
        if(e.target.value === '5000u') {
            enterprice_h2.innerText = '$47988'
        }
        if(e.target.value === '6000u') {
            enterprice_h2.innerText = '$57588'
        }
        if(e.target.value === '7000u') {
            enterprice_h2.innerText = '$67188'
        }
        if(e.target.value === '8000u') {
            enterprice_h2.innerText = '$76788'
        }
        if(e.target.value === '9000u') {
            enterprice_h2.innerText = '$86388'
        }
        if(e.target.value === '10000u') {
            enterprice_h2.innerText = '$95988'
        }
    }
});