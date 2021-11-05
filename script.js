$(document).ready(onReady);

let employees = [];




function onReady() {
    $('#form-submit').on('click', submitForm);
}

//Store each form input then empty the form. 
function submitForm() {
    let firstName = $('#first-name-input').val();
    let lastName = $('#last-name-input').val();
    let id = $('#id-input').val();
    let title = $('#title-input').val();
    let salary = $('#salary-input').val();
    //check if any fields are empty.
        //send alert if field is empty.

    // if (firstName === '' || lastName === '' || id === '' || title === '' || salary === '') {
    //     alert('Fill empty fields!');
    // } else {
        employees.push({firstName:firstName, lastName:lastName, id:Number(id), title:title, salary:Number(salary)});
        //Empty the input values.
        clearForm();
        //Add employee object to the DOM
        addEmployee();
    }
//}

function clearForm() {
    $('#first-name-input').val('');
    $('#last-name-input').val('');
    $('#id-input').val('');
    $('#title-input').val('');
    $('#salary-input').val('');
}

function addEmployee() {
    console.log(employees);
    $('tbody').empty();
    for (let i = 0; i < employees.length; i++) {
        $('tbody').append(`<tr><td>${employees[i].firstName}</td><td>${employees[i].lastName}</td><td>${employees[i].id}</td><td>${employees[i].title}</td><td>${employees[i].salary}</td></tr>`);
    }
}