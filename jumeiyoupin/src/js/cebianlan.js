$(()=>{
     //侧边栏登录
     $(".mpbtn_login a").hover(function () {
        $(this).css("background", "#e00a50");
        $(this).children("s").css("background-position", "-33px 0")
    }, function () {
        $(this).css("background", "");
        $(this).children("s").css("background-position", "")
    })
    //侧边栏购物车
    $(".mpbtn_cart a").hover(function () {
        $(this).css("background", "#e00a50");
        $(this).children("s").css("background-position", "-33px -29px")
    }, function () {
        $(this).css("background", "");
        $(this).children("s").css("background-position", "")
    })
    //侧边栏财产
    $(".mpbtn_asset a").hover(function () {
        $(this).css("background", "#e00a50");
        $(this).children("s").css("background-position", "-33px -57px");
        $(this).siblings(".mp_tooltip").slideDown()
    }, function () {
        $(this).css("background", "");
        $(this).children("s").css("background-position", "");
        $(this).siblings(".mp_tooltip").css("display","none")
    })
    //侧边栏心愿单
    $(".mpbtn_favorite a").hover(function () {
        $(this).css("background", "#e00a50");
        $(this).children("s").css("background-position", "-33px -85px", ); //"visibility","visible"
        $(this).siblings(".mp_tooltip").slideDown()
    }, function () {
        $(this).css("background", "");
        $(this).children("s").css("background-position", "");
        $(this).siblings(".mp_tooltip").css("display","none")
    })
    //侧边栏足迹
    $(".mpbtn_histroy a").hover(function () {
        $(this).css("background", "#e00a50");
        $(this).children("s").css("background-position", "-37px -110px");
        $(this).siblings(".mp_tooltip").slideDown()
    }, function () {
        $(this).css("background", "");
        $(this).children("s").css("background-position", "");
        $(this).siblings(".mp_tooltip").css("display","none")
    })
    //侧边栏二维码
    $(".mpbtn_qrcode a").hover(function () {
        $(this).css("background", "#e00a50");
        $(this).siblings(".mp_qrcode").slideDown()

    }, function () {
        $(this).css("background", "");
        $(this).siblings(".mp_qrcode").css("display","none")

    })
    //侧边栏客服
    $(".mpbtn_support a").hover(function () {
        $(this).css("background", "#e00a50");
        $(this).children("s").css("background-position", "-33px -175px");
        $(this).siblings(".mp_tooltip").slideDown()
    }, function () {
        $(this).css("background", "");
        $(this).children("s").css("background-position", "");
        $(this).siblings(".mp_tooltip").css("display","none")
    })
    //返回顶部
    $(".mpbtn_gotop a").hover(function () {
        $(this).css("background", "#e00a50");
        $(this).children("s").css("background-position", "-33px -201px");
        $(this).siblings(".mp_tooltip").slideDown()
    }, function () {
        $(this).css("background", "");
        $(this).children("s").css("background-position", "");
        $(this).siblings(".mp_tooltip").css("display","none")
    })
})