$(() => {
    //聚美优品&更多
    $(".item_ijumei,.item_more").hover(function () {
        $(this).css({
            "background": "#fff",
            "box-shadow": "1px 3px 5px rgba(0,0,0,.2)"
        });
        $(this).children(".sub_nav").slideDown();
        $(this).children("a").children(".icon_arrow_down").css({
            "transform": "rotateZ(180deg)",
            "transition": "0.2s all"
        })

    }, function () {
        $(this).children(".sub_nav").slideUp();
        $(this).css({
            "background": "#f2f2f2",
            "box-shadow": ""
        });
        $(this).children("a").children(".icon_arrow_down").css("transform", "rotateZ(0deg)")
    })

    //购物车
    $("#cart_box").hover(function () {
        console.log($(this));
        console.log($(this).children(".cart_content").children(".cart_content_zero"));

        $(this).addClass("car-current");
        $(this).children(".cart_content").children(".cart_content_zero").slideDown("fast");
    }, function () {
        $(this).removeClass("car-current");
        $(this).children(".cart_content").children(".cart_content_zero").slideUp("fast");
    })

    //导航栏的划入事件
    $(".channel_nav_list").children().hover(function () {
            $(this).children().css("color", "#ccc");
        },
        function () {
            $(this).children().css("color", "#fff");
        })


        $(".current").hover(function(){
            $("#header_pop_subAct").stop().slideDown();
            // $(this).parent(".channel_nav_list").siblings("#header_pop_subAct").slideDown();
        } ,function(){
            $("#header_pop_subAct").stop().slideUp();
            // $(this).parent(".channel_nav_list").siblings("#header_pop_subAct").slideUp();
        })


        // $("#header_pop_subAct").hover(function(){
        //     $("#header_pop_subAct").slideDown();
        // })
       
        
       
       
})