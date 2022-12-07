'use strict'






class TextElement {
    constructor(placeholder) {
        this.placeholder = placeholder
    }
    createTextInput() {
        this.inputText = document.createElement(`input`)
        this.inputText.type = 'text'
        this.inputText.placeholder = `${this.placeholder}`
        this.myFormm.appendChild(this.inputText)

    }
}

class CheckboxElemen{
    constructor(checkedValue){
        this.checkedValue = checkedValue
    }

    createCheckedInput(){
        this.inputCheckBox = document.createElement(`input`)
        this.inputCheckBox.type = 'ckeckbox'
        this.inputCheckBox.value = `${this.checkedValue}`
        this.myFormm.appendChild(this.inputCheckBox)
    }
}

class FormElemen extends TextElement  {
    constructor({ elemsForm, placeholder }) {
        super(placeholder)
        this.elemsForm = elemsForm
    }

    createForm() {
        this.myFormm = document.createElement('form')
        const formElems = document.querySelector(this.elemsForm)
        formElems.appendChild(this.myFormm)
    }
}





const newForm = new FormElemen({
    elemsForm: '.js--form-inner',
    placeholder: 'введите текст',
})
newForm.createForm()
newForm.createTextInput()