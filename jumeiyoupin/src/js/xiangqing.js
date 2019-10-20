(() => {
    var url = window.location.href;
    // console.log(url);
    // var id =url.split("?id=");
    var id = url.slice(-1);
    console.log(id);


    $.ajax({
        type: "get",
        url: "../server/xiangqingye.php",
        data: {
            name: id
        },
        dataType: "json",
        success: (data) => {
            render(data)

        }
    });

    //详情页数据渲染
    function render(data) {
        let html = data.map(ele => {
            return `
            <div class="breadcrumbs">
            <a href="" title="前往聚美优品首页" target="_blank">聚美优品首页</a>
            &gt; <a href="" title="前往名品特卖" target="_blank">名品特卖</a>
            &gt; <a href="">${ele.title}</a>
        </div>
        <div class="pop_new_main">
         <div id="amp">
                <div class="imgbox">
                    <div class="minImg">
                        <img id="big_pic"
                            src=${ele.src}>
                        <div class="img-mask" style="display: none;"></div>
                    </div>
                    <div class="maxImg" style="display:none">
                        <img id=fangDaPic
                            src=${ele.src}>
                    </div>
                </div>
                <div class="list_img">
                    <img class="active"
                        src=${ele.src}
                        alt="">
                </div>
            </div>
            <div class="pop_detail_top">
                <h1 class="pop_detail_tit">${ele.title}</h1>
                <div class="pop_price_wrap clearfix">
                    <div class="pop_price">
                        <span class="price_now"><em class="yen" name="47.8">¥ </em>${ele.priceA}</span>
                        <span class="price_now"></span>                  
                    </div>
                </div>               
                <div class="pop_rebates">
                    <ul></ul>
                </div>
                <div class="dot_line"></div>              
                <div class="pop_change clearfix">
                    <span class="pop_tit ">运费</span>
                    <span class="pop_black" id="freight">单商家订单满159元包邮</span>
                 <span class="pop-sale-amount">月销212</span> </div>
                <div class="dot_line dot_line_top"></div>               
                <div class="pop_change clearfix">
                    <span class="pop_tit">服务</span>
                    <ul class="commitment">
                        <li><a href="http://pop.jumei.com/i/pop/rule" target="_blank">质量保险</a></li>
                        <li><a href="http://pop.jumei.com/i/pop/rule" target="_blank">本商品不支持退货</a></li>
                      
                        <li><a href="http://pop.jumei.com/i/pop/rule" target="_blank">本商品不支持换货</a></li>
                        
                        <li><a href="http://pop.jumei.com/i/pop/rule" target="_blank">闪电发货</a></li>
                    </ul>
                </div>
                <div class="dot_line dot_line_bottom"></div>             
                <div class="pop_change clearfix">
                    <span class="pop_tit">国家药监局提示您：请正确认识化妆品功效，化妆品不能替代药品，不能治疗皮肤病等疾病</span>
                </div>
                <div class="dot_line dot_line_bottom"></div>              
                <div class="pop_change pop_change_size">
                    <input name="sku_no" id="sku_no" type="hidden" value="">
                    <div class="model_wrap" style="">
                        <dl class="change_wrap">
                            <dt class="pop_meta_tit">型号</dt>
                            <dd>
                                <ul class="J_size_wrap">
                                    <li sku_no="df4881258198360822" class=""><a href="javascript:"
                                            sku_img="http://p0.jmstatic.com/product/198/360/df4881258198360822_std/s_df4881258198360822_800_800.jpg"
                                            jumei_price="47.8"><span>01</span></a><i>已选中</i></li>
                                    <li sku_no="df4881258198360823" class=""><a href="javascript:"
                                            sku_img="http://p1.jmstatic.com/product/198/360/df4881258198360823_std/s_df4881258198360823_800_800.jpg"
                                            jumei_price="47.8"><span>02</span></a><i>已选中</i></li>
                                    <li sku_no="df4881258198360824" class=""><a href="javascript:"
                                            sku_img="http://p4.jmstatic.com/product/198/360/df4881258198360824_std/s_df4881258198360824_800_800.jpg"
                                            jumei_price="47.8"><span>03</span></a><i>已选中</i></li>
                                </ul>
                            </dd>
                        </dl>
                        <div class="model_alert">请选择型号</div>
                    </div>
                    <dl class="change_wrap num_wrap on-sale-wrap" style="">
                        <dt class="pop_meta_tit">数量</dt>
                        <dd id="J_Amount">
                            <span class="pop_amount_wrap "> <a href="javascript:;" class="increase_num">+</a>
                                <input type="text" title="请输入购买量" maxlength="7" user_purchase_limit="0" value="1"
                                    class="amout_input">
                                <a href="javascript:;" class="decrease_num">-</a>
                            </span>
                            <span id="J_StockTips"></span>
                        </dd>

                    </dl>
                </div>
                <div id="status_area">
                    <div class="pop_change clearfix buy_btn_wrap on-sale-wrap" style="">
                        <a href="javascript:;" class="pop_buy_btn addcart_btn" id="add_to_cart"><i></i>加入购物车</a>
                    </div>
                </div>
                <div class="three_info_note">本商品非自营，由<span class="three_business">商品由judydoll负责发货并提供后续售后服务
                        (营业执照)</span>直接发货并提供售后服务，您在购买过程中有任何疑问可咨询聚美客服。</div>
            </div>

            <div class="clearfix"></div>
        </div>
            `
        }).join("");
        $("#pop_detail_body").html(html);
        fangDaJing();
       
    }

    //放大镜
    function fangDaJing() {
        let imgBox = document.querySelector('.imgbox'); //最外层大大的盒子
        let minBox = document.querySelector('.minImg'); //装小图片的盒子
        let minImg = document.querySelector('.minImg img'); //小盒子的图片
        let mask = document.querySelector('.img-mask'); //遮罩
        let maxBox = document.querySelector('.maxImg'); //大盒子
        let maxImg = document.querySelector('.maxImg img'); //大盒子的图片
        let imgs = document.querySelector(".list_img"); //下面小图

        // 小图片盒子绑定鼠标移入事件
        //鼠标移入 大盒子和遮罩出现
        minBox.onmouseenter = function () {
            mask.style.display = "block";
            maxBox.style.display = "block";
        }

        //鼠标在小盒子移动大盒子跟着移动
        minBox.onmousemove = function (ev) {
            // console.log(ev.clientY, imgBox.offsetTop);
            let moveX = ev.pageX - imgBox.offsetLeft - mask.offsetWidth / 2;
            let moveY = ev.pageY - imgBox.offsetTop - mask.offsetHeight / 2;

            // 遮罩可以运动的最大X方向的距离
            let maxX = minBox.offsetWidth - mask.offsetWidth;
            // 遮罩可以运动的最大Y方向的距离
            let maxY = minBox.offsetHeight - mask.offsetHeight;

            // 设置最大可以移动距离
            if (moveX >= maxX) {
                moveX = maxX;
            }
            if (moveY >= maxY) {
                moveY = maxY;
            }

            // 设置最小可以移动距离
            if (moveX <= 0) {
                moveX = 0;
            }

            if (moveY <= 0) {
                moveY = 0;
            }
            // 大图片可以移动的最大距离
            let biliX = (maxImg.offsetWidth - maxBox.offsetWidth) / maxX;
            // 遮罩移动一像素，大图片需要移动的距离
            let biliY = (maxImg.offsetHeight - maxBox.offsetHeight) / maxY;

            // 给遮罩添加移动
            mask.style.top = moveY + 'px';
            mask.style.left = moveX + 'px';

            // 因为大图片移动的方向是相反的所以要加负号
            maxImg.style.top = -moveY * biliY + 'px';
            maxImg.style.left = -moveX * biliX + 'px';

        }
        minBox.onmouseleave = function () {
            mask.style.display = "none";
            maxBox.style.display = "none";
        }
    }

    
})();