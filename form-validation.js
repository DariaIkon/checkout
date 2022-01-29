// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // // Fetch all the forms we want to apply custom Bootstrap validation styles to
  // var forms = document.querySelectorAll('.needs-validation')

  // // Loop over them and prevent submission
  // Array.prototype.slice.call(forms)
  //   .forEach(function (form) {
  //     form.addEventListener('submit', function (event) {
  //       if (!form.checkValidity()) {
  //         event.preventDefault()
  //         event.stopPropagation()
  //       }

  //       form.classList.add('was-validated')
  //     }, false)
  //   })

  $('#reedem').click(function () {
    let url = 'https://itlogia.ru/test/promo-code?name=' + $('#promo').val();
    let http = new XMLHttpRequest();
    http.open(method = 'GET', url);
    http.send();

    http.onreadystatechange = function () { 
      if (http.readyState === 4 && http.status === 200) {
        console.log(http.responseText);
      }
    }
  });
})();
