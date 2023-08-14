$(".modal-open").click(function() {
    $(".modal").addClass("active");
    setTimeout(function() {
        $(".modal").addClass("open");
    },10);
});
$(".btnNo").click(function() {
    $("body").css('display', 'none')
});