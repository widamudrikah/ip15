document.addEventListener('DOMContentLoaded', function() {
    // Logika untuk pemilih warna iPhone
    const colorButtons = document.querySelectorAll('.color-btn');
    const iphoneImage = document.getElementById('iphoneImage');

    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const newImage = this.getAttribute('data-image');
            // Tambahkan transisi halus untuk perubahan gambar
            iphoneImage.classList.remove('active'); // Hapus kelas aktif untuk memicu efek fade-out
            setTimeout(() => {
                iphoneImage.src = newImage; // Ubah gambar setelah fade-out
                iphoneImage.classList.add('active'); // Tambah kelas aktif untuk memicu efek fade-in
            }, 300); // Tunggu 300ms agar fade-out selesai
        });
    });
});
