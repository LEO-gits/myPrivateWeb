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
