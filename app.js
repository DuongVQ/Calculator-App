let listBtns = document.querySelectorAll('.buttons button');
let lastReturn = document.querySelector('.screen .last');
let newReturn = document.querySelector('.screen .new');

let firstNum = null;
let newNum = null;
let calculator = '+';

function reload() {
    lastReturn.innerText = firstNum ? firstNum + calculator: '';
    newReturn.innerText = newNum ? newNum : '';
}

reload();

listBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let value = btn.innerText;
        switch (value) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':        
                newNum = newNum ? newNum + value : value;
                // nếu số mới có giá trị r thì thêm, ko thì gán value mới
                break;
            case '.':
                newNum = newNum ? newNum + value : '0.';
                break;
            case '±':
                newNum = -1 * newNum;
                break;
            case '%': 
                newNum = 0.01 * newNum;
                break;
            case '÷':
            case 'x':
            case '-':
            case '+':
                if (newNum) {
                    if(firstNum) {
                        applyCalculator();
                    }
                    calculator = value;
                    firstNum = newNum;
                    newNum = null;
                }
                break;
            case '=':
                applyCalculator();
                firstNum = null;
                break;
            case 'AC':
                firstNum = null;
                newNum = null;
                calculator = '+';
                break;
            default:
                break;
        }
        reload();
    })
})

function  applyCalculator() {
    switch (calculator) {
        case '÷':
            newNum = (firstNum / newNum).toFixed(3);            
            break;
        case 'x':
            newNum = firstNum * newNum;            
            break;
        case '-':
            newNum = firstNum - newNum;            
            break;
        case '+':
            newNum = Number(firstNum) + Number(newNum);            
            break;            
        default:
            break;
    }
}