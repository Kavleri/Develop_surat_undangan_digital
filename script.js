document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pesanan Anda telah dikirim! Kami akan segera menghubungi Anda.');
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = form.name.value;
        const email = form.email.value;
        const package = form.package.value;
        const details = form.details.value;

        alert(`Pesanan berhasil!\nNama: ${name}\nEmail: ${email}\nPaket: ${package}\nDetail: ${details}`);

        form.reset();
    });
});

function toggleMenu() {
    const navbarMenu = document.querySelector('.navbar-menu');
    navbarMenu.classList.toggle('active');
}

document.querySelectorAll('.navbar-menu li a').forEach(item => {
    item.addEventListener('click', () => {
        const navbarMenu = document.querySelector('.navbar-menu');
        navbarMenu.classList.remove('active');
    });
});
