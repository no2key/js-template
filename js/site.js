//页面js
//余果 http://yuguo.us
//2012.11.15

//初始加载的时候载入列表
var source = $("#email-li-template").html();
var template = Handlebars.compile(source);
var html = '';

for(var i = 0; i < userList.length; i++){
    userList[i].id = i;
    html += template(userList[i]);
}

$('#user_list').append(html);

//列表绑定hover事件
$('#user_list li').live('hover',function(e){

        var user_id = $(this).data("id");

        var source_pop = $("#card-pop-template").html();
        var template_pop = Handlebars.compile(source_pop);
        var html_pop = template_pop(userList[user_id]);

        $('#user_list .card_pop').remove();
        $(html_pop).appendTo(this).hide().fadeIn();

}).live('mouseleave',function(){
    $('#user_list .card_pop').remove();
});

//选择Email地址还是号码
$('#select_contact_type').change(function(){
    var select_value = $(this).find('option:selected')[0].value;
    var select_source;

    if(select_value == 'phone'){
        select_source = $("#phone-li-template").html();
    }else if(select_value == 'email'){
        select_source = $("#email-li-template").html();
    }

    var template = Handlebars.compile(select_source);
    var html = '';

    for(var i = 0; i < userList.length; i++){
        userList[i].id = i;
        html += template(userList[i]);
    }
    $('#user_list').html(html);
});