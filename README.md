Используя наследование, на основе класса FormElement создать 3 новых класса:

TextElement - должен иметь метод, который создаст input и вернёт его для будущего монтирования на страницу. При инициализации, должна быть возможность указать его значение "placeholder"
CheckboxElement - должен иметь метод, который создаст input и вернёт его для будущего монтирования на страницу. При инициализации, должна быть возможность указать его значение "checked"
ButtonElement - должен иметь метод, который создаст button и вернёт его для будущего монтирования на страницу.


На основе полученных классов JS создать небольшую форму для регистрации пользователя. Пример: https://drive.google.com/file/d/1qs7vNZJq4gRTERyRipndB4ereNvJNiHy/view?usp=drivesdk



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
