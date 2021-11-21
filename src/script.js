function submitForm() {
  const name = document.querySelector('#firstname');
  const email = document.querySelector('#emailaddress');

  if (name.value === '' && email.value.length > 0){
    alert("Please enter your name.");
  } else if (email.value === '' && name.value.length > 0){
    alert("Please enter your email address.");
  } else if (name.value === '' && email.value === '') {
    alert("Please enter your details.")
  } else {
      alert("Thank you! I'll be in touch soon!")
  }
}