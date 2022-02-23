$(function(){
	
    let b = $("#menu_linck");
    let flag = false;
    b.css("display", "none")


    $(".icon-align-justify").click(function(e){
        e.preventDefault();

        if(!flag){
            $("#menu_linck").slideDown(5000);
            b.css("display", "flex")
        } else {
            $("#menu_linck").slideUp(5000);
            b.css("display", "flex")
        }
        flag = !flag
    });
});
