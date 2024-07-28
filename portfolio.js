document.addEventListener('DOMContentLoaded', () => {

// ヒーローセクションのスライドショー
    const heroContent = document.querySelector('.hero-content');
    const heroSlides = [
        { title: 'CATCH THE MOMENT', subtitle: 'Professional Photography' },
        { title: 'TELL YOUR STORY', subtitle: 'Through My Lens' },
        { title: 'FREEZE TIME', subtitle: 'Create Memories' }
    ];
    let currentHeroSlide = 0;

    function updateHeroSlide() {
        const slide = heroSlides[currentHeroSlide];
        heroContent.innerHTML = `
            <h1>${slide.title}</h1>
            <p>${slide.subtitle}</p>
        `;
        currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
    }

    setInterval(updateHeroSlide, 500); // 5秒ごとにスライド切り替え

    console.log('Script started');
    console.log('portfolio.js file loaded');
    
    function initCarousel() {
        console.log('Initializing carousel');
    
        const track = document.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.carousel-button.next');
        const prevButton = document.querySelector('.carousel-button.prev');
        
        console.log('Track:', track);
        console.log('Slides:', slides);
        console.log('Next button:', nextButton);
        console.log('Prev button:', prevButton);
    
        if (!track || slides.length === 0 || !nextButton || !prevButton) {
            console.error('Required elements not found');
            return;
        }
    
        const slideWidth = slides[0].getBoundingClientRect().width;
        console.log('Slide width:', slideWidth);
    
        const slidesPerView = 3;
        let currentIndex = 0;
    
        // スライドの初期位置を設定
        slides.forEach((slide, index) => {
            slide.style.left = `${index * slideWidth}px`;
            console.log(`Slide ${index} position:`, slide.style.left);
        });
    
        const moveToSlide = (targetIndex) => {
            console.log('Moving to slide:', targetIndex);
            if (targetIndex < 0) {
                targetIndex = Math.max(slides.length - slidesPerView, 0);
            } else if (targetIndex > slides.length - slidesPerView) {
                targetIndex = 0;
            }
            const targetX = -targetIndex * slideWidth;
            console.log('Target X position:', targetX);
            track.style.transform = `translateX(${targetX}px)`;
            currentIndex = targetIndex;
            console.log('Current index updated to:', currentIndex);
        };
    
        const moveToNextSlide = () => {
            console.log('Moving to next slide');
            moveToSlide(currentIndex + 1);
        };
    
        const moveToPrevSlide = () => {
            console.log('Moving to previous slide');
            moveToSlide(currentIndex - 1);
        };
    
        nextButton.addEventListener('click', (e) => {
            console.log('Next button clicked (portfolio.js)');
            e.preventDefault();
            moveToNextSlide();
            resetAutoSlide(); // 自動切り替えをリセット
        });
    
        prevButton.addEventListener('click', (e) => {
            console.log('Prev button clicked (portfolio.js)');
            e.preventDefault();
            moveToPrevSlide();
            resetAutoSlide(); // 自動切り替えをリセット
        });
    
        // 自動切り替え機能
        let autoSlideInterval;
        const autoSlideDelay = 3000; // 3秒ごとに切り替え
    
        const startAutoSlide = () => {
            autoSlideInterval = setInterval(moveToNextSlide, autoSlideDelay);
            console.log('Auto slide started');
        };
    
        const stopAutoSlide = () => {
            clearInterval(autoSlideInterval);
            console.log('Auto slide stopped');
        };
    
        const resetAutoSlide = () => {
            stopAutoSlide();
            startAutoSlide();
            console.log('Auto slide reset');
        };
    
        // マウスがカルーセル上にある時は自動切り替えを停止
        track.addEventListener('mouseenter', stopAutoSlide);
        track.addEventListener('mouseleave', startAutoSlide);
    
        // 初期化時に自動切り替えを開始
        startAutoSlide();
    
        console.log('Carousel initialization complete');
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCarousel);
    } else {
        initCarousel();
    }
    
    window.addEventListener('load', () => {
        console.log('Window fully loaded');
    });

    

    // 装飾の不規則なホバリングアニメーション
    const heroDecoration = document.querySelector('.hero-decoration');
    
    function createFloatingCircle() {
        const circle = document.createElement('div');
        circle.classList.add('floating-circle');
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.top = `${Math.random() * 100}%`;
        circle.style.animationDuration = `${Math.random() * 3 + 2}s`; // 2-5秒のランダムな期間
        // circle.style.animationDelay = `${0}s`; // 0-2秒のランダムな遅延
        heroDecoration.appendChild(circle);
    }

    // 5つの浮遊する円を作成
    for (let i = 0; i < 5; i++) {
        createFloatingCircle();
    }

//準備
let cursorR = 4;  //カーソルの半径
const cursor = document.getElementById('cursor');  //カーソル用のdivを取得

//上記のdivタグをマウスに追従させる処理
document.addEventListener('mousemove', function (e) {
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

//リンクにホバー時はクラスをつける
const linkElem = document.querySelectorAll('a');
for (let i = 0; i < linkElem.length; i++) {
    linkElem[i].addEventListener('mouseover', function (e) {
        cursor.classList.add('hov_');
    });
    linkElem[i].addEventListener('mouseout', function (e) {
        cursor.classList.remove('hov_');      
    });
}});