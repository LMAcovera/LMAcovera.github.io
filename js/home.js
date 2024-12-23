// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(15, 23, 42, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
    } else {
        nav.style.background = 'rgba(15, 23, 42, 0.8)';
        nav.style.backdropFilter = 'blur(8px)';
    }
});

// Single observer for all scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Initialize elements to observe
document.addEventListener('DOMContentLoaded', () => {
    // Observe project and achievement cards
    document.querySelectorAll('.project-card, .achievement-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Observe sections
    document.querySelectorAll('section').forEach((section) => {
        section.classList.add('hidden');
        observer.observe(section);
    });
});

// Background stars
function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.appendChild(starsContainer);

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDelay = `${Math.random() * 8}s`;
        starsContainer.appendChild(star);
    }
}

// Click star effect
function createClickStar(e) {
    const star = document.createElement('div');
    star.className = 'click-star';
    star.style.left = `${e.clientX}px`;
    star.style.top = `${e.clientY}px`;
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 1500);
}

// Scroll reveal animation
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

// Typing effect
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create background stars
    createStars();
    
    // Add click star effect
    document.body.addEventListener('click', createClickStar);
    
    // Initialize scroll animations
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
        scrollObserver.observe(section);
    });
    
    // Initialize typing effect
    const tagline = document.querySelector('.tagline');
    const text = tagline.innerHTML;
    typeWriter(tagline, text);
    
    // Add skill tag animations
    document.querySelectorAll('.skill-tags span').forEach(tag => {
        tag.addEventListener('mouseover', () => {
            tag.style.transform = 'scale(1.1) rotate(3deg)';
        });
        
        tag.addEventListener('mouseout', () => {
            tag.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// Parallax effect for hero section
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

function initializeProjectSliders() {
    document.querySelectorAll('.project-slider').forEach(slider => {
        const images = slider.querySelector('.slider-images');
        const dots = slider.querySelectorAll('.dot');
        let currentSlide = 0;

        // Auto slide every 3 seconds
        setInterval(() => {
            currentSlide = (currentSlide + 1) % dots.length;
            updateSlider();
        }, 3000);

        // Click on dots to change slides
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateSlider();
            });
        });

        function updateSlider() {
            images.style.transform = `translateX(-${currentSlide * 100}%)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        // Hover to pause
        slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
        slider.addEventListener('mouseleave', () => {
            autoSlide = setInterval(nextSlide, 3000);
        });
    });
}

// Initialize sliders when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeProjectSliders);

// Add this to your existing JavaScript
function typeWriterEffect(element, text, speed = 50, delay = 1000) {
    setTimeout(() => {
        let i = 0;
        const specializations = text.split('•').map(item => item.trim());
        let currentText = '';
        
        function type() {
            if (i < specializations.length) {
                const currentSpec = specializations[i];
                let charIndex = 0;
                
                function typeSpecialization() {
                    if (charIndex < currentSpec.length) {
                        currentText += currentSpec.charAt(charIndex);
                        element.innerHTML = currentText + (charIndex < currentSpec.length - 1 ? '|' : '');
                        charIndex++;
                        setTimeout(typeSpecialization, speed);
                    } else {
                        if (i < specializations.length - 1) {
                            currentText += ' • ';
                            element.innerHTML = currentText + '|';
                            setTimeout(() => {
                                i++;
                                type();
                            }, 500);
                        } else {
                            element.innerHTML = currentText;
                        }
                    }
                }
                
                typeSpecialization();
            }
        }
        
        type();
    }, delay);
}

document.addEventListener('DOMContentLoaded', () => {
    const subTagline = document.querySelector('.sub-tagline');
    const text = 'Specializing in Web Development • UI/UX Design • Backend Architecture';
    typeWriterEffect(subTagline, text);
});

// Add this to your existing JavaScript
function createRocket() {
    const rocket = document.createElement('div');
    rocket.className = 'rocket';
    rocket.innerHTML = '🚀';
    rocket.style.fontSize = '28px';  // Match UFO size (28px)
    
    // Randomly choose direction (left-to-right or right-to-left)
    const isLeftToRight = Math.random() > 0.5;
    
    // Set starting position based on direction
    if (isLeftToRight) {
        rocket.style.left = '-50px';
        rocket.style.transform = 'rotate(45deg)';
        rocket.classList.add('left-to-right');
    } else {
        rocket.style.right = '-50px';
        rocket.style.transform = 'rotate(225deg)';
        rocket.classList.add('right-to-left');
    }
    
    // Random vertical position
    const verticalPos = Math.random() * (window.innerHeight * 0.7);
    rocket.style.top = `${verticalPos}px`;
    
    // Random duration between 6-8 seconds (slower movement)
    const duration = 6 + Math.random() * 2;
    rocket.style.animationDuration = `${duration}s`;
    
    // Add click event for explosion
    rocket.addEventListener('click', () => {
        createExplosion(rocket);
    });
    
    document.body.appendChild(rocket);
    
    // Remove rocket after animation
    setTimeout(() => rocket.remove(), duration * 1000);
}

function createExplosion(rocket) {
    const explosion = document.createElement('div');
    explosion.className = 'explosion';
    
    // Get rocket's current position
    const rocketRect = rocket.getBoundingClientRect();
    explosion.style.left = `${rocketRect.left}px`;
    explosion.style.top = `${rocketRect.top}px`;
    
    document.body.appendChild(explosion);
    
    setTimeout(() => explosion.remove(), 1000);
    rocket.remove();
}

function startRockets() {
    setInterval(() => {
        createRocket();
    }, 3000 + Math.random() * 2000); // Increased delay: 3-5 seconds between spawns
}

document.addEventListener('DOMContentLoaded', () => {
    startRockets();
    
    // Reduced initial rockets from 5 to 2
    for (let i = 0; i < 2; i++) {
        setTimeout(() => {
            createRocket();
        }, i * 800); // Increased delay between initial rockets
    }
});

// Add UFO creation function
function createUFO() {
    const ufo = document.createElement('div');
    ufo.className = 'ufo';
    ufo.innerHTML = '🛸';
    
    // Random vertical position in top 60% of screen
    const verticalPos = Math.random() * (window.innerHeight * 0.6);
    ufo.style.top = `${verticalPos}px`;
    
    // Random duration between 8-12 seconds (slower than rockets)
    const duration = 8 + Math.random() * 4;
    ufo.style.animationDuration = `${duration}s`;
    
    // Random direction
    const isLeftToRight = Math.random() > 0.5;
    if (isLeftToRight) {
        ufo.style.left = '-50px';
        ufo.classList.add('ufo-left-to-right');
    } else {
        ufo.style.right = '-50px';
        ufo.classList.add('ufo-right-to-left');
    }
    
    // Add click event for special UFO explosion
    ufo.addEventListener('click', () => {
        createUFOExplosion(ufo);
    });
    
    document.body.appendChild(ufo);
    
    // Remove UFO after animation
    setTimeout(() => ufo.remove(), duration * 1000);
}

function createUFOExplosion(ufo) {
    const explosion = document.createElement('div');
    explosion.className = 'ufo-explosion';
    
    const rect = ufo.getBoundingClientRect();
    explosion.style.left = `${rect.left}px`;
    explosion.style.top = `${rect.top}px`;
    
    document.body.appendChild(explosion);
    
    setTimeout(() => explosion.remove(), 1500);
    ufo.remove();
}

// Start UFOs alongside rockets
function startSpaceObjects() {
    startRockets();
    
    // Create UFOs less frequently than rockets
    setInterval(() => {
        createUFO();
    }, 3000 + Math.random() * 2000);
}

// Update the DOM loaded event
document.addEventListener('DOMContentLoaded', () => {
    startSpaceObjects();
    
    // Create initial space objects
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            createRocket();
            if (i % 2 === 0) createUFO();
        }, i * 500);
    }
});

function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    
    // Get the space effects container
    const container = document.querySelector('.space-effects-container');
    if (!container) return; // Safety check
    
    // Add to container instead of body
    container.appendChild(star);
    
    // Random position and angle
    const startX = Math.random() * window.innerWidth;
    const angle = Math.random() * 45 - 45; // -45 to 0 degrees
    
    star.style.left = `${startX}px`;
    star.style.setProperty('--angle', `${angle}deg`); // Use CSS custom property
    
    // Remove after animation
    setTimeout(() => star.remove(), 1000);
}

// Create shooting stars randomly
setInterval(createShootingStar, 2000);

// 3D Card Tilt Effect
document.querySelectorAll('.about-card, .project-card, .achievement-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * 10; // Reduced rotation
        const rotateY = ((x - centerX) / centerX) * 10; // Reduced rotation
        
        requestAnimationFrame(() => {
            card.style.transform = `
                perspective(1000px)
                rotateX(${-rotateX}deg)
                rotateY(${rotateY}deg)
                scale3d(1.05, 1.05, 1.05)
            `;
        });
    });
    
    card.addEventListener('mouseleave', () => {
        requestAnimationFrame(() => {
            card.style.transform = `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                scale3d(1, 1, 1)
            `;
        });
    });

    // Add transition on hover
    card.style.transition = 'transform 0.1s ease-out';
});

// Smooth scroll for section transitions
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize all cards with default transform
document.querySelectorAll('.about-card, .project-card, .achievement-card').forEach(card => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
});

function createCosmicParticles() {
    const container = document.createElement('div');
    container.className = 'cosmic-particles';
    document.body.appendChild(container);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.setProperty('--duration', `${3 + Math.random() * 7}s`);
        particle.style.setProperty('--opacity', `${0.1 + Math.random() * 0.3}`);
        container.appendChild(particle);
    }
}

document.addEventListener('DOMContentLoaded', createCosmicParticles);

// Add cursor following animation to profile
const profileContainer = document.querySelector('.profile-container');
const profileFrame = document.querySelector('.profile-frame');

profileContainer.addEventListener('mousemove', (e) => {
    const rect = profileContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation based on cursor position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Limit rotation to 15 degrees
    const rotateX = ((y - centerY) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 15;
    
    profileFrame.style.transform = `
        perspective(1000px)
        rotateX(${-rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.05, 1.05, 1.05)
    `;
});

// Reset transform when mouse leaves
profileContainer.addEventListener('mouseleave', () => {
    profileFrame.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        scale3d(1, 1, 1)
    `;
});

// Smooth transition back to original position
profileContainer.addEventListener('mouseenter', () => {
    profileFrame.style.transition = 'transform 0.2s ease';
});

profileContainer.addEventListener('mousemove', () => {
    profileFrame.style.transition = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.view-projects-btn');
    const container = document.querySelector('.view-all-projects');
    
    // Add glare element
    const glare = document.createElement('div');
    glare.className = 'tilt-glare';
    btn.appendChild(glare);

    let bounds = btn.getBoundingClientRect();
    
    const mouseMove = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        
        const center = {
            x: leftX - bounds.width / 2,
            y: topY - bounds.height / 2
        }
        
        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
        
        btn.style.transform = `
            perspective(1000px)
            scale3d(1.07, 1.07, 1.07)
            rotate3d(
                ${center.y / 100},
                ${-center.x / 100},
                0,
                ${Math.log(distance) * 2}deg
            )
        `;
        
        // Update glare position
        const glareX = (center.x / bounds.width) * 100;
        const glareY = (center.y / bounds.height) * 100;
        glare.style.opacity = '0.3';
        glare.style.transform = `
            translate(${glareX}%, ${glareY}%)
            rotate(45deg)
            scale(2)
        `;
    }
    
    const mouseLeave = () => {
        btn.style.transform = `
            perspective(1000px)
            scale3d(1, 1, 1)
            rotate3d(0, 0, 0, 0deg)
        `;
        glare.style.opacity = '0';
    }
    
    const mouseEnter = () => {
        bounds = btn.getBoundingClientRect();
    }
    
    container.addEventListener('mousemove', mouseMove);
    container.addEventListener('mouseleave', mouseLeave);
    container.addEventListener('mouseenter', mouseEnter);
    
    // Update bounds on resize
    window.addEventListener('resize', () => {
        bounds = btn.getBoundingClientRect();
    });
});

// Burger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    burgerMenu.addEventListener('click', () => {
        // Toggle navigation
        navLinks.classList.toggle('active');
        burgerMenu.classList.toggle('active');

        // Animate links
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burgerMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !burgerMenu.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burgerMenu.classList.remove('active');
        }
    });
});

// About section card navigation
document.addEventListener('DOMContentLoaded', function() {
    // About section navigation
    const aboutNavBtns = document.querySelectorAll('.about-nav-mobile .nav-btn');
    const aboutCards = document.querySelectorAll('.about-grid .about-card');

    aboutNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Only affect about section buttons and cards
            aboutNavBtns.forEach(b => b.classList.remove('active'));
            aboutCards.forEach(card => card.classList.remove('active'));

            btn.classList.add('active');
            const targetCard = document.getElementById(btn.dataset.target);
            targetCard.classList.add('active');
        });
    });

    // Projects navigation (separate from about section)
    const projectNavBtns = document.querySelectorAll('.projects-nav-mobile .nav-btn');
    const projectCards = document.querySelectorAll('.projects-grid .project-card');

    projectNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Only affect project section buttons and cards
            projectNavBtns.forEach(b => b.classList.remove('active'));
            projectCards.forEach(card => card.classList.remove('active'));

            btn.classList.add('active');
            const targetCard = document.getElementById(btn.dataset.target);
            targetCard.classList.add('active');
        });
    });

    // Achievements navigation (separate from other sections)
    const achievementNavBtns = document.querySelectorAll('.achievements-nav-mobile .nav-btn');
    const achievementCards = document.querySelectorAll('.achievements-grid .achievement-card');

    achievementNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Only affect achievement section buttons and cards
            achievementNavBtns.forEach(b => b.classList.remove('active'));
            achievementCards.forEach(card => card.classList.remove('active'));

            btn.classList.add('active');
            const targetCard = document.getElementById(btn.dataset.target);
            targetCard.classList.add('active');
        });
    });
});

