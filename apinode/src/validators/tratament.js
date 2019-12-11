'use strict';

let errors = [];

function ValidationContract() {
    errors = [];
}
ValidationContract.prototype.CPFTest= (value, message) =>  {
    var strCPF = value;
    var Sum;
    var Rest;
    Sum = 0;
  if (strCPF == "00000000000") return errors.push({ message: message });
     
  for (i=1; i<=9; i++) Sum = Sum + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Rest = (Sum * 10) % 11;
   
    if ((Rest == 10) || (Rest == 11))  Rest = 0;
    if (Rest != parseInt(strCPF.substring(9, 10)) ) return errors.push({ message: message });
   
  Sum = 0;
    for (i = 1; i <= 10; i++) Sum = Sum + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Rest = (Sum * 10) % 11;
   
    if ((Rest == 10) || (Rest == 11))  Rest = 0;
    if (Rest != parseInt(strCPF.substring(10, 11) ) ) return errors.push({ message: message });
    return true;
}



ValidationContract.prototype.isEmail = (value, message) => {
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value))
        errors.push({ message: message });
}

ValidationContract.prototype.errors = () => { 
    return errors; 
}

ValidationContract.prototype.clear = () => {
    errors = [];
}

ValidationContract.prototype.isValid = () => {
    return errors.length == 0;
}

module.exports = ValidationContract;
