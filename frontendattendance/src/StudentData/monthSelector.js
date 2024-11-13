import React from "react";

const MonthSelector = (props) =>{
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
      ];
      
console.log(props.selectedMonth)
        
    return <select  onChange={props.onMonthChange}>
        <option value="">Select Month</option>
        {months.map((month,index)=>(<option key={index} value={index}>{month}</option>))}
    </select>
}

export default MonthSelector ;