$(document).ready(function () {
  console.log("dsdsdssssssssssssssssssssssssss");
  //E-mail Ajax Send
  $("form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "../models/mail.php", //Change
      data: th.serialize(),
    }).done(function () {
      console.log("dsds");
      alert(
        "Спасибо, ваше сообщение отправлено, в скором времени с вами свяжутся!"
      );
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});
