$(document).ready(function() {
  let $creditCardNumber = $('#credit-card-number textarea');
  console.log($creditCardNumber);
  // activando form option de materialize
  $('select').material_select();

  // algoritmo de Luhn
  let verifyCreditCardNum = () => { };

  // let valor =
  $creditCardNumber.on('keyup', function(e) {
    debugger
    // console.log($creditCardNumber.val());
    let creditCardVal = $creditCardNumber.val();
    // console.log(creditCardVal);
    if(typeof (creditCardVal) == typeof (0)){
      console.log('no string');
    } else {
      console.log('string');
    };
  });
});
