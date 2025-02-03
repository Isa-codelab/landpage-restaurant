$(document).ready(function(){
    $('#mobile-btn').on("click", function(){
        $('#mobile-menu').toggleClass('active');
        $('#mobile-btn').find('i').toggleClass('fa-x');
    });
    const sections = $('section');
    const navItems = $('.nav-list_item');

    $(window).on('scroll', function(){
        const header = $('header');
        let activeSectionIndex = 0;
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0,0,0,0.1)');
        }

        sections.each(function(index){
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBttom = sectionTop + section.outerHeight();
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBttom){
                activeSectionIndex = index;
                return false;
            }
        });
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');

    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        distance: '20%',
        duration: 2000

    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        distance: '20%',
        duration: 2000

    });

    ScrollReveal().reveal('#testimonials-chef', {
        origin: 'left',
        distance: '20%',
        duration: 1000

    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        distance: '20%',
        duration: 1000

    });
}) 