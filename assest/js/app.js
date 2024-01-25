try {
    var swiperbannerTop = new Swiper(".bannerTop", {
        loop: true,
        pagination: {
            el: ".bannerTopPagination",
        },
        autoplay: {
            delay: 500000, // Thời gian mỗi slide hiển thị trước khi chuyển slide tiếp theo (milliseconds)
            disableOnInteraction: false, // Không tắt autoplay khi người dùng tương tác với slider
        },
    });
} catch (error) {
    
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
    
}

try {
    var swiperStorySlide = new Swiper(".storySilde", {
        slidesPerView: 3,
        spaceBetween: 74,
        breakpoints: {
            120: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 78,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 78,
            },
        },       
        pagination: {
            el: ".storyPagination",
        },
        navigation: {
            nextEl: ".story-button-next",
            prevEl: ".story-button-prev",
        },
        loop: true,
        autoplay: {
            delay: 5000, // Thời gian mỗi slide hiển thị trước khi chuyển slide tiếp theo (milliseconds)
            disableOnInteraction: false, // Không tắt autoplay khi người dùng tương tác với slider
        },
    });
} catch (error) {
    console.log(error);
}
try {
} catch (error) {
    
}
try {
    var swiperfeedback = new Swiper(".newsCompanySilde", {
        slidesPerView: 3,
        spaceBetween: 74,
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
        loop: true,
        navigation: {
            nextEl: ".company-button-next",
            prevEl: ".company-button-prev",
        },
        autoplay: {
            delay: 5000, // Thời gian mỗi slide hiển thị trước khi chuyển slide tiếp theo (milliseconds)
            disableOnInteraction: false, // Không tắt autoplay khi người dùng tương tác với slider
        },
    });
} catch (error) {
    
}
try {
} catch (error) {
    
}

var swiperNewsSlider = new Swiper(".newsSlider", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".nextPage",
        prevEl: ".prevPage",
    },
    autoplay: {
        delay: 10000, // Thời gian mỗi slide hiển thị trước khi chuyển slide tiếp theo (milliseconds)
        disableOnInteraction: false, // Không tắt autoplay khi người dùng tương tác với slider
    },
});

// =======valid form=====
const REG_EMAIL =
    /^[a-zA-Z\d\.\-\_]+(\+\d+)?@[a-zA-Z\d\.\-\_]{1,65}\.[a-zA-Z]{1,5}$/;
const REG_NAME =
    /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+((\s[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+)+)?$/;

const isRequired = (value) => (value !== "" ? "" : "Thông tin cần điền");
const isEmail = (value) =>
    REG_EMAIL.test(value) ? "" : "Vui lòng nhập đúng định dạng Email";
const isName = (value) =>
    REG_NAME.test(value) ? "" : "Vui lòng nhập đúng định dạng tên";

const isSame = (paramValue, fieldname1, fieldname2) => (value) =>
    paramValue === value ? "" : `${fieldname1} không khớp ${fieldname2}`;

// value: giá trị của controlNode
// Funcs : mảng các hàm mà value cần check
// ParentNode: là cha của controlNode cần chèn câu chữi
// ControlNodes: các element dạng input

//hàm tạo thông báo lỗi
const createMsg = (parentNode, controlNodes, msg) => {
    let invalidDiv = document.createElement("div");
    invalidDiv.className = "invalid-feedback";
    invalidDiv.innerHTML = msg;
    parentNode.appendChild(invalidDiv);
    controlNodes.forEach((item) => {
        item.classList.add("is-invalid");
    });
};

const isValid = (paramObject) => {
    const { value, funcs, parentNode, controlNodes } = paramObject;
    for (const funcCheck of funcs) {
        let msg = funcCheck(value);
        if (msg) {
            createMsg(parentNode, controlNodes, msg);
            return msg;
        }
    }
    return ""; // nếu value chuẩn thì return rỗng
};

const showNoti = () => {
    const notiBox = document.querySelector(".notiBox");
    notiBox.classList.add("show");
};

// hàm xoá hết các thông báo lỗi trên UI
const clearMsg = () => {
    document.querySelectorAll(".is-invalid").forEach((item) => {
        item.classList.remove("is-invalid");
    });
    document.querySelectorAll(".invalid-feedback").forEach((divMsg) => {
        divMsg.remove();
    });
};

let mbNav = document.querySelector(".mbNav");
let iconNavMb = document
    .querySelector(".iconNavMb")
    .addEventListener("click", (event) => {
        mbNav.classList.add("active");
    });
let btnClose = document
    .querySelector(".btnClose")
    .addEventListener("click", (event) => {
        mbNav.classList.remove("active");
    });

if (document.querySelector(".formContact")) {
    document
        .querySelector(".formContact")
        .addEventListener("submit", (event) => {
            event.preventDefault(); // chặn reset trang
            clearMsg(); // xoá các báo lỗi trước đó
            let emailNode = document.querySelector("#email");
            let nameNode = document.querySelector("#name");
            let companyNode = document.querySelector("#company");
            let countryNode = document.querySelector(
                "input[name='country']:checked"
            );
            let phoneNode = document.querySelector("#phone");
            let confirmedPasswordNode =
                document.querySelector("#confirmedPassword");
            let confirm1Node = document.querySelector("input#confirm1:checked");
            const erroeMsg = [
                //Email
                isValid({
                    value: emailNode.value,
                    funcs: [isRequired, isEmail],
                    parentNode: emailNode.parentElement,
                    controlNodes: [emailNode],
                }),
                //Name
                isValid({
                    value: nameNode.value,
                    funcs: [isRequired, isName],
                    parentNode: nameNode.parentElement,
                    controlNodes: [nameNode],
                }),
                isValid({
                    value: companyNode.value,
                    funcs: [isRequired],
                    parentNode: companyNode.parentElement,
                    controlNodes: [companyNode],
                }),
                isValid({
                    value: phoneNode.value,
                    funcs: [isRequired],
                    parentNode: phoneNode.parentElement,
                    controlNodes: [phoneNode],
                }),
                //agree
                isValid({
                    value: confirm1Node ? confirm1Node.value : "",
                    funcs: [isRequired],
                    parentNode:
                        document.querySelector("input#confirm1").parentElement,
                    controlNodes: [document.querySelector("input#confirm1")],
                }),
            ];
            const isValidForm = erroeMsg.every((item) => !item);
            if (isValidForm) {
                clearMsg();
                showNoti();
            }
        });
}

function animateNumber(
    finalNumber,
    duration = 5000,
    startNumber = 0,
    callback
) {
    const startTime = performance.now();
    function updateNumber(currentTime) {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime > duration) {
            callback(finalNumber);
        } else {
            const rate = elapsedTime / duration;
            const currentNumber = Math.round(rate * finalNumber);
            callback(currentNumber);
            requestAnimationFrame(updateNumber);
        }
    }
    requestAnimationFrame(updateNumber);
}

function editString(string) {
    return string.split(",").join("");
}

function isElementInViewport(el) {
    let viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
    let viewportWidth =
        window.innerWidth || document.documentElement.clientWidth;

    let rect = el.getBoundingClientRect();
    let elementTop = rect.top;
    let elementLeft = rect.left;
    let elementBottom = rect.bottom;
    let elementRight = rect.right;

    let isElementInViewport =
        elementBottom > 0 &&
        elementTop < viewportHeight &&
        elementRight > 0 &&
        elementLeft < viewportWidth;

    return isElementInViewport;
}

let isRun = false;

window.addEventListener("scroll", () => {
    let animationElm1 = document.querySelector(".animationElm1");
    let animationElm2 = document.querySelector(".animationElm2");
    let animationElm3 = document.querySelector(".animationElm3");
    let animationElm4 = document.querySelector(".animationElm4");
    let parentElement = document.querySelector(".effective");

    if (
        animationElm1 &&
        animationElm2 &&
        animationElm3 &&
        animationElm4 &&
        !isRun &&
        isElementInViewport(parentElement)
    ) {
        isRun = true;
        animateNumber(
            Number(editString(animationElm1.innerHTML)).toFixed(0),
            3000,
            0,
            function (number) {
                const formattedNumber = number.toLocaleString();
                animationElm1.innerText = formattedNumber;
            }
        );
        animateNumber(
            Number(editString(animationElm2.innerHTML)).toFixed(0),
            3000,
            0,
            function (number) {
                const formattedNumber = number.toLocaleString();
                animationElm2.innerText = formattedNumber;
            }
        );
        animateNumber(
            Number(editString(animationElm3.innerHTML)).toFixed(0),
            1000,
            0,
            function (number) {
                const formattedNumber = number.toLocaleString();
                animationElm3.innerText = formattedNumber;
            }
        );
        animateNumber(
            Number(editString(animationElm4.innerHTML)).toFixed(0),
            2000,
            0,
            function (number) {
                const formattedNumber = number.toLocaleString();
                animationElm4.innerText = formattedNumber;
            }
        );
    }

    let cuahang = document.querySelector(".cuahang");
    let nguoidung = document.querySelector(".nguoidung");
    let sanpham = document.querySelector(".sanpham");
    let phattrien = document.querySelector(".phattrien");
    let parentElement2 = document.querySelector(".details")

    if (
        cuahang &&
        nguoidung &&
        sanpham &&
        phattrien &&
        !isRun &&
        isElementInViewport(parentElement2)
    ) {
        isRun = true;
        animateNumber(
            Number(editString(cuahang.innerHTML)).toFixed(0),
            3000,
            0,
            function (number) {
                const formattedNumber = number.toLocaleString();
                cuahang.innerText = formattedNumber;
            }
        );

        animateNumber(
            Number(editString(nguoidung.innerHTML)),
            3000,
            0,
            function (number) {
                const formattedNumber = number.toLocaleString();
                nguoidung.innerText = formattedNumber;
            }
        );
        animateNumber(
            Number(editString(sanpham.innerHTML)),
            3000,
            0,
            function (number) {
                const formattedNumber = number.toLocaleString();
                sanpham.innerText = formattedNumber;
            }
        );
        animateNumber(
            Number(editString(phattrien.innerHTML)),
            3000,
            0,
            function (number) {
                const formattedNumber = number.toLocaleString();
                phattrien.innerText = formattedNumber;
            }
        );
    }
});
