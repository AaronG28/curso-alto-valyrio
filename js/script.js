// Script para mejorar la experiencia de usuario en el sitio web del Curso de Alto Valyrio

document.addEventListener('DOMContentLoaded', function() {
    // Destacar la sección actual en la navegación
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });

    // Menú móvil toggle
    const createMobileMenu = () => {
        const nav = document.querySelector('nav');
        if (!nav) return;

        // Crear botón de menú móvil si no existe
        if (!document.querySelector('.mobile-menu-toggle')) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'mobile-menu-toggle';
            menuToggle.innerHTML = '☰';
            menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
            
            const navContainer = nav.querySelector('.container');
            navContainer.insertBefore(menuToggle, navContainer.firstChild);
            
            // Añadir clase para estilizar el menú móvil
            const navList = nav.querySelector('ul');
            navList.classList.add('mobile-nav-list');
            
            // Evento para mostrar/ocultar menú
            menuToggle.addEventListener('click', function() {
                navList.classList.toggle('show');
                const isExpanded = navList.classList.contains('show');
                menuToggle.setAttribute('aria-expanded', isExpanded);
                menuToggle.innerHTML = isExpanded ? '✕' : '☰';
            });
        }
    };

    // Inicializar menú móvil
    createMobileMenu();
    
    // Ajustar menú en resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            createMobileMenu();
        }
    });

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Añadir botón "Volver arriba"
    const createBackToTopButton = () => {
        if (!document.querySelector('.back-to-top')) {
            const backToTopBtn = document.createElement('button');
            backToTopBtn.className = 'back-to-top';
            backToTopBtn.innerHTML = '↑';
            backToTopBtn.setAttribute('aria-label', 'Volver arriba');
            document.body.appendChild(backToTopBtn);
            
            // Mostrar/ocultar botón según scroll
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('show');
                } else {
                    backToTopBtn.classList.remove('show');
                }
            });
            
            // Acción del botón
            backToTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    };
    
    createBackToTopButton();
});
