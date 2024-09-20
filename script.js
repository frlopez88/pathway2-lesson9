function formValidator(){

    event.preventDefault()

    let name = inputName.value
    let nameValidation=true

    if (name.length >= 3){
        nameValidation = true
        errorName.innerHTML = ""
    }else {
        nameValidation = false
        errorName.innerHTML = "The lenght of the name must be greater than 3"
    }

    let message = inputMessage.value
    let messageValidation = true

    if(message.length >= 10){
        messageValidation = true
        errorMessage.innerHTML = ""
    }else{
        messageValidation = false
        errorMessage.innerHTML = "The length of the message must be greater than 10"
    }


    if (nameValidation === true && messageValidation=== true ){
        messageOutPut.innerHTML = "Form pass validations"


        inputName.value = ""
        inputEmail.value =""
        inputMessage.value = ""

    }else{
        messageOutPut.innerHTML = "Form do not pass validations"
    }



}