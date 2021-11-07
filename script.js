$(document).ready(onReady);

let employees = [];
let detectSalary;


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
    detectSalary = $('#salary-input').val();
    //check if any fields are empty.
        //send alert if field is empty.

    if (firstName === '' || lastName === '' || id === '' || title === '' || salary === '') {
        alert('Fill empty fields!');
    } else {
        //Create new object with form data, and push it to employees array.
        employees.push({firstName:firstName, lastName:lastName, id:Number(id), title:title, salary:Number(salary)});
        //Empty the input values.
        clearForm();
        //Add employee object to the DOM
        addEmployee();
        //Update total monthly spending.
        handleTotalMonthly();
        //Detect for delete button.
        $('tr').on('click', deleteEmployee);
    }
}

function clearForm() {
    $('#first-name-input').val('');
    $('#last-name-input').val('');
    $('#id-input').val('');
    $('#title-input').val('');
    $('#salary-input').val('');
}

function addEmployee() {
    $('tbody').empty();
    for (let i = 0; i < employees.length; i++) {
        $('tbody').append(`<tr><td>${employees[i].firstName}</td><td>${employees[i].lastName}</td><td>${employees[i].id}</td><td>${employees[i].title}</td><td>${employees[i].salary}</td><td><button class="delete-button">Delete</button></td></tr>`);
    }
}

function handleTotalMonthly() {
    let totalMonthly = 0;
    for (let i = 0; i < employees.length; i++) {
        totalMonthly += employees[i].salary;
    }
    totalMonthly /= 12;
    totalMonthly = Number(totalMonthly.toFixed(2));
    $('#total-monthly').text(totalMonthly);
    if (totalMonthly >= 20000) {
        // $('#total-monthly').parent().addClass('red-text');
        $('#total-monthly').parent().css('color', 'red');
    } else {
        // $('#total-monthly').parent().removeClass('red-text');
        $('#total-monthly').parent().css('color', 'black');
    }
}

//Select the tr that delete button is in, and remove it.
    //Remove object from array that corresponds to the table row being deleted.
//Get the salary value in deleted object, and subtract that value from total monthly.
function deleteEmployee() {
    console.log(detectSalary);
    employees
    $(this).remove();
}