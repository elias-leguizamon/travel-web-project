// Texto

document.addEventListener("DOMContentLoaded", function() {
    const seeMoreButton = document.querySelector(".see-more");
    const text = document.querySelector(".text");
    const originalMaxHeight = getComputedStyle(text).maxHeight;

    seeMoreButton.addEventListener("click", function() {
        if (text.classList.contains("expanded")) {
            text.style.maxHeight = originalMaxHeight;
            text.classList.remove("expanded");
            seeMoreButton.textContent = "Ver más texto";inmediatamente
        } else {
            text.style.maxHeight = text.scrollHeight + "px";
            text.classList.add("expanded");
            seeMoreButton.textContent = "Ver menos";
            setTimeout(() => {
                text.style.maxHeight = 'none';
            }, 500);
        }
    });
});

// Gallery

document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    let currentIndex;

    thumbnails.forEach(function (thumbnail, index) {
        thumbnail.addEventListener('click', function () {
            lightbox.style.display = 'flex';
            lightboxImg.src = thumbnail.src;
            currentIndex = index;
        });
    });

    document.querySelector('.close').addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    document.querySelector('.prev').addEventListener('click', function () {
        changeImage(-1);
    });

    document.querySelector('.next').addEventListener('click', function () {
        changeImage(1);
    });

    function changeImage(direction) {
        currentIndex = (currentIndex + direction + thumbnails.length) % thumbnails.length;
        lightboxImg.src = thumbnails[currentIndex].src;
    }

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});

// Servicios incluidos

document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById('includedServices');
    const items = list.getElementsByTagName('li');
    const showMoreBtn = document.getElementById('showMoreBtn');
    const showLessBtn = document.getElementById('showLessBtn');

    function getInitialItemsToShow() {
        if (window.innerWidth <= 1080) {
            return 4;
        } else {
            return 6;
        }
    }

    function setMaxHeight(itemsToShow, transitionDuration = "0.5s") {
        for (let i = 0; i < items.length; i++) {
            items[i].style.transition = `max-height ${transitionDuration} ease`;
            if (i < itemsToShow) {
                items[i].style.maxHeight = items[i].scrollHeight + "px"; /* Ajustar a la altura automática */
            } else {
                items[i].style.maxHeight = "0";
            }
        }
    }

    function showInitialItems() {
        const itemsToShow = getInitialItemsToShow();
        setMaxHeight(itemsToShow, "0s");
        list.classList.add('single-row');
        list.classList.remove('multi-row');
        showMoreBtn.style.display = 'block';
        showLessBtn.style.display = 'none';
    }

    showMoreBtn.onclick = function () {
        list.classList.remove('single-row');
        list.classList.add('multi-row');
        for (let i = 0; i < items.length; i++) {
            items[i].style.transition = "max-height 0.5s ease";
            items[i].style.maxHeight = items[i].scrollHeight + "px";
        }
        showMoreBtn.style.display = 'none';
        showLessBtn.style.display = 'block';
    };

    showLessBtn.onclick = function () {
        const itemsToShow = getInitialItemsToShow();
        setMaxHeight(itemsToShow, "0s");
        showInitialItems();
    };

    showInitialItems();

    window.onresize = function () {
        showInitialItems();
    };
});

// Map

const toggleMapBtn = document.getElementById('toggleMapBtn');
const mapContainer = document.getElementById('mapContainer');

toggleMapBtn.addEventListener('click', () => {
    if (mapContainer.classList.contains('expanded')) {
        mapContainer.classList.remove('expanded');
        toggleMapBtn.textContent = 'Ver más mapa';
    } else {
        mapContainer.classList.add('expanded');
        toggleMapBtn.textContent = 'Ver menos';
    }
});

// Text area h1

document.addEventListener('DOMContentLoaded', function() {
    var serviceTitle = document.querySelector('h1').textContent;
    document.getElementById('service-title').textContent = serviceTitle;
});
