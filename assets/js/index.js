const scrollToTopButton = document.getElementById('btn-scroll-to-top');

// Fungsi untuk menentukan kapan tombol ditampilkan atau disembunyikan
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
        setTimeout(() => {
            scrollToTopButton.style.opacity = 1;    
        }, 500);
    } else {
        scrollToTopButton.style.opacity = 0;
        setTimeout(() => {
            scrollToTopButton.style.display = "none";
        }, 500);
    }
};

// Fungsi untuk kembali ke atas
scrollToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};