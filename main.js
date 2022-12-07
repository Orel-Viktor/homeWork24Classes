'use strict'


// class ButtonElement extends FormElemen {

//     createButton() {
//         this.myButton = document.createElement('button')
//         this.myFormm.appendChild(this.myButton)
//     }
// }

// class CheckboxElemen extends FormElemen {
//     constructor(checkedValue) {
//         super()
//         this.checkedValue = checkedValue
//     }
//     createCheckedInput() {
//         this.inputCheckBox = document.createElement('input')
//         this.inputCheckBox.setAttribute('type', 'checkbox')
//         this.inputCheckBox.setAttribute(`${this.checkedValue}`, `${this.checkedValue}`)
//         this.myFormm.appendChild(this.inputCheckBox)
//     }
// }

// class TextElement extends FormElemen {
//     constructor(placeholder, checkedValue) {
//         super(checkedValue)
//         this.placeholder = placeholder
//     }
//     createTextInput() {
//         this.inputText = document.createElement(`input`)
//         this.inputText.type = 'text'
//         this.inputText.placeholder = `${this.placeholder}`
//         this.myFormm.appendChild(this.inputText)

//     }
// }


// class FormElemen {
//     constructor({ elemsForm, placeholder, checkedValue, }) {
//         super(placeholder, checkedValue)
//         this.elemsForm = elemsForm
//     }

//     createForm() {
//         this.myFormm = document.createElement('form')
//         const formElems = document.querySelector(this.elemsForm)
//         formElems.appendChild(this.myFormm)
//     }
// }

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

class CheckBoxElemen extends FormElem {
    constructor({checkedValue,elemsForm}) {
        super(elemsForm)
        this.checkedValue = checkedValue
    }
    createCheckedInput() {
        this.inputCheckBox = document.createElement('input')
        this.inputCheckBox.setAttribute('type', 'checkbox')
        this.inputCheckBox.setAttribute(`${this.checkedValue}`, `${this.checkedValue}`)
        this.myFormm.appendChild(this.inputCheckBox)
        return this.inputCheckBox
    }

}

const newForm = new CreateTextElem({
    elemsForm: '.js--form-inner',
    placeholder: 'введите текст',
})




newForm.createForm()
newForm.createTextInput()
newForm.createCheckedInput()
newForm.createButton()