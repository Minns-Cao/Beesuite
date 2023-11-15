try {
    var swiperbannerTop = new Swiper(".bannerTop", {
        loop: true,
        pagination: {
            el: ".bannerTopPagination",
        },
        autoplay: {
            delay: 5000, // Thời gian mỗi slide hiển thị trước khi chuyển slide tiếp theo (milliseconds)
            disableOnInteraction: false, // Không tắt autoplay khi người dùng tương tác với slider
        },
    });
} catch (error) {
    console.log(error);
}

try {
    var swiperfeedback = new Swiper(".feedback", {
        loop: true,
        pagination: {
            el: ".feedbackPagination",
        },
        autoplay: {
            delay: 5000, // Thời gian mỗi slide hiển thị trước khi chuyển slide tiếp theo (milliseconds)
            disableOnInteraction: false, // Không tắt autoplay khi người dùng tương tác với slider
        },
    });
} catch (error) {
    console.log(error);
}

try {
    var swiperfeedback = new Swiper(".storySilde", {
        slidesPerView: 3,
        spaceBetween: 74,
        loop: true,
        pagination: {
            el: ".storyPagination",
        },
        navigation: {
          nextEl: ".story-button-next",
          prevEl: ".story-button-prev",
        },
        autoplay: {
            delay: 5000, // Thời gian mỗi slide hiển thị trước khi chuyển slide tiếp theo (milliseconds)
            disableOnInteraction: false, // Không tắt autoplay khi người dùng tương tác với slider
        },
    });
} catch (error) {
    console.log(error);
}

