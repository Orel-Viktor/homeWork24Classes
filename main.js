'use strict'


class ButtonElement {

    createButton() {
        this.myButton = document.createElement('button')
        this.myFormm.appendChild(this.myButton)
    }
}

class CheckboxElemen extends ButtonElement {
    constructor(checkedValue) {
        super()
        this.checkedValue = checkedValue
    }
    createCheckedInput() {
        this.inputCheckBox = document.createElement('input')
        this.inputCheckBox.setAttribute('type', 'checkbox')
        this.inputCheckBox.setAttribute(`${this.checkedValue}`, `${this.checkedValue}`)
        this.myFormm.appendChild(this.inputCheckBox)
    }
}

class TextElement extends CheckboxElemen {
    constructor(placeholder, checkedValue) {
        super(checkedValue)
        this.placeholder = placeholder
    }
    createTextInput() {
        this.inputText = document.createElement(`input`)
        this.inputText.type = 'text'
        this.inputText.placeholder = `${this.placeholder}`
        this.myFormm.appendChild(this.inputText)

    }
}


class FormElemen extends TextElement {
    constructor({ elemsForm, placeholder, checkedValue, }) {
        super(placeholder, checkedValue)
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
    checkedValue: 'checked'

})
newForm.createForm()
newForm.createTextInput()
newForm.createCheckedInput()
newForm.createButton()