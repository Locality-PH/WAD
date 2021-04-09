$(function() {
    $("#test").load("inc/nav.html");

});

$('home').click(function() {
    $(this).parent().addClass('active').siblings().removeClass('active')
})