function setBillingAddress(){
  if ($("#homepostalcheck").is(":checked")) {
    $('#billingaddress').val($('#homeaddress').val());
    $('#billingaddress').attr('disabled', 'disabled');
  } else {
    $('#billingaddress').removeAttr('disabled');
  }
}

$('#homepostalcheck').click(function(){
  setBillingAddress();
})