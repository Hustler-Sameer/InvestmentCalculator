import React from "react";
import { useState } from "react";


const Form = () => {
    const [enteredSavings , setEnteredSavings]  = useState('');
        const [enteredYearlySaving , setEnteredYearlySavings] = useState(' ');
        const [enteredExpectedInterest , setEnteredExpectedInterest] = useState(' ');
        const[enteredDuration , setEnteredDuration] = useState(' ');

        const EnteredSavingsHandler = (event) => {
            console.log(event.target.value)
            setEnteredSavings(event.target.value);

        }

        const EnteredYearlySavingsHandler = (event) => {
            console.log(event.target.value);
            setEnteredYearlySavings(event.target.value)
        }
        
        const EnteredExpectedInterest = (event) => {
            console.log(event.target.value);
            setEnteredExpectedInterest(event.target.value);
        }
        const EnteredDurationHandler = (event) => {
            console.log(event.target.value);
            setEnteredDuration(event.target.value);
        }
    
    
    
        const calculateHandler = (event) => {
        // Should be triggered when form is submitted
        // You might not directly want to bind it to the submit event on the form though...
    
        const yearlyData = []; // per-year results
        event.preventDefault();
        console.log('heheh');

        const formData = {
            currentSavings : +enteredSavings ,
            expectedReturn: +enteredExpectedInterest / 100 ,
            duration : +enteredDuration , 
            yearlyContribution : +enteredYearlySaving
        }
        console.log(formData);
    
        // let currentSavings = +currentSavings; // feel free to change the shape of this input object!
        // const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
        // const expectedReturn = +userInput['expected-return'] / 100;
        // const duration = +userInput['duration'];

        
    
      //  The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < formData.duration; i++) {
          let yearlyInterest = formData.currentSavings * formData.expectedReturn;
          let currentSavings1 = formData.currentSavings + yearlyInterest;
           let newSavings = (currentSavings1 + yearlyInterest) + formData.yearlyContribution;
           for (let j =0 ; j< formData.duration ; j++ ){
            newSavings[j+1] =  newSavings
           }
          console.log(yearlyInterest, newSavings,);
           yearlyData.push({
            // feel free to change the shape of the data pushed to the array!
            year: i + 1,
            yearlyInterest: yearlyInterest,
            savingsEndOfYear: newSavings,
            yearlyContribution: formData.yearlyContribution,
            currentSavings: newSavings
          });
        }
        console.log(yearlyData)
    
        // do something with yearlyData ...
      };





    return(



        <div>
            <form className="form" onSubmit={calculateHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings" >Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={EnteredSavingsHandler}/>
          </p>
          <p> 
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange= {EnteredYearlySavingsHandler} />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={EnteredExpectedInterest}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={EnteredDurationHandler} />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button" >
            Calculate
          </button>
        </p>
      </form>






        </div>
    )
}


export default Form;