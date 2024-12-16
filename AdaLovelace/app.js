document.addEventListener('DOMContentLoaded', () => {
    // Interactive section selectors
    const selectors = [
        'about-select', 
        'early-life-select', 
        'contributions-select', 
        'legacy-select', 
        'gender-equality-select'
    ];

    selectors.forEach(selectorId => {
        const select = document.getElementById(selectorId);
        const section = select.closest('section');

        select.addEventListener('change', (e) => {
            const selectedOption = e.target.value;
            updateSectionContent(section, selectorId, selectedOption);
        });
    });

    // Content map for sections
    const contentMap = {
        'about-select': {
            'biography': { 
                text: 'Ada Lovelace was a pioneering mathematician born in 1815 in London, England.', 
                image: 'images/ada-bio.jpg'
            },
            'work': { 
                text: 'She worked closely with Charles Babbage on the Analytical Engine, creating the first computer algorithm.', 
                image: 'images/ada-work.jpg'
            },
            'legacy': { 
                text: 'Her visionary work laid the foundation for modern computer science.', 
                image: 'images/ada-legacy.jpg'
            }
        },
        'early-life-select': {
            'childhood': {
                text: 'Ada faced numerous health challenges but maintained an incredible passion for learning.',
                image: 'images/ada-childhood.jpg'
            },
            'education': {
                text: 'Tutored by prominent mathematicians, she developed exceptional logical and computational skills.',
                image: 'images/ada-education.jpg'
            },
            'challenges': {
                text: 'As a woman in the 19th century, she fought against societal limitations on female education.',
                image: 'images/ada-challenges.jpg'
            }
        },
        // Add similar entries for other sections...
    };

    // Update the content based on selected option
    function updateSectionContent(section, selectorId, selectedOption) {
        const content = contentMap[selectorId][selectedOption];
        const paragraph = section.querySelector('p');
        const image = section.querySelector('img');

        // Add a fade-out transition before changing the content
        section.classList.add('hidden');
        setTimeout(() => {
            paragraph.textContent = content.text;
            image.src = content.image;
            section.classList.remove('hidden');
        }, 500); // 0.5s transition time
    }

    // Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        document.body.classList.toggle('menu-open');
    });

    // Theme Toggle Button
    const themeToggle = document.createElement('button');
    themeToggle.textContent = '🌓 Toggle Theme';
    themeToggle.style.position = 'fixed';
    themeToggle.style.top = '20px';
    themeToggle.style.right = '20px';
    themeToggle.style.padding = '10px';
    themeToggle.style.borderRadius = '8px';
    themeToggle.style.border = 'none';
    themeToggle.style.cursor = 'pointer';
    themeToggle.style.background = '#444';
    themeToggle.style.color = '#fff';
    themeToggle.style.zIndex = '1000';
    themeToggle.style.transition = 'background 0.3s ease, color 0.3s ease';
    document.body.appendChild(themeToggle);

    let isDarkMode = false;

    // Gece modu butonuna tıklama
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            themeToggle.style.background = '#fff';
            themeToggle.style.color = '#444';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            themeToggle.style.background = '#444';
            themeToggle.style.color = '#fff';
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Sayfa yüklendiğinde, daha önceki tercihini yükle
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        themeToggle.style.background = '#fff';
        themeToggle.style.color = '#444';
    }

    // Gece modu için stil ekleyelim
    const darkModeStyles = `
        body.dark-mode {
            background: #121212;
            color: #fff;
            transition: all 0.3s ease;
        }

        body.dark-mode nav {
            background: rgba(50, 50, 50, 0.8);
        }

        body.dark-mode footer {
            background: linear-gradient(135deg, #333, #444);
        }

        body.dark-mode .menu-toggle {
            background: #fff;
            color: #444;
        }

        body.dark-mode .menu-toggle:hover {
            background: #444;
            color: #fff;
        }

        body.dark-mode section {
            background: rgba(50, 50, 50, 0.9);
            color: #fff;
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = darkModeStyles;
    document.head.appendChild(styleSheet);
});
