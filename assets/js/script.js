$(document).ready(function(){
    $("accordion-desc").hide();

    $(".accordion-title").on('click',function(){
        $(this).next().slideToggle('slow')
        $(this).next().toggleClass('active')
        $(".accordion-title").not(this).next().slideUp('slow');
        $(".accordion-title").not(this).next().slideUp('slow');
        $(".accordion-title").not(this).parent().removeClass('active')
        

    })
})