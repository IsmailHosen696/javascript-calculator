const numBtn = document.querySelectorAll(".btn-all");
const operators = document.querySelectorAll(".sign");
const clear = document.querySelector("[data-name=AC]");
const deletekey = document.querySelector("[data-name=del]");
const calc = document.querySelector("[data-name=calc]");
const inpscreen = document.querySelector("#inputs");
const resultscreen = document.querySelector("#result");

(function () {
    this.newnum = '';
    this.operator = '';
    this.oldnum = '';
    this.result = ''

    this.addnum = (number) => {
        if (this.result) {
            this.operator = '';
            this.newnum = this.result
            this.oldnum = '';
            this.result = '';
        } else {
            if (this.operator !== '') {
                if (number === '.' && this.oldnum.includes('.')) return
                this.oldnum = this.oldnum + number;
            } else {
                if (number === '.' && this.newnum.includes('.')) return
                this.newnum = this.newnum + number;
            }
        }
    }
    this.displaynum = () => {
        inpscreen.innerHTML = this.newnum + this.operator + this.oldnum;
        this.result ? resultscreen.innerHTML = this.result : ''
    }
    this.cleardisplay = () => {
        this.newnum = '';
        this.operator = '';
        this.oldnum = '';
        this.result = ''
        inpscreen.innerHTML = '';
        resultscreen.innerHTML = '';
    }
    this.delete = () => {
        if (this.oldnum) {
            this.oldnum = this.oldnum.toString().slice(0, -1)
        }
        else if (!this.oldnum && this.operator) {
            this.operator = this.operator.toString().slice(0, -1)
        }
        else {
            this.newnum = this.newnum.toString().slice(0, -1)
        }
    }
    this.calculate = () => {
        switch (this.operator) {
            case '+':
                return this.result = parseFloat(this.newnum) + parseFloat(this.oldnum);
            case '-':
                return this.result = parseFloat(this.newnum) - parseFloat(this.oldnum);
            case '×':
                if (parseFloat(this.newnum === 0) || parseFloat(this.oldnum) === 0) return this.result = '0'
                return this.result = parseFloat(this.newnum) * parseFloat(this.oldnum);
            case '÷':
                return this.result = parseFloat(this.newnum) / parseFloat(this.oldnum);
            default:
                return this.result;
        }
    }
    numBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            this.addnum(e.target.innerHTML)
            this.displaynum();
        })
    });
    operators.forEach(ops => {
        ops.addEventListener('click', (e) => {
            if (!this.result && this.operator) return;
            else if (!this.newnum) return;
            else if (this.result) {
                this.operator = '';
                this.newnum = this.result
                this.oldnum = '';
                this.result = '';
                this.operator = e.target.innerHTML;
            }
            this.operator = e.target.innerHTML;
            this.displaynum();
        })
    });
    calc.addEventListener('click', () => {
        this.calculate()
        this.displaynum()
    })
    deletekey.addEventListener('click', () => {
        this.delete();
        this.displaynum()
    })
    clear.addEventListener('click', () => {
        this.cleardisplay();
    })
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case '1':
                this.addnum(e.key);
                return this.displaynum();
            case '2':
                this.addnum(e.key);
                return this.displaynum();
            case '3':
                this.addnum(e.key);
                return this.displaynum();
            case '4':
                this.addnum(e.key);
                return this.displaynum();
            case '5':
                this.addnum(e.key);
                return this.displaynum();
            case '6':
                this.addnum(e.key);
                return this.displaynum();
            case '7':
                this.addnum(e.key);
                return this.displaynum();
            case '8':
                this.addnum(e.key);
                return this.displaynum();
            case '9':
                this.addnum(e.key);
                return this.displaynum();
            case '0':
                this.addnum(e.key);
                return this.displaynum();
            case '+':
                this.addnum(e.key);
                return this.displaynum();
            case '-':
                this.addnum(e.key);
                return this.displaynum();
            case '*':
                this.addnum('×');
                return this.displaynum();
            case '/':
                this.addnum('÷');
                return this.displaynum();
            case 'Backspace':
                this.delete();
                return this.displaynum();
            case 'Delete':
                this.cleardisplay();
                return this.displaynum();
            case 'Enter':
                console.log(e.key);
                this.calculate()
                return this.displaynum()
            default:
                return this.displaynum();
        }
    })
})();