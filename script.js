// Hàm 1: Chạy khi đưa chuột vào (mouseover) hoặc dùng phím tab focus vào ảnh (focus)
function upDate(previewPic) {
    let imageDiv = document.getElementById("image");
    
    console.log("Event triggered: mouseover/focus");
    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    // Lấy tỷ lệ kích thước thật của ảnh (chiều cao / chiều rộng)
    let ratio = previewPic.naturalHeight / previewPic.naturalWidth;
    
    // Giữ nguyên chiều rộng khung là 575px (theo CSS), tính toán chiều cao mới
    let newHeight = 575 * ratio;
    
    // Ép khung và dòng chữ thay đổi chiều cao để vừa khít với ảnh
    imageDiv.style.height = newHeight + "px";
    imageDiv.style.lineHeight = newHeight + "px";
}

function undo() {
    let imageDiv = document.getElementById("image");
    
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
    
    // Trả khung về lại kích thước mặc định ban đầu khi đưa chuột ra ngoài
    imageDiv.style.height = "650px";
    imageDiv.style.lineHeight = "650px";
}

// Hàm 3: HÀM MỚI (Step 9) - Chạy tự động khi tải trang (onload)
function initializeGallery() {
    // 9a. Thêm console.log để kiểm tra sự kiện có chạy không
    console.log("Page loaded. Initializing accessibility features...");
    
    // Lấy tất cả các phần tử ảnh có class là 'preview'
    let images = document.getElementsByClassName("preview");
    
    // 9b. Viết vòng lặp for chạy qua từng ảnh
    for (let i = 0; i < images.length; i++) {
        // 9c. Thêm thuộc tính tabindex để có thể điều hướng bằng phím Tab
        images[i].setAttribute("tabindex", "0");
        console.log("Added tabindex to image " + (i + 1));
    }
}