//Check off todos by clicking li
var x=$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
    
});
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();//So that fadeout effect is done otherwise remove is done first
    });
    event.stopPropagation();
});
//Click on X to delete chore


$("input[type='text']").keypress(function(event){
    if(event.which===13){
        var todotext=$(this).val();
        $(this).val("");
        //adding to ul via append()
        $("ul").append("<li><span class='remove'><i class='fas fa-trash'></i></span> "+todotext+"</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})