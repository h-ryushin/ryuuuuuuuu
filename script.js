$(function() {
    $('.burger').click(function() {
        if ($('.burger').hasClass('open')) {
            $('.burger').removeClass('open');
            $('#header-modal').fadeOut();
        } else {
            $('.burger').addClass('open');
            $('#header-modal').fadeIn();
        }
    });

    // $(window).on('scroll', function() {
    //     mvHeight = $('.top-wrapper').height();
    //     if ($(window).scrollTop() > mvHeight) {
    //         $('#header').addClass('transform');
    //     } else {
    //         $('#header').removeClass('transform');
    //     }
    // })

    // $(window).on('scroll', function() {
    //     mvHeight = $('.top').height();
    //     if ($(window).scrollTop() > mvHeight) {
    //         $('#header').addClass('transform');
    //     } else {
    //         $('#header').removeClass('transform');
    //     }
    // });

    window.addEventListener("scroll", function () {
        const header = this.document.querySelector("header");
        var mvHeight = $('.top').height();  
        header.classList.toggle("transform", window.scrollY >= mvHeight - 20);
    });
});