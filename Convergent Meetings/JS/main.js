$(document).ready(function(){
    //password validation
    var uppercase = RegExp("[A-Z]");
    var smallLetters = RegExp("[a-z]");
    var numbers = RegExp("[0-9]");
    var special = RegExp("^[a-zA-Z0-9 ]*$");
    $(".spinner-border").hide();
    $(".error-message").hide();
    var MeetingCode = $("#meeting_code");

    $(".new_meeting").click(function(){
        //$(location).attr('href','meeting.html');
        //Database, Ajax, and PHP are needed for this project
    });

    $("#start-btn").click(function(){
        $(".error-message").hide();
        if(MeetingCode.val() == ""){
            $("#meeting_code").css("border", "1px solid red");
        }
        else if (special.test($("#meeting_code").val()) == false){
            $(".error-message").show();
            $(".error-message").html("Meeting code can not have special characters");
        }
        else{
            $("#meeting_code").css("border", "1px solid gray");
            $(".btn-text").hide();
            $(".spinner-border").show();
            $(".spinner-border").css("padding", "1px");
            $("#start-btn").prop("disabled", false);
        }
    });

    $("#meeting_code").focus(function(){
        $(".error-message").hide();
        if(MeetingCode.val() == ""){
            $("#start-btn").show();
            $("#start-btn").prop("disabled", true);
        }
        else{
            $("#start-btn").show();
            $("#start-btn").prop("disabled", false);
        }
    }).focusout(function(){
        if(MeetingCode.val() == ""){
            $("#start-btn").hide();
        }
        else{
            $("#start-btn").show();
            $("#start-btn").prop("disabled", false);
        }
    });

    
    

});