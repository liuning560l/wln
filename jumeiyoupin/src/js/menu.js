class Manager {
    constructor(data) {
        this.data = data;
    }
    init() {
        this.renderUI();
        this.eventHander();
    }
    
    renderUI() {
        this.renderContent();
    }

    renderContent() {
        let html = this.data.map(function (ele, index) {
            return `
       
    <div class="tab_content ${index ==0 ? 'current':''}"">
        <ul class="list_tu">
        <li><img src=${ele.src1}></li>
        <li><img src=${ele.src2}></li>
        <li><img src=${ele.src3}></li>
        <li><img src=${ele.src4}></li>
        <li><img src=${ele.src5}></li>
        <li><img src=${ele.src6}></li>
        <li><img src=${ele.src7}></li>
        <li><img src=${ele.src8}></li>
        <li><img src=${ele.src9}></li>
        <li><img src=${ele.src10}></li>
        <li><img src=${ele.src11}></li>
        <li><img src=${ele.src12}></li>  
        </ul> 
        <img class="add_tu" src=${ele.src13}>
            <div class="sc_change">
               <li class="sc_prev"><img class="prev" src="../img/zuojiantou.jpg" alt=""></li>
               <li class="sc_next"><img class="next" src="../img/youjiantou.jpg" alt=""></li>
            </div>
    </div>
        
        `
        }).join("");
        // console.log(html);
        $(".brand_wall_switchable").append($(html));
    }

    eventHander() {
      
        /* 切换 */
        $(".sc_index a").hover(function () {     
            $(this).addClass("active").siblings().removeClass("active");
            let index = $(this).index();
            // console.log(index);           
            //渲染出来的数据需要寻找节点才可以给添加事件
            $(".brand_wall_switchable").find(".tab_content").eq(index).addClass("current").siblings().removeClass("current");
        })

        let num = 0;
        $(".sc_change").on("click", function (e) {
            // $(".sc_index a").addClass("active").siblings().removeClass("active");
            let target = e.target || e.srcElement;
            if (target.className == "prev") {    
                num--;
                if (num < 0) {
                    num = 5
                }
                $('.sc_index a').eq(num).addClass("active").siblings().removeClass("active");
                $(num).addClass("active").siblings().removeClass("active");
                let index = $(num).index();
                $(".brand_wall_switchable").find(".tab_content").eq(num).addClass("current").siblings().removeClass("current");
            }
            if (target.className == "next") {
                num++;
                if (num > 5) {
                    num = 0
                }
                $('.sc_index a').eq(num).addClass("active").siblings().removeClass("active");
                $(num).addClass("active").siblings().removeClass("active");
                let index = $(num).index();
                $(".brand_wall_switchable").find(".tab_content").eq(num).addClass("current").siblings().removeClass("current");
            }
        })

    }


}