function Calculator(leftOperand, operator, rightOperand) {
    this.leftOperand = leftOperand;
    this.operator = operator;
    this.rightOperand = rightOperand;

    this.calculateResult = function () {
        let result = 0;

        switch (this.operator) {
            case '+':
                result = this.leftOperand + this.rightOperand;
                break;
            case '-':
                result = this.leftOperand - this.rightOperand;
                break;
            case '*':
                result = this.leftOperand * this.rightOperand;
                break;
            case '/':
                if (this.rightOperand !== 0){
                    result = this.leftOperand / this.rightOperand;
                    break;
                } else {
                    result = '!possible';
                    break;
                }
            case '%':
                if (this.rightOperand !== 0) {
                    result = this.leftOperand % this.rightOperand;
                    break;
                } else {
                    result = '!possible';
                    break;
                }
            case '^':
                result = this.leftOperand ** this.rightOperand;
                break;
            case '√':
                result = Math.sqrt(this.leftOperand);
                break;
        }

        return result;
    }
}

module.exports = Calculator;