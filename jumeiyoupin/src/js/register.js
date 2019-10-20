 //手机号验证
 $(() => {
     // $("#mobile").val("18406776210");
     //手机号注册
     $("#mobile").on("focus", function () {
         $(this).siblings(".focus_text").css("display", "block");
         $(this).siblings(".invalid").children(".msg").css("display", "none")

     });
     let flat
     $("#mobile").on("blur", function () {
         let val = $(this).val().trim();
         if (/^1[3-9]\d{9}$/.test(val)) {
             $(this).parent(".textbox_ui").children(".yuan").css("display", "block");
             $(this).siblings(".focus_text").css("display", "none");
             flat = false;
         } else {
             $(this).siblings(".focus_text").siblings(".invalid").children(".msg").css("display",
                 "block")
             $(this).siblings(".focus_text").css("display", "none");
             $(this).parent(".textbox_ui").children(".yuan").css("display", "none");
             flat = true;
         }
     })



     //短信验证码
     let randomNumber;

     function getRandom(min, max) {
         return parseInt(Math.random() * (max - min + 1)) + min
     }
     randomNumber = 123;
     // $("#mobile_verify").val(randomNumber)
     $("#shows").click(function () {
         $("#mobile").trigger("onblur");
         console.log(flat);
         /* 如果flag的值是flase,那么我们就调用第三方平台发请求 发短信 */
         if (flat) return;
         // randomNumber = getRandom(1000, 9999);
         // randomNumber = 999;
         $.ajax({
             type: 'post',
             url: 'http://route.showapi.com/28-1',
             dataType: 'json',
             data: {
                 "showapi_appid": '91032', //这里需要改成自己的appid
                 "showapi_sign": 'd57b19c8d2d44aef94aee464768a38d8', //这里需要改成自己的应用的密钥secret
                 "mobile": $("#mobile").val(),
                 "content": `{"name":"文顶顶","code":${randomNumber},"minute":"3","comName":"脑子进水集团"}`,
                 "tNum": "T150606060601",
             },
             success: (result) => console.log(result)
         });
     });


     //密码
     $("#password").on("focus", function () {
         $(this).siblings(".focus_text").css("display", "block");

     });
     $("#password").keyup(function () {
         let val = $(this).val().trim();
         if (/^[0-9a-zA-Z\W]{6,16}$/.test(val)) {
             $(this).siblings(".focus_text").css("display", "none");
         } else {
             $(this).siblings(".focus_text").css("display", "block");
             $(this).siblings(".focus_text").text("密码不符合规范");
         }
     })
     $("#password2").on("focus", function () {
         $(this).siblings(".focus_text").css("display", "block");
     });

     $("#password2").blur(function () {
         let val = $(this).val().trim();
         let targetVal = $("#password").val().trim();
         if (targetVal == val) {
             $(this).siblings(".focus_text").css("display", "none");
         } else {
             // $(this).siblings(".focus_text").css("display", "none");
             $(this).siblings(".focus_text").text("两次密码不一样");
         }
     })
     $("#mobile").val("18406776210");
     $("#mobile_verify").val("123");
     $("#password").val("111111");
    

     //注册
     $(".submit_btn").click(function () {

         $("#mobile").trigger("onblur");
         $("#password").trigger("keyup");
         $("#password2").trigger("onblur");


         if ($("#mobile_verify").val() != randomNumber + "") {
             alert("手机验证码不正确!");
             return;
         }

         if ($("#password").val() != $("#password2").val()) {
             alert("密码不正确");
             return;
         }

         $.ajax({
             type: "post",
             url: "../server/register.php",
             data: `phone=${$("#mobile").val()}&password=${$("#password").val()}`,
             dataType: "json",
             success: function (response) {
                 console.log(response);

                 if (response.status == "ok") {
                     console.log("++++");

                     /* 跳转到首页 */
                     window.location.href = "http://127.0.0.1/1910/jumeiyoupin/src/html/loading.html";
                 } else {
                     /* 注册失败： */
                     alert(response.msg);
                 }
             }
         });
     })

 })