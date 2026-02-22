document.addEventListener('DOMContentLoaded', () => {
    const shareBtn = document.getElementById('shareBtn');

    // Check if Web Share API is supported
    if (navigator.share) {
        shareBtn.addEventListener('click', async () => {
            try {
                await navigator.share({
                    title: 'C2b Cafe',
                    text: 'Visit C2b Cafe - Brewed to Balance. Sip, Smile, Stay awhile!',
                    url: window.location.href
                });
                console.log('Thanks for sharing!');
            } catch (err) {
                console.error('Error sharing:', err);
            }
        });
    } else {
        // Fallback for desktop/unsupported browsers: Copy URL
        shareBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href)
                .then(() => {
                    alert('Link copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy link:', err);
                });
        });

        // Update icon to indicate copy action
        shareBtn.innerHTML = '<i class="fa-solid fa-copy"></i>';
    }

    // Add simple entrance animation for items
    const items = document.querySelectorAll('.nav-item');
    items.forEach((item, index) => {
        item.style.animationDelay = `${0.1 * (index + 1)}s`;
    });
});
