document.writeln("<!DOCTYPE html>");
document.writeln("<html lang=\'en\'>");
document.writeln("");
document.writeln("<head>");
document.writeln("    <meta charset=\'UTF-8\'>");
document.writeln("    <meta name=\'viewport\' content=\'width=device-width, initial-scale=1.0\'>");
document.writeln("    <meta http-equiv=\'X-UA-Compatible\' content=\'ie=edge\'>");
document.writeln("    <title>Document</title>");
document.writeln("    <link rel=\'stylesheet\' href=\'../css/base.css\'>");
document.writeln("    <link rel=\'stylesheet\' href=\'../css/jumei.css\'>");
document.writeln("    <script src=\'../js/jquery-3.4.1.js\'></script>");
document.writeln("    <script src=\'../js/01-header.js\'></script>");
document.writeln("</head>");
document.writeln("");
document.writeln("<body>");
document.writeln("    <div class=\'header header_wide_lv2\'>");
document.writeln("        <!--header top-->");
document.writeln("        <div class=\'header_top\'>");
document.writeln("            <div class=\'header_top_box\'>");
document.writeln("                <!--login-->");
document.writeln("                <ul class=\'header_top_left\' id=\'headerTopLeft\'>");
document.writeln("                    <li>欢迎来到聚美！</li>");
document.writeln("                    <li><a href=\'http://127.0.0.1/1910/jumeiyoupin/src/html/loading.html\'>请登录</a></li>");
document.writeln("                    <li><a href=\'http://127.0.0.1/1910/jumeiyoupin/src/html/register.html\' rel=\'nofollow\'>快速注册</a></li>");
document.writeln("                </ul>");
document.writeln("                <!--login end-->");
document.writeln("                <!--city choose-->");
document.writeln("                <div class=\'default-city fl\'>");
document.writeln("                    <span class=\'add-city-icons\'>");
document.writeln("                        送至<span class=\'add-default-city\'>&nbsp;</span>");
document.writeln("                        <s class=\'icon_arrow_down\'></s>");
document.writeln("                        <i class=\'user-local-icon\'></i>");
document.writeln("                    </span>");
document.writeln("                    <div class=\'header-city-list\'></div>");
document.writeln("                </div>");
document.writeln("                <!--city choose end-->");
document.writeln("                <!--right list-->");
document.writeln("                <ul class=\'header_top_right\' id=\'headerTopRight\'>");
document.writeln("                    <li><a href=\'\'>正品保证</a>");
document.writeln("                    </li>");
document.writeln("                    <li><a href=\'\'>订单查询</a></li>");
document.writeln("                    <li><a href=\'\'><s class=\'icon_favorite\'></s>收藏的品牌</a></li>");
document.writeln("                    <li class=\'item_ijumei\'>");
document.writeln("                        <a href=\'\'>我的聚美<s class=\'icon_arrow_down\'></s></a>");
document.writeln("                        <i class=\'icon_arrow_back\'></i>");
document.writeln("                        <div class=\'sub_nav\'");
document.writeln("                            style=\'display: none; height: auto; overflow: visible; padding-top: 8px; margin-top: 0px; padding-bottom: 8px; margin-bottom: 0px;\'>");
document.writeln("                            <ul>");
document.writeln("                                <li><a href=\'\'>我的订单</a></li>");
document.writeln("                                <li><a href=\'\' rel=\'nofollow\'>我的现金券</a>");
document.writeln("                                </li>");
document.writeln("                                <li><a href=\'\'>我的红包</a>");
document.writeln("                                </li>");
document.writeln("                                <li><a href=\'\'>我的余额</a></li>");
document.writeln("                                <li><a href=\'\'>我的提现退款</a></li>");
document.writeln("                                <li><a href=\'\'>我的收藏</a></li>");
document.writeln("                                <li><a href=\'\'>我的心愿单</a></li>");
document.writeln("                                <li><a href=\'\'>会员中心</a></li>");
document.writeln("                                <li><a href=\'\'>礼品卡兑换</a></li>");
document.writeln("                            </ul>");
document.writeln("                        </div>");
document.writeln("                    </li>");
document.writeln("                    <li class=\'item_mobile\'><a href=\'\'><span class=\'line\'></span><s class=\'icon_mobile\'></s>手机聚美</a>");
document.writeln("                    </li>");
document.writeln("                    <!--            <li class=\'item_koubei\'><a href=\'-->");
document.writeln("                    <!--/?from=-->");
document.writeln("                    <!--_top_nav_fresh_koubei_tab_new\'><s class=\'icon_koubei\'></s>口碑中心</a></li>-->");
document.writeln("                    <li id=\'see_more\'>");
document.writeln("                        <span class=\'line\'></span>");
document.writeln("                        <!--查看更多 (广告位) star-->");
document.writeln("                        <!-- 查看分类(广告位) end  -->");
document.writeln("                    </li>");
document.writeln("                    <li class=\'item_more\'>");
document.writeln("                        <a href=\'\'>更多<s class=\'icon_arrow icon_arrow_down\'></s></a>");
document.writeln("                        <i class=\'icon_arrow_back\'></i>");
document.writeln("                        <div class=\'sub_nav\'");
document.writeln("                            style=\'display: none; height: auto; padding-top: 8px; margin-top: 0px; padding-bottom: 8px; margin-bottom: 0px; overflow: visible;\'>");
document.writeln("                            <ul>");
document.writeln("                                <li><a href=\'\' target=\'_blank\'>邀请好友</a></li>");
document.writeln("                                <li><a href=\'\' id=\'bookmark_us\'><span class=\'bottomline\'>加入收藏</span></a></li>");
document.writeln("                                <li><a href=\'\' class=\'er_box\' rel=\'nofollow\' target=\'_blank\'>新浪微博<span");
document.writeln("                                            style=\'display: none;\'><img");
document.writeln("                                                src=\'http://p0.jmstatic.com/templates/jumei/images/sina_er.png\'></span></a>");
document.writeln("                                </li>");
document.writeln("                                <li><a href=\'javascript:void(0)\' class=\'er_box\' rel=\'nofollow\'>聚美微信<span");
document.writeln("                                            style=\'display: none;\'><img src=\'\'></span></a></li>");
document.writeln("                                <li><a href=\'\' class=\'er_box\' target=\'_blank\'>百度贴吧</a></li>");
document.writeln("                                <li><a href=\'\' class=\'er_box\' rel=\'nofollow\' target=\'_blank\'>腾讯微博<span");
document.writeln("                                            style=\'display: none;\'><img src=\'\'></span></a>");
document.writeln("                                </li>");
document.writeln("                                <li><a href=\'\' class=\'er_box\' rel=\'nofollow\' target=\'_blank\'>人人公众主页<span");
document.writeln("                                            style=\'display: none;\'><img src=\'\'></span></a>");
document.writeln("                                </li>");
document.writeln("                            </ul>");
document.writeln("                        </div>");
document.writeln("                    </li>");
document.writeln("                </ul>");
document.writeln("                <!--right list end-->");
document.writeln("            </div>");
document.writeln("        </div>");
document.writeln("        <!--header top end-->");
document.writeln("        <!--header middle-->");
document.writeln("        <div class=\'header_center\'>");
document.writeln("            <h1 class=\'logo\'><a href=\'\' id=\'home\' title=\'聚美优品\'");
document.writeln("                    style=\'background:url(http://p0.jmstatic.com/templates/jumei/images/logo_new_v1.jpg) no-repeat top left;\'>化妆品品牌排行榜大全网站聚美优品</a>");
document.writeln("            </h1>");
document.writeln("            <!-- 活动、节日入口广告位 -->");
document.writeln("            <!-- 活动、节日入口广告位 end -->");
document.writeln("            <div class=\'header_searchbox header_out_searchbox\'>");
document.writeln("                <form action=\'http://search.jumei.com\' method=\'get\' pos=\'top\'");
document.writeln("                    onsubmit=\'return mall_search_validate(this)\'>");
document.writeln("                    <input name=\'filter\' type=\'hidden\' value=\'0-11-1\'>");
document.writeln("                    <input name=\'search\' type=\'text\' class=\'header_search_input\' id=\'header_search_input\' default_val=\'\'");
document.writeln("                        autocomplete=\'off\' x-webkit-speech=\'\' x-webkit-grammar=\'builtin:search\' lang=\'zh\'>");
document.writeln("                    <input name=\'from\' type=\'hidden\'>");
document.writeln("                    <input name=\'cat\' type=\'hidden\'>");
document.writeln("                    <button type=\'submit\' class=\'header_search_btn\'>搜索</button>");
document.writeln("                </form>");
document.writeln("                <div class=\'search_result_pop_a\' id=\'top_out_search_pop_div\'></div>");
document.writeln("");
document.writeln("                <ul class=\'hot_word\'>");
document.writeln("                    <li><a href=\'\' target=\'_blank\'>保湿</a><s class=\'line\'></s></li>");
document.writeln("                    <li><a target=\'_blank\' href=\'\'>面膜</a><s class=\'line\'></s></li>");
document.writeln("                    <li><a target=\'_blank\' href=\'\'>洗面奶</a><s class=\'line\'></s></li>");
document.writeln("                    <li><a target=\'_blank\' href=\'\'>补水</a><s class=\'line\'></s></li>");
document.writeln("                    <li><a target=\'_blank\' href=\'\'>香水</a><s class=\'line\'></s></li>");
document.writeln("                    <li><a target=\'_blank\' href=\'\'>眼霜</a><s class=\'line\'></s></li>");
document.writeln("                    <li><a target=\'_blank\' href=\'\'>口红</a><s class=\'line\'></s></li>");
document.writeln("                    <li><a target=\'_blank\' href=\'\'>护肤套装</a><s class=\'line\'></s></li>");
document.writeln("                    <li><a target=\'_blank\' href=\'\'>BB霜</a>");
document.writeln("                    </li>");
document.writeln("                </ul>");
document.writeln("            </div>");
document.writeln("");
document.writeln("            <div id=\'cart_box\' class=\'cart_box\'>");
document.writeln("                <a id=\'cart\' class=\'cart_link\' href=\'\' rel=\'nofollow\'>");
document.writeln("                    <img src=\'http://p0.jmstatic.com/assets/cart.gif\' width=\'28\' height=\'28\' class=\'cart_gif\'>");
document.writeln("                    <span class=\'text\'>去购物车结算</span>");
document.writeln("                    <span class=\'num\' style=\'display: none;\'></span>");
document.writeln("                    <s class=\'icon_arrow_right\'></s>");
document.writeln("                </a>");
document.writeln("");
document.writeln("                <div class=\'cart_content\' id=\'cart_content\'>");
document.writeln("                    <i class=\'cart-icons\'></i>");
document.writeln("                    <div class=\'cart_content_zero\'>购物车中还没有商品，<br>快去挑选心爱的商品吧！</div>");
document.writeln("                    <div class=\'cart_content_all\'>");
document.writeln("                        <div class=\'cart_left_time\'>已超过购物车商品保留时间，请尽快结算。</div>");
document.writeln("                        <div class=\'cart_content_center\'></div>");
document.writeln("                        <div class=\'con_all\'>");
document.writeln("                            <div class=\'price_whole\'><span>共<span class=\'num_all\'></span>件商品</span></div>");
document.writeln("                            <div><span class=\'price_gongji\'>共计<em>￥</em><span class=\'total_price\'>69</span></span><a");
document.writeln("                                    href=\'\' class=\'cart_btn\' rel=\'nofollow\'>去购物车结算</a></div>");
document.writeln("                        </div>");
document.writeln("                    </div>");
document.writeln("                </div>");
document.writeln("            </div>");
document.writeln("        </div>");
document.writeln("        <!--header middle end-->");
document.writeln("        <!--header bottom-->");
document.writeln("        <div class=\'header_bottom\'>");
document.writeln("            <div class=\'channel_nav_box\'>");
document.writeln("                <div class=\'channel_nav_list_wrap\'>");
document.writeln("");
document.writeln("                    <ul class=\'channel_nav_list\'>");
document.writeln("                        <li><a href=\'\' class=\'home\'>首页</a></li>");
document.writeln("                        <li class=\'haitao_li\'><a href=\'\'>极速免税店</a></li>");
document.writeln("                        <li class=\'\'><a href=\'\'>母婴特卖</a></li>");
document.writeln("                        <li class=\'current\'><a href=\'\'>美妆商城<b></b></a>");
document.writeln("                            <div class=\'header_pop_subAtc box-shadow\' id=\'header_pop_subAct\' style=\'display: none;\'>");
document.writeln("                                    <div class=\'mz_imglist\'>");
document.writeln("                                        <a target=\'_blank\' href=\'\'><img");
document.writeln("                                                src=\'http://p0.jmstatic.com/banner/3481/30573_254_135_003-web.jpg\'></a>");
document.writeln("                                        <a target=\'_blank\' href=\'\'><img");
document.writeln("                                                src=\'http://p0.jmstatic.com/banner/3481/30573_254_135_005-web.jpg\'></a>");
document.writeln("                                    </div>");
document.writeln("                                    <div class=\'mz_inner clearfix\'>");
document.writeln("                                        <dl style=\'border-left:none\'>");
document.writeln("                                            <dt class=\'item_int png\'><a> 国际大牌</a></dt>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>兰蔻</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>娇韵诗</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>伊丽莎白雅顿</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>雅诗兰黛</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>欧莱雅</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>兰芝</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>倩碧</a></dd>");
document.writeln("            ");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>雅漾</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>菲诗小铺</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>悦诗风吟</a></dd>");
document.writeln("            ");
document.writeln("                                        </dl>");
document.writeln("                                        <dl>");
document.writeln("                                            <dt class=\'item_hufu png\'><a href=\'\' target=\'_blank\'> 护肤</a></dt>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>洁面</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>爽肤水</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>精华</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>乳液</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>面霜</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>眼霜</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>面膜</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>护肤套装</a></dd>");
document.writeln("                                        </dl>");
document.writeln("                                        <dl>");
document.writeln("                                            <dt class=\'item_caizhuang png\'><a href=\'\' target=\'_blank\'>彩妆</a></dt>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>卸妆</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>BB霜</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>粉底液</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>粉饼</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>眼影</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>眼线笔</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>睫毛膏</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>眉笔</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>口红</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>腮红</a></dd>");
document.writeln("                                        </dl>");
document.writeln("                                        <dl style=\'border-bottom:none;border-left:none\'>");
document.writeln("                                            <dt class=\'item_xiangfen png\'><a href=\'\' target=\'_blank\'>香氛</a></dt>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>女士香水</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>男士香水</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>中性香水</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>Q版香水</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>香水套装</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>精油</a></dd>");
document.writeln("                                        </dl>");
document.writeln("                                        <dl style=\'border-bottom:none\'>");
document.writeln("                                            <dt class=\'item_nanshi png\'><a href=\'\' target=\'_blank\'>男士专区</a></dt>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>洁面</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>爽肤水</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>面霜</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>精华</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>护肤套装</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>洗发</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>沐浴</a></dd>");
document.writeln("                                        </dl>");
document.writeln("                                        <dl style=\'border-bottom:none\'>");
document.writeln("                                            <dt class=\'item_hot png\'><a>热门搜索</a></dt>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>面膜贴</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>洗面奶</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>唇膏</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>去黑头</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>祛斑</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>隔离</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>祛痘</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>去角质</a></dd>");
document.writeln("                                            <dd><a href=\'\' target=\'_blank\'>指甲油</a></dd>");
document.writeln("                                        </dl>");
document.writeln("                                    </div>");
document.writeln("                                </div>");
document.writeln("                        </li>");
document.writeln("                        <li class=\'\'><a href=\'\'>国际轻奢</a></li>");
document.writeln("                        <li><a target=\'_blank\' href=\'\'>服装运动</a></li>");
document.writeln("                        <li><a target=\'_blank\' href=\'\'>鞋包配饰</a></li>");
document.writeln("                    </ul>");
document.writeln("                    ");
document.writeln("                    <!-- <div class=\'header_pop_subAtc box-shadow\' id=\'header_pop_subAct\'></div> -->");
document.writeln("                    <!--导航icon 动画-->");
document.writeln("                    <ul id=\'icon_wrap\' class=\'icon_Wrap\'>");
document.writeln("                        <li>");
document.writeln("                            <div class=\'divlist divlist01\'>");
document.writeln("                                <a href=\'\'><span class=\'\'></span> <b>品牌防伪码</b></a></div>");
document.writeln("                        </li>");
document.writeln("                        <li>");
document.writeln("                            <div class=\'divlist divlist03\'>");
document.writeln("                                <a href=\'\'><span class=\'by\'></span> <b>美妆满2件或299包邮</b></a></div>");
document.writeln("                        </li>");
document.writeln("                    </ul>");
document.writeln("                    <!--导航icon 动画 end-->");
document.writeln("                </div>");
document.writeln("            </div>");
document.writeln("        </div>");
document.writeln("        <!--header bottom end-->");
document.writeln("    </div>");
document.writeln("</body>");
document.writeln("");
document.writeln("</html>");