document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('.theme-icon');
    
    const darkMode = localStorage.getItem('modo-oscuro') === 'true';
    
    if (darkMode) {
        body.classList.add('modo-oscuro');
        themeIcon.textContent = '☀️';
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('modo-oscuro');
        
        const isDarkMode = body.classList.contains('modo-oscuro');
        localStorage.setItem('modo-oscuro', isDarkMode);

        // lo de los iconos (UTF-8 Icons, sino pidele a gpt)
        if (isDarkMode) {
            themeIcon.textContent = '☀️';
        } else {
            themeIcon.textContent = '🌙';
        }
    });
});
