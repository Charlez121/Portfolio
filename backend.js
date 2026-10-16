       const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    
        const emailCard = document.getElementById('copy-email');
        const emailNote = document.getElementById('email-note');

        emailCard.addEventListener('click', () => {
            navigator.clipboard.writeText(emailCard.dataset.email).then(() => {
                emailNote.textContent = 'Copied!';
                setTimeout(() => { emailNote.textContent = 'Click to copy'; }, 2000);
            });
        });
   