$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
    // this : ref to the span
    // we use a function here to not remove the li without the fadeOut  
    $(this).parent().fadeOut(500,function(){
        //this : refers to the li
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var TodoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + TodoText + " </li>");
    };
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});