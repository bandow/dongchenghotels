;$(function () {
    showExpansion();
    showMcheckin();
    historyArrAction();
})
function showExpansion() {
    $('#keyWord').click(function (event) {
        initMcheckin();
        $("#McheckinCity").addClass('hide');
        $('#keyWordExpansion').removeClass('hide');
        event.stopPropagation();
    })
    $(document).on("click", function(){
        $("#keyWordExpansion").addClass('hide');
    });
}
$("#keyWordExpansion").click(function () {
    $("#McheckinCity").addClass('hide');
    event.stopPropagation();
})
//点击内容不隐藏处理
$("#McheckinCity").click(function () {
    $("#keyWordExpansion").addClass('hide');//关键字栏目隐藏可删
    event.stopPropagation();
});
function showMcheckin() {
    $('#cityCheck').click(function (event) {
        $('#McheckinCity').removeClass('hide');
        $('#keyWordExpansion').addClass('hide');
        initMcheckin();
        event.stopPropagation();
    })
    $(document).on("click", function(){
        $("#McheckinCity").addClass('hide');
        $("#McheckinCheck").addClass('hide');
        $("#McheckinNone").addClass('hide');
    });
}
//输入查询处理
function searchCity() {
    $("#McheckinCity").addClass('hide');
    $("#McheckinCheck").removeClass('hide');
    var searchVal=$("#cityCheck").val();//输入的值
    searchVal= searchVal.replace(/ /g,'');//空格处理
    // searchVal= searchVal.replace(/[^\u4E00-\u9FA5]/g,'');//拼音处理
    searchVal= $.trim(searchVal);
    console.log(searchVal);
    if (searchVal.length==0){
        initMcheckin();
    }else if(searchVal.length<=3){
        var val='"'+searchVal+'"';
        $("#resultsMessage").text(val);
        $("#McheckinNone").removeClass('hide');
        $("#McheckinCheck").addClass('hide');
    }else{
        $("#McheckinNone").addClass('hide');
        $("#McheckinCheck").removeClass('hide');
    }
}
function initMcheckin() {
    // $("#McheckinCity").addClass('hide');
    $("#McheckinCheck").addClass('hide');
    $("#McheckinNone").addClass('hide');
}
//点击ABCD那些排序时的城市栏目的显示隐藏
$(".link").click(function () {
    $(".link").find(".ranks").removeClass('active');
    $(this).find(".ranks").addClass('active');
    if($(this).data("rankid")=='hotCity'){
        $(".tabcontent").addClass('hide');
        $("#hotTabcontent").removeClass('hide');
    }else{
        $(".tabcontent").addClass('hide');
        var rankid=$(this).data("rankid");
        $("#"+rankid).removeClass('hide');
    }
    event.stopPropagation();
})
//热门城市栏目的子元素点击高亮然后将数据给到查询input
$("#hotTabcontent").click(function (e) {
    var cityName = $(e.target).data('city-name');
    if(!cityName)
        return;
    console.log(cityName);
    $("#hotTabcontent").find(".active").removeClass('active');
    $("#historyList").find(".active").removeClass('active');
    $("#cityCheck").val(cityName);
    $("#cityCheck").attr('value',cityName);
    $(e.target).addClass('active');
})
//历史城市栏目的子元素点击高亮然后将数据给到查询input
$("#historyList").click(function (e) {
    var cityName = $(e.target).data('city-name');
    if(!cityName)
        return;
    $("#hotTabcontent").find(".active").removeClass('active');
    $("#historyList").find(".active").removeClass('active');
    console.log(cityName);
    $("#cityCheck").val(cityName);
    $("#cityCheck").attr('value',cityName);
    $(e.target).addClass('active');
})
//清除历史城市,知道数据结构后，后期需要增加本地缓存操作
$("#cleadHistory").click(function () {
    $("#historyList").find('li').remove();
    $(this).addClass('hide');
    event.stopPropagation();
})
//简单的模拟，只做了去重，暂缺少排序等处理
function historyArrAction() {
    var Arr=['广州','深圳','上海','长沙','南宁','北京','武汉','广州','广州','深圳','上海','广州'];
    $.unique(Arr);
    if(Arr.length>=8){
        Arr.splice(1,1);
        historyArrAssembly(Arr)
    }else{
        historyArrAssembly(Arr)
    }
}

function historyArrAssembly(Arr) {
    $.each(Arr,function(n,value){
        var innerContent="<li ><a href='javascript:;' data-cityid="+301+" data-city-id="+301+" data-city-name="+value+">"+value+"</a></li>";
        $('#historyList').append(innerContent);
    })
}
