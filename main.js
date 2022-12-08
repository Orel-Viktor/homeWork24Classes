'use strict'

class FormElement {
    constructor({ name, type, value }) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
    showName() {
        console.log(`Name: ${this.name}`);
    }
    getValue() {
        return this.value;
    }
}

class CreateTextElement extends FormElement {
    constructor({ placeholder, name, type, value }) {
        super(name, type, value)
        this.placeholder = placeholder
        this.type = type
        this.name = name
    }
    createInput() {
        this.element = document.createElement('input')
        this.element.setAttribute('type', this.type)
        this.element.setAttribute('name', this.name)
        this.element.setAttribute('placeholder', this.placeholder)
        this.element.addEventListener('change', () => {
            this.value = this.element.value
        })
    }
}

class CreateCheckboxElement extends FormElement {
    constructor({ type, _checked }) {

        super(type)
        this.type = type
        this.checked = _checked
    }
    createCheckBox() {
        
        this.element = document.createElement('input')
        this.element.setAttribute('type', this.type);
        this.element.checked = this.checked
       

    }
}

const textInput = new CreateTextElement(
    {
        placeholder: "Text",
        type: 'text',
        name: 'userName'
    }
)
const checkBox = new CreateCheckboxElement(
    {
        type: 'checkbox',
        _checked: true,
        
    }
)
textInput.createInput()
checkBox.createCheckBox()

document.querySelector('.js--form-inner').insertAdjacentElement('beforeend', textInput.element)
document.querySelector('.js--form-inner').insertAdjacentElement('beforeend', checkBox.element)