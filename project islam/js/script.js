// ====================banner part
$('.phone_img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
  });
// ==============about part
const accordin=document.getElementsByClassName('contentBx');
console.log(accordin);
for(i=0; i<accordin.length; i++){
    accordin[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}



  // ============== audio part
