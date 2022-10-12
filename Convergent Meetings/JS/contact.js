$(document).ready(function(){
    $(".error-messages").hide();
    $("#fullnames_err").hide();
    $("#email_err").hide();
    $("#subject_err").hide();
    $("#message_err").hide();
    $(".spinner-border").hide();
    //Inputs 
    var fullnames = $("#fullnames");
    var email = $("#email");
    var subject = $("#subject");
    var message = $("#message");

    $("#contact-btn").click(function(e){
        e.preventDefault();
   
        if(fullnames.val() == ""){
            swal("Full names is required");
        }
        else if(email.val() == ""){
            swal("Email address is required");
        }
        else if(!emailValidation(email.val())){
            swal("Please eneter a valid email address");
        }
        else if(subject.val() == ""){
            swal("Subject is required");
        }
        else if(message.val() == ""){
            swal("Message is required");
        }
        else{
            $.ajax({
                url: "../contains/dummy.php",
                method: "post",
                data: $("#contact-form").serialize(),
                beforeSend:function(){
                    $(".spinner-border").show();
                    $(".text").hide();
                },
                success: function (response) {
                  $(".spinner-border").hide();
                  $(".text").show();
                  swal(response);
                },
            });
        }
    });

     //Email validations function
    function emailValidation($email) {
        var key = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return key.test($email);
    }

});