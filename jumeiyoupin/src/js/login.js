$(() => {
    //切换功能
    // $("#radio_dynamic").attr("checked","true");
    $("span").children().click(function () {

        console.log();
        let index = $(this).parent().index()

        if (index == 0) {
            $(".radio_wrapper").parent().children("form").eq(0).css("display", "block");
            $(".radio_wrapper").parent().children("form").eq(1).css("display", "none");
        } else {
            $(".radio_wrapper").parent().children("form").eq(0).css("display", "none");
            $(".radio_wrapper").parent().children("form").eq(1).css("display", "block");
        }
    })


    /* 登录按钮的点击事件 */
    $(".submit_btn ").click(function () {
        let userVal = $("#username").val();
        console.log(userVal);
        let passwordVal = $("#login_password").val();
        console.log(passwordVal);

        $.ajax({
            type: "post",
            url: "../server/login.php",
            data: `phone=${userVal}&password=${passwordVal}`,
            dataType: "json",
            success: function (response) {
                if (response.status == "success") {

                    window.location.href =
                        "http://127.0.0.1/1910/jumeiyoupin/src/html/menu.html";
                } else {
                    alert(response.msg);
                }

            }
        });
    })

})