//모바일 메뉴
$(function(){
    // $('#mgnb').mouseleave(function(){
    //     $('.sub').hide();
    // });
    $(".menu").click(function(){                
        $("#mgnb").stop().animate({left:0},200,"swing");                  
    });
    $("#mgnb ul .home").click(function(){                
        $("#mgnb").stop().animate({left:-9999},200,"swing");
    });
    $('#mgnb .main2').click(function(){
        $(this).next().slideToggle();
        $(this).next().siblings('.sub2').slideUp(); //메인메뉴를 펼친 후 접지 않고 다음 메인메뉴를 펼쳤을 때 원래 펼쳐져있던 메인메뉴는 접힘
    });
});

//모바일 메뉴와 데스크탑 메뉴를 따로 만들어야 하는 경우 모든 id, class 이름들을 다 조금씩 다르게 만들어주어야 인식됨