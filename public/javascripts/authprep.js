// $("#authPrepod").click(function() {
//   var loginp = $("#prepodInputEmail").val();
//   var passp = $("#prepodInputPassword").val();

//   $.ajax({
//     url: "models/authprepod.php",
//     type: "POST",
//     cache: false,
//     data: {
//       prepodInputEmail: loginp,
//       prepodInputPassword: passp
//     },
//     dataType: "html",
//     success: function(data) {
//       if (data == "Готово") {
//         $("#authPrepod").text("Вы авторизованы");
//         $("#errorBlockPrepod").hide();
//         window.location.href = "prepodcabinet.php";
//       } else 
//         $("#errorBlockPrepod").show();
//       $("#errorBlockPrepod").text(data);
//     }
//   });
// });
