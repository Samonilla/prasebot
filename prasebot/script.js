document.addEventListener('DOMContentLoaded', function() {
    const photo = document.getElementById('spinning-photo');
    
    // Start spinning animation when page loads
    photo.classList.add('spinning');
    
    // Stop spinning after animation completes (2 seconds)
    setTimeout(() => {
        photo.classList.remove('spinning');
        photo.classList.add('stopped');
    }, 2000);
}); 