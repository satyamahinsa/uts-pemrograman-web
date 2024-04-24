const scrollToTopButton = document.getElementById('btn-scroll-to-top');

// Fungsi untuk menentukan kapan tombol ditampilkan atau disembunyikan
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block"; // Pastikan tombol terlihat
        setTimeout(() => {
            scrollToTopButton.style.opacity = 1;    
        }, 500);
    } else {
        scrollToTopButton.style.opacity = 0;       // Ubah opasitas menjadi 0
        setTimeout(() => {
            scrollToTopButton.style.display = "none"; // Sembunyikan tombol setelah transisi
        }, 500); // Sesuaikan waktu dengan durasi transisi
    }
};

// Fungsi untuk menggulir kembali ke atas
scrollToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};