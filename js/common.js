//区域pop
$(function($) {
    //弹出选择框
    $("#addrout").hover(function() {
        $(this).stop().animate({
            opacity: '0.7'
        },
        500);
    },
    function() {
        $(this).stop().animate({
            opacity: '1'
        },
        500);
    }).on('click',
    function() {
        $("body").append("<div id='mask'></div>");
        $("#mask").addClass("mask").fadeIn("slow");
        $(".AddrBox").fadeIn("slow");
    });
    //按钮的透明度
    $("#addrsubmit").hover(function() {
        $(this).stop().animate({
            opacity: '1'
        },
        600);
    },
    function() {
        $(this).stop().animate({
            opacity: '0.8'
        },
        1000);
    });
    //文本框不允许为空---按钮触发//文本框不允许为空---单个文本触发
    //关闭
    $(".addrclose_btn").hover(function() {
        $(this).css({
            color: '#FFF'
        })
    },
    function() {
        $(this).css({
            color: '#CCC'
        })
    }).on('click',
    function() {
        $(".AddrBox").fadeOut("fast");
        $("#mask").fadeOut("slow");
    });
});
//登录pop
$(function($) {
    //弹出登录
    $("#usern").hover(function() {
        $(this).stop().animate({
            opacity: '0.7'
        },
        500);
    },
    function() {
        $(this).stop().animate({
            opacity: '1'
        },
        500);
    }).on('click',
    function() {
        $("body").append("<div id='mask'></div>");
        $("#mask").addClass("mask").fadeIn("slow");
        $(".login_Tabs").fadeIn("slow");
    });
    //文本框不允许为空---按钮触发//文本框不允许为空---单个文本触发
    //关闭
    $(".loginclose_btn").hover(function() {
        $(this).css({
            color: '#FFF'
        })
    },
    function() {
        $(this).css({
            color: '#CCC'
        })
    }).on('click',
    function() {
        $(".login_Tabs").fadeOut("fast");
        $("#mask").fadeOut("slow");
    });
});
//*********************************************************************************************
//tab标签切换
$(function(){
    function tabs(tabTit,on,tabCon){
	$(tabCon).each(function(){
	  $(this).children().eq(0).show();
	  });
	$(tabTit).each(function(){
	  $(this).children().eq(0).addClass(on);
	  });
    $(tabTit).children().click(function(){
      $(this).addClass(on).siblings().removeClass(on);
      var index = $(tabTit).children().index(this);
      $(tabCon).children().eq(index).show().siblings().hide();
    });
     }
  tabs(".footer_bar_flex","on",".investment_con");
 })
//*********************************************************************************************
//store筛选
$(document).ready(function(){
	$('.smenu div').click(function(){
		$('.smenu').children('div').removeClass('on');
		$(this).addClass('on');
		thisItem= $(this).attr('rel');
		if(thisItem != "all"){
			$('.sitem div[rel='+thisItem+']').stop().animate({ 'opacity' : 1,width : '318px',marginLeft: '2px',marginTop:'2px'},200);
			$('.sitem div[rel!='+thisItem+']').stop().animate({ 'opacity' : 0,width : 0,marginLeft: '0px',marginTop:'0px'},200);
		}else{
			$('.sitem div').stop().animate({'opacity' : 1,width : '318px',marginLeft: '2px',marginTop:'2px'},200);
		};
	});
});
//*********************************************************************************************
//goods筛选
	$(function () {
		var filterList = {
			init: function () {// MixItUp plugin
				$('#portfoliolist').mixitup({targetSelector: '.portfolio',filterSelector: '.filter',effects: ['fade'],easing: 'snap',onMixEnd: filterList.hoverEffect()
				});				
			},
			hoverEffect: function () {
				$('#portfoliolist .portfolio').hover(
					function () {
						$(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
						$(this).find('img').stop().animate({top: 0}, 500, 'easeOutQuad');},
					function () {
						$(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
						$(this).find('img').stop().animate({top: 0}, 500, 'easeOutQuad');}
			);}};
	filterList.init();
	});	
//*********************************************************************************************
//购物车goods增删改查
$(document).ready(function () {
	//jquery特效制作复选框全选反选取消(无插件)
	// 全选        
	$(".allselect").click(function () {
		
		if($(this).attr("checked")){
			$(".gwc_tb2 input[name=newslist]").each(function () {
				$(this).attr("checked", true);
				// $(this).next().css({ "background-color": "#3366cc", "color": "#ffffff" });
			});
			GetCount();
		
		}
		else
   		{
			$(".gwc_tb2 input[name=newslist]").each(function () {
				if ($(this).attr("checked")) {
					$(this).attr("checked", false);
					//$(this).next().css({ "background-color": "#ffffff", "color": "#000000" });
				} else {
					$(this).attr("checked", true);
					//$(this).next().css({ "background-color": "#3366cc", "color": "#000000" });
				} 
			});
			GetCount();
    
   		}
		
	});

	//反选
	$("#invert").click(function () {
		$(".gwc_tb2 input[name=newslist]").each(function () {
			if ($(this).attr("checked")) {
				$(this).attr("checked", false);
				//$(this).next().css({ "background-color": "#ffffff", "color": "#000000" });
			} else {
				$(this).attr("checked", true);
				//$(this).next().css({ "background-color": "#3366cc", "color": "#000000" });
			} 
		});
		GetCount();
	});

	//取消
	$("#cancel").click(function () {
		$(".gwc_tb2 input[name=newslist]").each(function () {
			$(this).attr("checked", false);
			// $(this).next().css({ "background-color": "#ffffff", "color": "#000000" });
		});
		GetCount();
	});

	// 所有复选(:checkbox)框点击事件
	$(".gwc_tb2 input[name=newslist]").click(function () {
		if ($(this).attr("checked")) {
			//$(this).next().css({ "background-color": "#3366cc", "color": "#ffffff" });
		} else {
			// $(this).next().css({ "background-color": "#ffffff", "color": "#000000" });
		}
		GetCount();
	});

	// 输出
	$(".gwc_tb2 input[name=newslist]").click(function () {
		// $("#total2").html() = GetCount($(this));
		GetCount();
	});
});
function GetCount() {
	var conts = 0;
	var aa = 0;
	$(".gwc_tb2 input[name=newslist]").each(function () {
		if ($(this).attr("checked")) {
			for (var i = 0; i < $(this).length; i++) {
				conts += parseInt($(this).val());
				aa += 1;
			}
		}
	});
	$("#shuliang").text(aa);
	$("#zong1").html((conts).toFixed(2));
	if($("#zong1").text()>0){
	$("#jz1").css("display", "none");
	$("#jz2").css("display", "block");}
	else{
	$("#jz1").css("display", "block");
	$("#jz2").css("display", "none");}
}
	<!---第一个商品加减算总数---->
	$(function () {
		var t = $("#text_box1");
		$("#add1").click(function () {
			t.val(parseInt(t.val()) + 1)
			setTotal(); GetCount();
		})
		$("#min1").click(function () {
			if(t.val()>1){
				t.val(parseInt(t.val()) - 1)
				setTotal(); GetCount();
			}
		})
		function setTotal() {

			$("#total1").html((parseInt(t.val()) * 9).toFixed(2));
			$("#newslist-1").val(parseInt(t.val()) * 9);
		}
		setTotal();
	})
	<!---第二个商品加减算总数---->
	$(function () {
		var t = $("#text_box2");
		$("#add2").click(function () {
			t.val(parseInt(t.val()) + 1)
			setTotal(); GetCount();
		})
		$("#min2").click(function () {
			if(t.val()>1){
				t.val(parseInt(t.val()) - 1)
				setTotal(); GetCount();
			}
		})
		function setTotal() {

			$("#total2").html((parseInt(t.val()) * 8).toFixed(2));
			$("#newslist-2").val(parseInt(t.val()) * 8);
		}
		setTotal();
	})
	<!---结算总数---->
	$(function () {
		$(".quanxun").click(function () {
			setTotal();
			//alert($(lens[0]).text());
		});
		function setTotal() {
			var len = $(".tot");
			var num = 0;
			for (var i = 0; i < len.length; i++) {
				num = parseInt(num) + parseInt($(len[i]).text());

			}
			//alert(len.length);
			$("#zong1").text(parseInt(num).toFixed(2));
			$("#shuliang").text(len.length);
		}
		setTotal();
	})
//*********************************************************************************************