import React, { useState } from 'react';



const AddEntryForm = (props) => {
    
    
    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState("");
    
    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            weight: weight,
            date: date
        }
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <lable>Weight</lable>
            <input type="number" value={weight} onChange={(event) => setWeight(event.target.value)}/>
            <lable>Date</lable>
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)}/>
            <button type="submit">Add</button>
        </form>
     );
}

export default AddEntryForm;