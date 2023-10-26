function userForm()
{
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let province = document.getElementById("province").value;
    let memberships = document.getElementsByName("membership");
    let membership
    for(var i = 0; i < memberships.length; i++){
        if(memberships[i].checked){
            membership = memberships[i].value;
        }
    }
    let output = "Full Name: " + fname + " " + lname + "<br>Email: " + email + "<br>Address: " + address + "<br>" + city + ", " + province + "<br>Membership: " + membership;
    document.getElementById("output").innerHTML = output;
}