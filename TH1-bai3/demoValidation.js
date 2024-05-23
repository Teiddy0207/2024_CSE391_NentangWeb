$().ready(function() {
    $.validator.addMethod("validatePassword", function (value, element) {
        return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/i.test(value);
    }, "Hãy nhập password từ 8 đến 16 ký tự bao gồm chữ hoa, chữ thường và ít nhất một chữ số");
   $("#demoForm").validate({
  
   
    rules: {
           "user": {
               required: true,
               email:true,
               maxlength: 15
           },
           
       },
       messages: {
           "user": {
               required: "Bắt buộc nhập username",
               email: "Vui lòng nhập email đúng định dạng.",
               maxlength: "Hãy nhập tối đa 15 ký tự"
           },
        }
    //      
   });
   
});

	