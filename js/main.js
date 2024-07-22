window.addEventListener('DOMContentLoaded', (event) => {
    const textElement = document.getElementById('text');
    const lines = textElement.innerHTML.split('<br>');
    const lastThreeLines = lines.slice(-3).join('<br>');
    const remainingLines = lines.slice(0, -3).join('<br>');
    
    textElement.innerHTML = `${remainingLines}<span class="indent">${lastThreeLines}</span>`;
});

// Добавляем класс indent с необходимыми стилями
const style = document.createElement('style');
style.innerHTML = `
    .indent {
        display: block;
    margin-left: -200px;
    }
`;
document.head.appendChild(style);



document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.services_card');

    serviceCards.forEach(card => {
        card.querySelector('.services_view_block').addEventListener('click', () => {
            if (card.classList.contains('active')) {
                card.classList.remove('active');
            } else {
                serviceCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            }
        });
    });
});

$(document).ready(function(){
    $('.c_desctop').carousel();

    var carouselInstance = M.Carousel.getInstance($('.carousel'));

    $('#next-slide').click(function() {
        carouselInstance.next();
    });

    $('#prev-slide').click(function() {
        carouselInstance.prev();
    });
});

$(document).ready(function(){
    $('.c_mobile').carousel({
        fullWidth: true,
    indicators: true,
    });
    
});


function toggleReview(id) {
    var card = document.getElementById(id);
    var info = card.querySelector('.reviews_info');
    var button = card.querySelector('.reviews_button span');
    
    if (info.classList.contains('expanded')) {
        info.classList.remove('expanded');
        button.innerText = 'Подробнее';
    } else {
        info.classList.add('expanded');
        button.innerText = 'Скрыть';
    }
}
