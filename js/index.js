/**
 * Created by keaidaitou on 2017/2/6.
 */

$(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    var container = document.getElementsByClassName('container')[0];
    var imgs = container.getElementsByTagName('img');
    $(imgs).addClass('zoom');
});