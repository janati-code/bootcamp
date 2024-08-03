

var users =[];

function addUser() {
    // Get input values
    var name = document.getElementById("nameInput").value;
    var age = document.getElementById("ageInput").value;
    var gender = document.getElementById("genderInput").value;
    
   
    // Get the table and insert a new row at the end
    var table = document.getElementById("outputTable");
    var newRow = table.insertRow(table.rows.length);
   

    // Insert data into cells of the new row
    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = age;
    newRow.insertCell(2).innerHTML = gender;
    var user={"name":name,"age":age,"gender":gender};
    
        
    users.push(user);
    // Clear input fields
    clearInputs();
}


function clearInputs() {

    // Clear input fields
    document.getElementById("nameInput").value = "";
    document.getElementById("ageInput").value = "";
    document.getElementById("genderInput").value = "";
}

function MoreInfo()
{
    
   
    var tb = document.getElementById("gTable");
    tb.style.display = "flex";

    /////////
    
     // Insert data into cells of the new row
     var ages=[];
     users.forEach(user => {

        ages.push(user.age);

        if(user.gender == "female")
        {
            var gtable = document.getElementById("fTable");
            var gnewRow = gtable.insertRow(gtable.rows.length);
            gnewRow.insertCell(0).innerHTML = user.name;
            
        }
        
     else if(user.gender == "male")
        {
            var gtable = document.getElementById("mTable");
            var gnewRow = gtable.insertRow(gtable.rows.length);
            gnewRow.insertCell(0).innerHTML =  user.name;
            
        }
     });
     
     var a=document.getElementById("Youngest_span");
     a.innerHTML += "\n" + Math.min.apply(null,ages);

     a=document.getElementById("Oldest_span");
     a.innerHTML += "\n" + Math.max.apply(null,ages);
     
  
}

