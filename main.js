$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.modal').modal({
        startingTop: '90%',
        endingTop: '20%'
    });
    $('.materialboxed').materialbox();
    $('.parallax').parallax({
        responsiveThreshold: 0
    });
    $('.tabs').tabs();
    $('.collapsible').collapsible();
    $('.datepicker').datepicker({
        disableWeekends: true
    });
    $('.slider').slider({
        indicators: false,
        height: 700,
        transition:500,
        interval:5000
    })
    $('.scrollspy').scrollSpy();
})
$('.carousel').carousel({
    indicators: true,
});
$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop()>50);
    $('top').toggleClass('active', $(this).scrollTop()>50);
    $('.sidenav').sidenav().close;
    $('.tooltipped').tooltip({
        position: 'left'
    }).close;
})
$('.tooltipped').tooltip({
    position: 'left'
});
$('.dropdown-trigger').dropdown({
    coverTrigger:  false,
    constrainWidth: false,
    hover:true
});
$('input.autocomplete').autocomplete({
    data:{
        'Tokyo, Japan':null,
        'Osaka, Japan':null,
        'Kyoto, Japan':null,
        'Hiroshima, Japan':null,
        'Himeji Castle, Japan':null,
        'Great Budha, Japan':null,
        'Mount Fuji, Japan':null,
        'Golden Pavilion, Japan':null,

    }
})
function home(){
    window.scrollTo(0, 0);
}
function popular(){
    window.scrollTo(0, 700);
}
function book(){
    window.scrollTo(0, 1350);
}
function activity(){
    window.scrollTo(0, 2120);
}
function faq(){
    window.scrollTo(0, 2680);
}
function places(){
    window.scrollTo(0, 3365);
}
function photos(){
    window.scrollTo(0, 4150);
}

AOS.init();
const inquireBtn = document.getElementById('inquire-btn')
const input = document.querySelectorAll('input')
const dropdown = document.querySelector('.dropdown-content')
const inputLabel = document.querySelectorAll('.input-label')
const spinner = document.querySelector('.spinner-overlay')
const topBtn = document.querySelector('.top')
const modal = document.querySelector('.modal')

inquireBtn.addEventListener('click', function(){
    inquireBtn.classList.add('disabled')
    input.forEach(function(input){
        input.value = ''
    })  
    inputLabel.forEach(function(label){
        label.classList.remove('active')
    })
    spinner.classList.add('active')
    setTimeout(function(){
        spinner.innerHTML = `
        <div class="preloader-wrapper active">
            <i class="material-icons green-text check">check</i>
        </div>
        `
    }, 2600)
    setTimeout(function(){
        spinner.classList.remove('active')
    }, 4050)
})  
function removeInput(){
    const input = document.querySelectorAll('input')
    input.forEach(function(input){
        input.value = ''
    })  
}
window.document.getElementsByTagName
window.addEventListener('scroll', function(){
    dropdown.style.display = 'none'
    const scrollHeight = window.pageYOffset

    if(scrollHeight > 500){
        topBtn.classList.add('active')
    }
    else{
        topBtn.classList.remove('active')
    }
})

