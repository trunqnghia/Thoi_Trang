// js/main.js
$(document).ready(function() {
    
    // 1. Hiệu ứng Hover mượt mà cho menu hoặc các bài viết liên quan
    $('.topic-card').hover(
        function() { $(this).addClass('shadow-effect'); },
        function() { $(this).removeClass('shadow-effect'); }
    );

    // 2. Xử lý Đăng nhập phía Client cơ bản
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        let username = $('#username').val();
        if(username === "") {
            alert("Vui lòng nhập tên đăng nhập!");
        } else {
            alert("Chào mừng thành viên " + username + " quay trở lại!");
            window.location.href = "index.html";
        }
    });

    // 3. Xử lý thêm comment tức thì tại các trang chi tiết bài viết
    $('#submit-comment').click(function() {
        let commenterName = $('#commenter-name').val();
        let commentText = $('#comment-content').val();

        if (commenterName && commentText) {
            let newComment = `
                <div class="user-comment" style="display:none; border-bottom:1px dashed #ccc; padding:10px 0;">
                    <strong>${commenterName}:</strong>
                    <p>${commentText}</p>
                </div>
            `;
            // Chèn vào danh sách comment và tạo hiệu ứng hiện hình mượt mà
            $('.comments-list').append(newComment);
            $('.user-comment').last().fadeIn(500);
            
            // Xóa trắng form sau khi submid
            $('#commenter-name').val('');
            $('#comment-content').val('');
        } else {
            alert("Vui lòng điền đầy đủ tên và nội dung phản hồi!");
        }
    });
});
