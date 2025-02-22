        const overlay = document.getElementById('huoshiaicYuanshenOverlay');
        const iframeContainer = document.getElementById('huoshiaicYuanshenIframeContainer');
        const openButton = document.getElementById('huoshiaicYuanshenOpenButton');
        const closeButton = document.getElementById('huoshiaicYuanshenCloseButton');

        openButton.addEventListener('click', function() {
            overlay.style.display = 'block';
            setTimeout(() => {
                overlay.classList.add('active');
                iframeContainer.classList.add('active');
            }, 10); // 允许浏览器渲染 display 变化
        });

        closeButton.addEventListener('click', function() {
            overlay.classList.remove('active');
            iframeContainer.classList.remove('active');

            // 等待动画完成后隐藏
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 500);
        });