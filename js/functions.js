$(function(){
    $('.menu-mobile').click(function(e){
        //alert('clicado');
        $('.menu-mobile').find('ul').slideToggle();
        e.stopPropagation();
    });

    $('body').click(function(){
        $('.menu-mobile ul').fadeOut(); 
    })
});