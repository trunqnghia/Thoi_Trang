$(document).ready(function() {
    // 1. Tạo hiệu ứng tương tác trực quan khi rê chuột vào các bài viết (Hot Content)
    $('.topic-card').hover(
        function() { $(this).addClass('highlight-card'); },
        function() { $(this).removeClass('highlight-card'); }
    );

    // 2. Kiểm tra dữ liệu đăng nhập bằng JQuery phía Client
    $('#loginForm').on('submit', function(e) {
        e.preventDefault(); // Chặn việc reload lại trang
        let username = $('#username').val().trim();
        let password = $('#password').val().trim();

        if (username === "" || password === "") {
            alert("Lỗi: Vui lòng nhập đầy đủ Tài khoản và Mật khẩu!");
        } else {
            alert("Đăng nhập thành công! Chào mừng thành viên: " + username);
            window.location.href = "index.html"; // Chuyển về trang chủ sau khi đăng nhập thành công
        }
    });

    // 3. Xử lý gửi phản hồi/bình luận không tải lại trang (Append động)
    $('#btn-comment').click(function() {
        let name = $('#cmt-name').val().trim();
        let content = $('#cmt-content').val().trim();

        if (name === "" || content === "") {
            alert("Vui lòng điền tên và nội dung bình luận!");
            return;
        }

        // Tạo cấu trúc comment mới
        let newComment = `
            <div class="comment-item" style="display:none;">
                <strong>📌 ${name}:</strong>
                <p style="margin-top:5px; color:#555;">${content}</p>
            </div>
        `;

        // Đẩy comment mới vào danh sách và dùng hiệu ứng slideDown/fadeIn của JQuery để hiển thị mượt mà
        $('.comments-list').prepend(newComment);
        $('.comment-item').first().slideDown(400);

        // Reset lại form viết comment
        $('#cmt-name').val('');
        $('#cmt-content').val('');
    });
});
