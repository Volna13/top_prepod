$('#authStudent').click(function() {
    var login = $('#studentInputEmail').val();
    var pass = $('#studentInputPassword').val();

    $.ajax({
        url: 'models/authstudent.php',
        type: 'POST',
        cache: false,
        data: {
            'studentInputEmail': login,
            'studentInputPassword': pass
        },
        dataType: 'html',
        success: function(data) {
            if (data == 'Готово') {
                $('#authStudent').text('Вы авторизованы');
                $('#errorBlockStud').hide();
                window.location.href = 'studentcabinet.php';
            } else
                $('#errorBlockStud').show();
            $('#errorBlockStud').text(data);
        }
    });
});