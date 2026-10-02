function upDate(previewPic) {
    // Kiểm tra xem sự kiện có đang kích hoạt hay không bằng console.log
    console.log("Event triggered: mouseover");

    // In thông tin về thuộc tính alt và source (đường dẫn) của ảnh
    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    // Thay đổi nội dung văn bản của khối có id="image" thành giá trị alt của ảnh
    document.getElementById("image").innerHTML = previewPic.alt;

    // Thay đổi ảnh nền (background image) của khối có id="image" thành đường dẫn src của ảnh
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    // Khôi phục ảnh nền của khối có id="image" về giá trị rỗng ban đầu là url('')
    document.getElementById("image").style.backgroundImage = "url('')";

    // Khôi phục nội dung văn bản của khối có id="image" về câu mặc định ban đầu
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}