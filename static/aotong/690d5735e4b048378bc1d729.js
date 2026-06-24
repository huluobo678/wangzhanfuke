
      $(window).scroll(function (a) {

        if ($(this).scrollTop() > 135) {
            $(".nav").addClass("headFix")
        } else {
            $(".nav").removeClass("headFix")
        }
    }).scroll();
  

      $(".banner").slide({
          mainCell:".bd ul",
          titCell:".hd ul",
          autoPage:"<li></li>",
          effect:"leftLoop",
          switchLoad:"_src",
          defaultIndex:0,
          interTime:2500,
          trigger:"mouseover",
          mouseOverStop:true,
          autoPlay:true,
          resize:true
      });
  
    

   var mp400="http://mpv.videocc.net/2b8fd4c754/d/2b8fd4c754d1dd3b66331467daa5733d_1.mp4";
 
  
  
                    $('#parentIframe').on('click', function(){
                   layer.open({
                     type: 1,
                     title: false,
                     area: ['960px', '540px'],
                     shade: 0.8,
                     closeBtn: 1,
                     shadeClose: true,
                     content: '<video width="100%" height="100%"  controls="controls" autobuffer="autobuffer"  autoplay="autoplay" loop="loop">' +
                   '<source src='+mp400+' type="video/mp4"></source></video>'
                   });
                   });
                   
                
 
  
  
                 
  

           $('.ys').slide({
           titCell: '.ys_nr ul li',
           mainCell: '.ys_nr',
            endFun:function(i,c){
                   $(".ys_nr ul li").hover(function(){
                       $(".ys_nr .ys_n2").addClass("wow animated fadeInUp1");
                     // $(this).next().slideToggle();
                     // $(this).parent().siblings().children("p").slideUp();
                   });
           }
           });
           
    

    $(function () {
      var Swiper4 = new Swiper('.sl_con', {
        slidesPerView:1,
        // spaceBetween: 1+"%",
        loop:true,
        // autoplay:true,
        navigation: {
                    nextEl: '.snext',
                    prevEl: '.sprev',
                  },
           
        });

        
    })
  

   
   
  

      
      $(function(){
        
        $(".case_t li").mouseover(function(){
          $(this).addClass("cur").siblings().removeClass("cur");
        });
  
      });

    $(function () {

      
        var mySwiper5 = new Swiper('.case_con',{
          slidesPerView:3,
        
          loop:true,
         autoplay:true,
          navigation: {
                      nextEl: '.next5',
                      prevEl: '.prev5',
                    },
                  
          });
          
      })
    

  var wow = new WOW({
      offset: 100
  });
  if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
      wow.init();
  }
  


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
    
