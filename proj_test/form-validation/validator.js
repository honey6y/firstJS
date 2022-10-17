// đối tượng validator
function Validator(options) {
    function getParent (element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    let selectorRules = {};

    //ham thuc hien validate
    function validate (inputElement, rule) {
        let errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        let errorMeassage;
        //lay cac rules cua selector
        let rules = selectorRules[rule.selector];

        //lap qua tung rule va kiem tra
        // neu co loi thi dung kiem tra
        for (let i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMeassage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMeassage = rules[i](inputElement.value);
            }
            
            if (errorMeassage) break;
        }

        if (errorMeassage) {
            errorElement.innerText = errorMeassage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMeassage;
    }

    //lay element cua form can validate
    let formElement = document.querySelector(options.form);

    if (formElement) {
        //khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();
            
            let isFormValid = true;

            //lap qua tung rule va validate
            options.rules.forEach(function (rule) {
                let inputElement = formElement.querySelector(rule.selector);
                
                validate(inputElement, rule);
                let isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            
            // console.log(formValues);

            if (isFormValid) {
                //truong hop submit voi JS
                if (typeof options.onSubmit === 'function') {
                    let enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                    let formValues = Array.from(enableInputs).reduce(function (values, input) {
                        
                        switch (input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="'+ input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values;
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(values.input);
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }
                        return values;
                    }, {});

                    options.onSubmit (formValues)
                }
                //truong hop submit voi hanh vi mac dinh cua HTML
                else {
                    formElement.submit();
                }
            }

        }

        //lap qua moi rule la xu ly (lang nghe su kien blur, input..)
        options.rules.forEach(function (rule) {

            // luu lai cac rule trong moi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            // selectorRules[rule.selector] = rule.test;

            let inputElements = formElement.querySelectorAll(rule.selector);  
            
            Array.from(inputElements).forEach(function (inputElement) {
                // xu ly truong hop blur khoi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                // xu ly moi khi nguoi dung dang nhap input
                inputElement.oninput = function () {
                    let errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            });
            
            
        });
    }
}

// định nghĩa rules
// nguyeen tac rules:
// 1. có lỗi thì trả message lỗi
// 2. hợp lệ => trả ra undefine
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || 'Vui long nhap truong nay';
        }
    };
}

Validator.isEmail = function (selector, message) {
return {
        selector: selector,
        test: function (value) {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Truong nay phai la email'
        }
    };
}

Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Vui long nhap toi thieu ${min} ky tu`
        }
    }
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Khong chinh xac, vui long nhap lai'
        }
    }
}