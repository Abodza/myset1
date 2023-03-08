

window.addEventListener('DOMContentLoaded', event => {

    // وظيفة تقليص Navbar
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // تقليص شريط التنقل 
    navbarShrink();

    // تقليص شريط التنقل عند تمرير الصفحة
    document.addEventListener('scroll', navbarShrink);

   // تنشيط Bootstrap scrollspy على عنصر التنقل الرئيسي
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // طي شريط التنقل المتجاوب عندما يكون زر التبديل مرئيًا
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
