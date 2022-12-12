class FormElement {
    constructor(name, type, value) {
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

class TextElement extends FormElement {
    constructor({name, type, value, placeholder}) {
        super(name, type, value);
        this.placeholder = placeholder;
        this.name = name;
        this.type = type;
    }

    createTextInput() {
        this._el = document.createElement("input");
        this._el.setAttribute("name", this.name);
        this._el.setAttribute("type", this.type);
        this._el.setAttribute("placeholder", this.placeholder);
        this._el.addEventListener("change", () => {
            this.value = this._el.value;
        })
    }
}

const newTextInput = new TextElement({
    name: "userName",
    type: "text",
    placeholder: "Your name"
})
newTextInput.createTextInput();
document.querySelector(".form").append(newTextInput._el);

class CheckBoxElement extends FormElement {
    constructor({type, checked}) {
        super(type);
        this.type = type;
        this.checked = checked;
    }

    createCheckBox() {
        this._el = document.createElement("input");
        this._el.setAttribute("type", this.type);
        this._el.checked = this.checked;
    }
}

const newCheckBox = new CheckBoxElement({
    type: "checkbox",
    checked: false
})
newCheckBox.createCheckBox();
document.querySelector(".form").append(newCheckBox._el);

class ButtonElement extends FormElement {
    constructor({text}) {
        super({});
        this.text = text;
    }

    createButton() {
        this._el = document.createElement("button");
        this._el.innerText = this.text;
    }
}

const newButton = new ButtonElement({
    text: "Register"
})
newButton.createButton();
document.querySelector(".form").appendChild(newButton._el);