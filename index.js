$(document).ready(function(){
    $('.slick-container').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 1000,
        prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><iconify-icon icon='akar-icons:arrow-left'></iconify-icon></button>",
        nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><iconify-icon icon='akar-icons:arrow-right'></iconify-icon></button>",
        dots: true,
        draggable: false
    });

});

$(document).ready(function(){
    $('.banner-left').slick({
        speed: 1000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        fade: true,
        cssEase: 'ease-in',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000    
    });

});


var listImage = document.querySelectorAll('.magazine-slide-wrapper img')
var passageList = document.querySelectorAll('.magazine-description p')
var currentIndex = 0

function updateImageByIndex(index) {
    passageList[index].classList.remove('hide-magazine')
    

    passageList[index].classList.add('passage')
    
    passageList[currentIndex].classList.add('hide-magazine')
    setTimeout(() => {
        passageList[index].classList.remove('passage')
    },300)
    passageList[currentIndex].style.animation = ''
    currentIndex = index
    
    // passageList.forEach(item => {
    //     item.classList.remove('right')
    // })
}
function updateImageByIndexRight(index) {
    passageList[index].classList.remove('hide-magazine')
    passageList[index].classList.add('right')
    passageList[currentIndex].classList.add('hide-magazine')
    setTimeout(() => {
        passageList[index].classList.remove('right')
        
    },300)
    passageList[currentIndex].style.animation = ''
    currentIndex = index
    
    
}

function addBorderWhenHoverImage(index) {
    document.querySelectorAll('.magazine-slide-wrapper').forEach(item => {
        item.classList.remove('active')
    })
    
    listImage[index].parentElement.classList.add('active')
    // mgzImage.style.opacity = '50%'


}


listImage.forEach((imgElement, index) => {
    imgElement.addEventListener('mouseover', e => {
        
        addBorderWhenHoverImage(index)
        
        
    })
    
    imgElement.addEventListener('click', e => {
       
        
        if (index > currentIndex) {
            passageList[currentIndex].style.animation = 'slideLeftBefore 300ms ease-in-out'
            setTimeout(() => {
                updateImageByIndex(index)
            },300)
            
        }
        
        else if (index < currentIndex) {
            passageList[currentIndex].style.animation = 'slideRightBefore 300ms ease-in-out'
            setTimeout(() => {
                updateImageByIndexRight(index)
            },300)
            
        }
        
        
        console.log(currentIndex, index)
       
    })
    
})
var banner = document.querySelector('.banner-mini-img-list')
console.log(banner.style.zIndex)