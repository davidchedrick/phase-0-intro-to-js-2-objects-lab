const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
};

function  updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj,
        [key]: value,
      };
    }
const newAdd = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');    

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value; 
    return obj;
};
const permAdd = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');

function deleteFromEmployeeByKey(obj, key, value){
    return {
        ...obj,
        [key]: value,
    };    
};
const deleteEmployee = updateEmployeeWithKeyAndValue(employee, 'name', '');   

function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    obj[key] = value; 
    return obj;
};
const permName = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', '');
