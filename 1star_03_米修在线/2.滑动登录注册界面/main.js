
let $signUpBtn   = $("#signUp");
let $signInBtn   = $("#signIn");
let $container   = $("#container");

$signUpBtn.on("click",()=>$container.addClass("right-panel-active"));
$signInBtn.on("click",()=>$container.removeClass("right-panel-active"));
