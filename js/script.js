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
    let output = "Full Name: " + fname + " " + lname + "<br>Email: " + email + "<br>Address: " + address + "<br>" + city + ", "
    + province + "<br>Membership: " + membership;
    document.getElementById("output").innerHTML = output;
}

function myExcelFuns()
{
    let numberStr = document.getElementById("numbers").value;
    document.getElementById("numbers").value = null;
    if (numberStr=='' || numberStr==null)
    {
        alert("You need to input numbers")
    }
    else
    {
        numberStr.trim();
        let numberArr = numberStr.split(' ');
        let finalNumberArr = [];
        let j = 0
        for(var i = 0; i < numberArr.length; i++)
        {
            if (numberArr[i].trim().length>0)
            {
                finalNumberArr[j] = Number(numberArr[i].trim());
                j++;
            }            
        }

        var result = 0;

        if (document.getElementById("AutoSum").checked)
                {
                    for(var i = 0; i < finalNumberArr.length; i++)
                    {
                        result+=finalNumberArr[i];
                    }
                }
        else{if (document.getElementById("Average").checked)
                {
                    for(var i = 0; i < finalNumberArr.length; i++)
                    {
                        result+=finalNumberArr[i];
                    }
                    result = result/finalNumberArr.length;
                }
                else{if (document.getElementById("Max").checked)
                {
                    let max = finalNumberArr[0];
                    for(var i = 1; i < finalNumberArr.length; i++)
                    {
                        if (finalNumberArr[i] > max)
                        {
                            max = finalNumberArr[i];
                        }
                    }
                    result = max;
                }
                else{
                    let min = finalNumberArr[0];
                    for(var i = 1; i < finalNumberArr.length; i++)
                    {
                        if (finalNumberArr[i] < min)
                        {
                            min = finalNumberArr[i];
                        }
                    }
                    result = min;
                }}
        }}
        document.getElementById("output").innerHTML ="Result: "+result;
    }