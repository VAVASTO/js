// файл script.js
window.onload = function(){ 

    let a = ''
    let b = ''
    let was_pushed_equal = false; 
    let selectedOperation = null
    
    // окно вывода результата
    outputElement = document.getElementById("result")
    
    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    
    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                a += digit
            }
            outputElement.innerHTML = a
        } else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit
                outputElement.innerHTML = b        
            }
        }
    }

    function getIntermResult(){
        switch(selectedOperation) { 
            case 'x':
                a = (+a) * (+b)
                break;
            case '+':
                a = (+a) + (+b)
                break;
            case '-':
                a = (+a) - (+b)
                break;
            case '/':
                a = (+a) / (+b)
                break;
        }

        b = '';
        outputElement.innerHTML = a;
    }

    function clean_disp(){
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }
    
    // устанавка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
        button.onclick = function() {
            if (was_pushed_equal && !selectedOperation){
                was_pushed_equal = false;
                clean_disp();
            }
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });
    
    // установка колбек-функций для кнопок операций
    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return
        if (!selectedOperation) {
        selectedOperation = 'x'
        } else {
            getIntermResult();
            selectedOperation = 'x'
        }

    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '') return
        if (!selectedOperation) {
        selectedOperation = '+'
        } else {
            getIntermResult();
            selectedOperation = '+'
        }
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '') return
        if (!selectedOperation) {
        selectedOperation = '-'
        } else {
            getIntermResult();
            selectedOperation = '-'
        }
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return
        if (!selectedOperation) {
        selectedOperation = '/'
        } else {
            getIntermResult();
            selectedOperation = '/'
        }
    }

    // кнопка очищения
    document.getElementById("btn_op_clear").onclick = function() { 
        clean_disp();
    }



    // кнопка расчёта результата
    document.getElementById("btn_op_equal").onclick = function() { 
        if (a === '' || b === '' || !selectedOperation)
            return
        
        was_pushed_equal = true;
        getIntermResult();
        selectedOperation = null;
    };
    };