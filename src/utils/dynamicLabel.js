import React from 'react';
export let dynamicLabelFromKey=(key)=>{
   
        let headerArray = key.split("_")
        let upperCaseArray = []
        headerArray.filter((value) => {
            // console.log(value[0].toUpperCase() + value.slice(1))
            upperCaseArray.push(value[0].toUpperCase() + value.slice(1))
        })
        console.log(upperCaseArray)
        let header = upperCaseArray.join(" ")
        return header
    
}


export let DataFormatter = (field, value) => {

    if (field.toLowerCase().indexOf("status") != -1) {
        if (value.toLowerCase() == "failed") {
            return <span style={{ color: "red", fontWeight: "400px" }}>{value}</span>
        } else if (value.toLowerCase() == "success") {
            return <span style={{ color: "green", fontWeight: "400px" }}>{value}</span>
        } else {
            return <span>{value}</span>
        }
    } else {
        return value
    }

}