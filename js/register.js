let customerList =[];

function register(){
    alert("Success");

    let fname = document.getElementById("firstName").value
    let lname = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let password = document.getElementById("password").value

    let customer = {
        fname : fname,
        lname : lname,
        email : email,
        phone : phone,
        password : password,
    };

    customerList.push(customer);
    console.log(customerList);

    localStorage.setItem("customer",JSON.stringify(customerList))
    
}