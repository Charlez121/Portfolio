document.querySelectorAll('.skill-card').forEach(card => {
    const video = card.querySelector('.skill-video');
    if (video) {
        card.addEventListener('mouseenter', () => video.play());
        card.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    }
});