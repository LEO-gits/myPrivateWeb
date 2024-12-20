// captcha.js
let captchaText = '';

function generateCaptcha() {
    const canvas = document.getElementById('captcha-canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    captchaText = '';
    for (let i = 0; i < 6; i++) {
        captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // 绘制验证码
    ctx.font = '20px Arial';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.fillText(captchaText, canvas.width / 2, canvas.height / 2 + 7);
}

document.getElementById('refresh-captcha').addEventListener('click', generateCaptcha);

document.getElementById('captcha-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = document.getElementById('captcha-input').value.toUpperCase();
    const message = document.getElementById('message');

    if (userInput === captchaText) {
        message.textContent = '两秒后返回主页面';
        message.style.color = 'green';
        alert('恭喜您完成人机验证');
        setTimeout(() => {
            window.location.href = 'index.html'; // 跳转到 index.html
        }, 2000); // 等待 1.5 秒后跳转
    } else {
        message.textContent = '验证码错误，请重试。';
        message.style.color = 'red';
    }
});

// 初始化验证码
generateCaptcha();
