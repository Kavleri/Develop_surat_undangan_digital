document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    function showMessage(formId, message, type = 'success') {
        let messageElement = document.getElementById(`${formId}-message`);
        if (!messageElement) {
            messageElement = document.createElement('p');
            messageElement.id = `${formId}-message`;
            messageElement.classList.add('form-message');
            formId.parentNode.insertBefore(messageElement, formId.nextSibling);
        }
        messageElement.textContent = message;
        messageElement.className = `form-message ${type}`; // Add type class for styling (e.g., 'success', 'error')

        setTimeout(() => {
            messageElement.textContent = '';
            messageElement.className = 'form-message';
        }, 3000); // Pesan akan hilang setelah 3 detik
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form dari submit default
            // Di sini Anda akan mengirim data ke server (menggunakan Fetch API atau XMLHttpRequest)
            // Untuk contoh ini, kita hanya akan mensimulasikan login.

            const username = loginForm.querySelector('#username').value;
            const password = loginForm.querySelector('#password').value;

            // Simulasi validasi atau pengiriman data
            if (username === 'user' && password === 'password') {
                showMessage(loginForm, 'Login Berhasil! Mengarahkan ke dashboard...', 'success');
                // Contoh: window.location.href = 'dashboard.html';
            } else {
                showMessage(loginForm, 'Nama pengguna atau kata sandi salah.', 'error');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form dari submit default

            const username = registerForm.querySelector('#username').value;
            const email = registerForm.querySelector('#email').value;
            const password = registerForm.querySelector('#password').value;
            const confirmPassword = registerForm.querySelector('#confirm-password').value;

            if (password !== confirmPassword) {
                showMessage(registerForm, 'Konfirmasi kata sandi tidak cocok.', 'error');
                return;
            }

            // Validasi sederhana lainnya (Anda bisa tambahkan lebih banyak)
            if (password.length < 6) {
                showMessage(registerForm, 'Kata sandi minimal 6 karakter.', 'error');
                return;
            }

            // Simulasi pengiriman data
            showMessage(registerForm, 'Registrasi berhasil! Silakan masuk.', 'success');
            // Contoh: Setelah registrasi berhasil, mungkin arahkan ke halaman login
            // setTimeout(() => {
            //     window.location.href = 'login.html';
            // }, 2000);
        });
    }
});
