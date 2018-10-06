console.log('js');

let employeesArray = [];

class Employee {
    constructor(firstName, lastName, identity, title, annualSalary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.identity = identity;
        this.title = title;
        this.annualSalary = annualSalary;
    }
}

$('document').ready(onReady);

function onReady(){
    console.log('JQ');
    $('#submit').on('click', addEmployee);
    //find something already on the page with movieList id
    //$('#employeeList').on('click', '.lendMovie', lendMovie);

    // . = class and class is best to use since it can only be used once 
    $('#employeeList').on('click', '.deleteEmployee', deleteEmployee);
}

// add movie function

function addEmployee() {
    // event.preventDefault adds to console and prevents repeats
    event.preventDefault();
    console.log('button clicked!');
    let firstNameIn = $('#firstName').val();
    let lastNameIn = $('#lastName').val();
    let identityIn = $('#identity').val();
    let titleIn = $('#title').val();
    let annualSalaryIn = $('#annualSalary').val();
    // new instance of class using information from the form 
    let newEmployee = new Employee (firstNameIn, lastNameIn, identityIn, titleIn, annualSalaryIn);
    employeesArray.push(newEmployee);
    console.log(employeesArray);

    //call function to append movie list
    appendEmployeeList();
}

// appending!

function appendEmployeeList() {
    let element = $('#employeeList');
    element.empty();
    for(let employee of employeesArray) {
        console.log(employee);
        element.append(`<tr>` + `<td>` + employee.firstName + `</td>` + `<td>` + employee.lastName + `</td>` + `<td>` + employee.identity + `</td>` + `<td>` + employee.title + `</td>` + `<td>` + employee.annualSalary + `</td>` + `<td>` + `<button class="deleteEmployee">Delete</button>` + `</td>` + `</tr>`);

    }

    monthlyTotal();
}

function monthlyTotal() {
    let monthlyCosts = 0;
    parseInt(monthlyCosts);
    for(monthlyPay of employeesArray){
        console.log('monthlyPay:', monthlyPay.annualSalary);
        monthlyCosts = monthlyCosts + parseInt(monthlyPay.annualSalary);
        console.log('Monthly Costs Total:', monthlyCosts);
        
    }

    $('#costs').empty('');
    $('#costs').append(monthlyCosts/12);
    
    if (monthlyCosts/12 > 20000){
        $('#costs').css("background-color", "red");
    }
}

function deleteEmployee() {
    console.log('delete!');
    let selectedItem = $(this).parent().text();
    console.log(selectedItem);
    for(let i = 0; i < employeesArray.length; i++){
        if(selectedItem.includes(employeesArray[i].firstName)){
            console.log('delete me!');
            employeesArray.splice(i, 1);
            $(this).parent().remove();
        }
    }
}