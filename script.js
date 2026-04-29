document.addEventListener('DOMContentLoaded', function() {
    const fontSelect = document.getElementById('font-select');
    const savedFont = localStorage.getItem('fontPreference') || 'opendyslexic';
    applyFont(savedFont);
    fontSelect.value = savedFont;

    fontSelect.addEventListener('change', function() {
        const selected = this.value;
        localStorage.setItem('fontPreference', selected);
        applyFont(selected);
    });
});

function applyFont(font) {
    if (font === 'opendyslexic') {
        document.body.style.fontFamily = "'OpenDyslexic', Arial, sans-serif";
    } else {
        document.body.style.fontFamily = "'Noto Sans Variable', Arial, sans-serif";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling; // The answer div
            answer.classList.toggle('show');
            
            // Optional: Close other answers (accordion style)
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.nextElementSibling.classList.remove('show');
                }
            });
        });
    });
});