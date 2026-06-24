
      $(window).scroll(function (a) {

        if ($(this).scrollTop() > 135) {
            $(".nav").addClass("headFix")
        } else {
            $(".nav").removeClass("headFix")
        }
    }).scroll();
  

        $(function(){
            var image = new Image();
            image.onload = function() {
                var imgWidth=$('.ty-banner-1 img').width();
                var imgHeight=$('.ty-banner-1 img').height();
               var length = imgWidth/2;
               if(length>0){
                    $('.ty-banner-1 img').attr({'style':'margin-left:'+ (-length) + 'px;position:absolute'});
                    $('.ty-banner-1').attr('style','height:'+ imgHeight + 'px');
               }
               $('.ty-banner-1 img').addClass('show');
            }
            image.src = $('.ty-banner-1 img').attr('src');
           
        });
    

        var key = document.getElementById("key");

        function searchInfo() {
            var base = $('head').data('base');
            if (key.value) {
                location.href = base + "search.php?key=" + key.value;
            } else {
                alert('请输入您要搜索的关键词！');
            }
        }
        key.addEventListener('keypress', function(event) {
            var keycode = event.keycode || event.which;
            if (keycode == "13") {
                searchInfo();
            }
        });

        function searchLink(el) {
            var href = $(el).attr("href");
            location.href = href ? href : "/search.php?key=" + $(el).html();
        }
    

        //产品详细页产品预览js
        function preview(img) {
            $("#blkPreview .jqzoom img").attr("src", $(img).attr("bimg"));
            $("#blkPreview .jqzoom img").attr("jqimg", $(img).attr("bimg"));
            $('.t1-items-swiper p').removeClass('t1-current');
            $(img).parent("p").addClass("t1-current");
        }
        //图片放大镜效果
        $(function() {
            var myurl = $("#blkPreview .jqzoom img").attr("src");
            getImageWidth(myurl, function(w, h) {
                var boxwidth = 100 * h / w;
                // $(".t1-spec-preview,.zoomdiv").height(boxwidth+"px");
                $(".jqzoom").jqueryzoom({
                    xzoom: 371,
                    yzoom: 371,
                    position: "right"
                });
                //  $(".t1-spec-preview,.zoomdiv").height(boxwidth+"px");
            })
        });

        function getImageWidth(url, callback) {
            var img = new Image();
            img.src = url;
            if (img.complete) {
                callback(img.width, img.height);
            } else {
                img.onload = function() {
                    callback(img.width, img.height);
                }
            }
        }
        $(function(){
        //图片预览小图移动效果,页面加载时触发
        $(".t1-spec-scroll").slide({
            mainCell: ".t1-items-swiper",
            vis: 3,
            scroll: 1,
            autoPage: true,
            effect: "left",
            prevCell: '.t1-prev',
            nextCell: '.t1-next'
        });
            
        })
    

        $(function() {
            $('.p14-prodcontent-1-nav li').on('click', function() {
                var indexsi = $(this).index();
                $(".p14-prodcontent-1-text").eq(indexsi).show().siblings().hide();
                if (!$(this).hasClass("cur")) {
                    $(this).addClass("cur").siblings("li").removeClass("cur");
                }
            });
        });
    

    $(function() {
        navClick('.p103-fdh-1-nav-one h3', 'dl');
        navClick('.p103-fdh-1-nav-one dt', 'dd');

        function navClick(clickDom, showDom) {
            $(clickDom).on('click', function() {
                if ($(this).hasClass('sidenavcur')) {
                    $(this).next(showDom).hide();
                    $(this).removeClass('sidenavcur');
                } else {
                    $(this).addClass('sidenavcur');
                    $(this).next(showDom).show();
                    $(this).addClass('sidenavcur');
                }
            });
        }

        //副导航焦点定位
        var leftNavFocus1 = {
            init: function() {
                if ($(window).width() < 768) {
                    return false;
                }
                var elnav = $("[navcrumbs]").find("a");
                var elbody = $("[navvicefocus1]").find("a");
                var index = 0;
                if (elnav && elbody) {
                    for (var n = (elnav.length - 1); n >= 0; n--) {
                        $.each(elbody, function(i, item) {
                            if (elnav.eq(n).attr("href") === $(item).attr("href")) {
                                $(item).parent().addClass("sidenavcur");
                                $(item).parent().next().show();
                            }
                        });
                    }
                }
            }
        };
        leftNavFocus1.init();

    });


        $(function(){
            $(".p1-info-3").slide({mainCell:".p1-info-3-list ul",autoPlay:true,effect:"topMarquee",vis:5,interTime:80,trigger:"click"});
        })
    

        $(function() {
            var time;
            //var winHeight = top.window.document.body.clientHeight || $(window.parent).height();
            $('.client-2').css({
                'marginTop': -($('.client-2').height() / 2)
            });
            //返回顶部
            $(window).scroll(function() {
                var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                var eltop = $("#client-2").find(".my-kefu-ftop");
                if (scrollTop > 0) {
                    eltop.show();
                } else {
                    eltop.hide();
                }
            });
            $("#client-2").find(".my-kefu-ftop").click(function() {
                var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                if (scrollTop > 0) {
                    $("html,body").animate({
                        scrollTop: 0
                    }, "slow");
                }
            });
        });
    
