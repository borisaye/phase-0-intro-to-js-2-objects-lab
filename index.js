const employee = {
    "name": "Sam",
    "streetAddress": "11 Broadway",

}


function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {
        "name": "Sam",
        "streetAddress": "11 Broadway"
    
    }
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    employee["name", "streetAddress"] = "12 Broadway";
    
    return employee;
    
    }

function deleteFromEmployeeByKey(employee, key){
 const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee;



}

function destructivelyDeleteFromEmployeeByKey(employee, key){

    delete employee[key]
    return employee;



}
    


