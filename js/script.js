$(function(){
    $('.btn').click(function(){ //검색버튼 눌렀을 때
        if($(window).width() > 640){
            $(this).css('display','none');
            $('.close').css('display','block');
            $('.search_wrap').show();
            $('#gnb').hide();
        }else{
            $(this).css('display','none');
            $('.close').css('display','block');
            $('.search_wrap').show();
        }
    });
    $('.close').click(function(){ //닫기버튼 눌렀을 때
        if($(window).width() > 640){
            $(this).css('display','none');
            $('.btn').css('display','block');
            $('.search_wrap').hide();
            $('#gnb').show();
        }else{
            $(this).css('display','none');
            $('.btn').css('display','block');
            $('.search_wrap').hide();
            $('#mgnb').show();
        }
    });

    //데스크탑, 테블릿 메뉴
    var gnbA = $('.main>a'); //메인메뉴
    gnbA.on('mouseenter focus',function(){ //focus(마우스가 없는 상태일 때 tab키를 눌러 메뉴를 펼칠 수 있음, a태그가 있는 박스(페이지를 넘길 수 있는)만 가능)
        $('#gnb>ul>li>.sub').hide(); //서브메뉴 감추기
        $(this).next().slideDown(400); //보이기
    });
    $('#gnb').mouseleave(function(){
        $('.sub').hide();
    });
});