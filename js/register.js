// 切換密碼
function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const icon = passwordInput.nextElementSibling; // Assuming the icon is the next sibling

    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // 切換眼睛圖示
    icon.className = type === 'password' ? 'fas fa-eye-slash' : 'fas fa-eye';
}

function refreshCaptcha() {
    // 隨機生成一個新的四位數驗證碼
    var newCaptcha = Math.floor(1000 + Math.random() * 9000);

    // 更新頁面上的驗證碼
    document.getElementById('captcha').textContent = newCaptcha;
}

