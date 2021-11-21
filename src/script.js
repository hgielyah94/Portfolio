//form

function SubmitForm(){
    let firstname = document.querySelector(".firstname")
    let emailaddress = document.querySelector(".emailaddress")

    if (emailaddress.value) && (firstname.value) {
        alert("Thank you! I'll be in touch soon!")
    }
else {  
   alert("Please enter your details.")
    }
}
