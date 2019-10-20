$(() => {

    new Promise(function (resolve, reject) {
        $.ajax({
            type: "get",
            url: "../server/pageCount.php",
            dataType: "json",
            success: (data) => {
                let res = "";
                for (let i = 0; i < data.count; i++) {
                    res += `<a href="javascript:;">${i + 1}</a>`
                }
                $("#page").html(res);
                $("#page").children().eq(0).addClass("active");

                resolve();
            }
        });
    }).then(function () {
        getDataWithPage(1, 0);
    })

    function getDataWithPage(page, type) {
        $.ajax({
            type: "get",
            url: "../server/page.php",
            data: `page=${page}&sortType=${type}`,
            dataType: "json",
            success: (data) => {
                renderUI(data)
            }

        });
    }

    function renderUI(data) {
        // console.log(data);<a href="" data-id=${ele.good_id}>
        //<img class=tupian src="${ele.src}"></a>  

        let html = data.map((ele) => {
            return `
            <li class="item" data-id=${ele.good_id}>  
            <div class="dian">${ele.dian}</div>
            <a target="_blank"><img class=tupian src="${ele.src}"></a>
            <div class="title ">${ele.title}</div>
            <div class="priceA ">￥${ele.priceA}</div>
            <div class="del ">${ele.del}</div>
            <span class="gouwuche">加入购物车</span>
            <span class="shoucang">收藏</span>
        </li>

            `
        }).join("");
        $(".box-list").html(html);

        $(".box-list").children(".item").on("click", function (e) {
            let index = $(this).index() + 1
            // console.log(index)
            if (e.target.className == "tupian") {
                window.location.href = "details.html" + "?" + `id=${index}`;
            }

        })
    }

    $("#page").on("click", "a", function () {
        getDataWithPage($(this).text());
        $(this).addClass("active").siblings().removeClass("active");
    })

    /* 处理排序 */
    $(".typeBtn").click(function () {
        getDataWithPage(1, $(this).index());
    })

    //清除浮动
    $(".box-list").addClass("clearfix");

    //吸顶效果  给window加事件
    let a = $(".btn-class").offset().top; //盒子元素距离顶端的距离
    $(window).scroll(function () {
        let b = $(window).scrollTop(); //滚动条相当于浏览器顶端的距离
        if (b > a) {
            $(".btn-class").css({
                "position": "fixed",
                "top": "0"
            });
        } else {
            $(".btn-class").css("position", "")
        }
    });

    /* 实现点击添加商品到购物车的功能 */
    $(".box-list").on("click", ".gouwuche", function () {
        /* 获取当前商品的ID */
        let good_id = $(this).parents("li").data().id;
        console.log(good_id);

        /* 发送网络请求把当前数据添加到购物车表中 */
        /* 数据库表 cart_id  good_id  num isChecked */
        /* 添加数据： */
        /* 删除数据： */
        /* 更新数据： */
        $.ajax({
            type: "post",
            url: "../server/cart.php",
            data: {
                type: "add",
                good_id: good_id
            },
            dataType: "json",
            success: function (response) {
                if (response.status == "success") {
                    $(".cart_num").text($(".cart_num").text() * 1 + 1);
                }
            }
        });
    })

    $.ajax({
        url: "../server/getTotalCount.php",
        dataType: "json",
        success: function ({
            total
        }) {
            // console.log(total);
            $(".cart_num").text(total);
        }
    });

    /* 打开购物车页面 */
    $(".mpbtn_cart").click(() => window.location.href = "./cart.html");

})