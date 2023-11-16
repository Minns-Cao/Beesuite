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
    var swiperStorySlide = new Swiper(".storySilde", {
        slidesPerView: 3,
        spaceBetween: 74, 
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 2,
    
                spaceBetween: 20,
            },
        },
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
try {
} catch (error) {
    console.log(error);
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
    console.log(error);
}
try {
} catch (error) {
    console.log(error);
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
let iconNavMb = document.querySelector(".iconNavMb").addEventListener("click",event => {
    mbNav.classList.add("active");
})
let btnClose = document.querySelector(".btnClose").addEventListener("click",event => {
    mbNav.classList.remove("active");
})


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
