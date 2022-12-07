'use strict'

class FormElem {
    constructor(elemsForm) {
        this.elemsForm = elemsForm
    }
    createForm() {
        this.myFormm = document.createElement('form')
        const formElems = document.querySelector(this.elemsForm)
        formElems.appendChild(this.myFormm)
    }
}

class CreateTextElem extends FormElem {
    constructor({ placeholder, elemsForm }) {
        super(elemsForm)
        this.placeholder = placeholder
    }
    createTextInput() {
        this.inputText = document.createElement(`input`)
        this.inputText.type = 'text'
        this.inputText.placeholder = `${this.placeholder}`
        this.myFormm.appendChild(this.inputText)
    }

}

class createCheckBoxElemen extends FormElem {
    constructor({checkedValue,elemsForm}) {
        super(elemsForm)
        this.checkedValue = checkedValue
    }
    createCheckedInput() {
        
        const inputCheckBox = document.createElement('input')
        inputCheckBox.setAttribute('type', 'checkbox')
        inputCheckBox.setAttribute(`${this.checkedValue}`, `${this.checkedValue}`)
        this.myFormm.appendChild(inputCheckBox)
       console.log(inputCheckBox)
       console.log(this.myFormm)
    }

}

const newForm = new CreateTextElem({
    elemsForm: '.js--form-inner',
    placeholder: 'введите текст',
})

const checkbox = new createCheckBoxElemen({
    elemsForm: '.js--form-inner',
    checkedValue: 'checked',
})




newForm.createForm()
newForm.createTextInput()
checkbox.createForm()
checkbox.createCheckedInput()
// newForm.createButton()