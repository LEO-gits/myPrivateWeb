// 获取“回到顶部”按钮元素
const backToTopButton = document.getElementById('back-to-top');

// 显示或隐藏“回到顶部”按钮的逻辑
function handleScroll() {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
}

// 防抖函数（优化性能，减少滚动事件触发频率）
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// 平滑滚动到顶部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

// 监听滚动事件（使用防抖优化）
window.addEventListener('scroll', debounce(handleScroll, 50));

// 点击按钮，平滑滚动到顶部
backToTopButton.addEventListener('click', scrollToTop);

// 菜单切换逻辑
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}


// 创建星星元素
function createStar() {
    const star = document.createElement('div');
    star.className = 'star';

    // 设置星星的随机初始位置和特性
    star.style.left = Math.random() * 100 + 'vw'; // 随机横向位置
    star.style.animationDuration = (Math.random() * 2 + 3) + 's'; // 动画持续时间：3-5秒
    star.style.width = star.style.height = Math.random() * 4 + 2 + 'px'; // 随机大小
    star.style.opacity = Math.random(); // 随机透明度

    document.body.appendChild(star);

    // 移除星星以防累积过多
    setTimeout(() => {
        star.remove();
    }, 5000); // 5秒后清除
}

// 定时生成星星
function startStarAnimation() {
    setInterval(createStar, 200); // 每隔200ms生成一颗星星
}

// 等待页面加载完成后启动动画
window.onload = startStarAnimation;
