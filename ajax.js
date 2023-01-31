$(document).ready(function() {

    $("#form").submit(function(e) {
      e.preventDefault();
      var name = $("#name").val();
      var email = $("#email").val();
  
      $.ajax({
        type: "POST",
        url: "save-data.php",
        data: { name: name, email: email }
  
      }).done(function( msg ) {
  
        if (msg == "success") {

  //reset text feilds
          $("#form")[0].reset(); 
  //sweet alert start
          Swal.fire({
              icon: 'success',
              title: 'Successfully Added Your Data',
              showConfirmButton: true,
              // timer: 1500   
              
          });
  
        } else {
            $("#form")[0].reset(); 
          Swal.fire({
              icon: 'error',
              title: 'Ops...',
              text: 'Something went wrong',
              showConfirmButton: true,
              // timer: 1500
          });
        }
        // End sweet alert
      });
    });
  });