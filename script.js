$(document).ready(onReady);

let employeeData = [
    {firstName:'Jim', lastName:'Jeff', id:1468, title:'fry cook', salary:90000}
];




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
        
        //Empty the input values.
        clearForm();
    }
//}

function clearForm() {
    $('#first-name-input').val('');
    $('#last-name-input').val('');
    $('#id-input').val('');
    $('#title-input').val('');
    $('#salary-input').val('');
}