import {React , useState} from "react";
import "../App.css";

function form ()
{
    const[firstName , setfirstName] = useState("");
    const[lastName , setlastName] = useState("");
    const[gender , setGender] = useState("male");//radio
    // const[subject , setSubject] = useState({math:true , persian:false , english:false});//checkbox
    // const[resume , setResume] = useState("");//file
    // const[selectedOption , setOption] = useState("");//selection


    const handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log(
            firstName,lastName,gender,subject,resume,selectedOption
        );
    };

    const handleReset = () =>
    {
        setfirstName("");
        setlastName("");
        setGender("male");
        // setSubject({math:true , persian:false , english:false});
        // setResume("");
        // setOption("");

    }

    return
    (
    <div className="App">
        <h1>My Form</h1>
        <fieldset>
            <form action="#" method="get">
            <label for="firsName">FirstName</label>
            <input name="firstName" type="text" placeholder="Enter your firstname"
            value={firstName} required id="firstName" onChange={(e)=>setfirstName(e.target.value)} />

            <label for="lastName">LastName</label>
            <input id="lastName" type="text" placeholder="Enter your lasttname" required name="lastName" 
            value={lastName} onChange={(e) => setlastName(e.target.value)} ></input>

            <label for="Gender">Gender</label>
            <input id="male" type="radio" p required name="gender" 
            value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} ></input>
            Male
            <input id="female" type="radio"  required name="gender" 
            value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} ></input>
            Female
            
                        

            </form>


           
        </fieldset>
    </div>
    );
}

export default form;