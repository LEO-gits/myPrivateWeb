// 获取“回到顶部”按钮元素
const backToTopButton = document.getElementById('back-to-top');

// 监听滚动事件，显示或隐藏按钮
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // 页面滚动超过300px时显示按钮
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// 点击按钮，平滑滚动到顶部
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0, // 滚动到顶部
        behavior: 'smooth' // 平滑滚动
    });
});
