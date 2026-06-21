document.addEventListener('DOMContentLoaded', () => {
    // 页面淡入效果
    document.body.style.opacity = 1;

    // 为所有链接添加点击淡出效果
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            document.body.style.opacity = 0;
            setTimeout(() => { window.location.href = href; }, 500);
        });
    });
});