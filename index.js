// Write your solution in this file!
const employee = {
    name: '',
    streetAddress: ''
};

function  updateEmployeeWithKeyAndValue(employee, key, value){
     return Object.assign({}, employee, {[key]: value})
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign( employee, {[key]: value})
};


function deleteFromEmployeeByKey(employee, key){
    const deleteEmplyee = Object.assign({}, employee)
    delete deleteEmplyee[key]
    return deleteEmplyee
};


function destructivelyDeleteFromEmployeeByKey(employee, key){
    const deleteEmplyee = Object.assign(employee)
    delete deleteEmplyee[key]
    return deleteEmplyee
};

