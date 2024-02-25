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

    window.addEventListener("scroll", function () {
        const header = this.document.querySelector("header");
        var mvHeight = $('.top-wrapper').height();    
        header.classList.toggle("transform", window.scrollY >= mvHeight - 20);
    });
});