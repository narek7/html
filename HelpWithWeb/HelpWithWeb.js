
var hiddenDiv= document.getElementById("showAnswer");
    hiddenDiv.style.display = "none";
    var answer = document.getElementById("answer");

    var showAnswer=function(){
        var password = document.getElementById("password").value;
        answer.innerHTML = password;
        document.getElementById("questionDiv").style.display = "none";
        hiddenDiv.style.display="block";
    };	