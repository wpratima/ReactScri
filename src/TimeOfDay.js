import React from 'react'
import './App.css'; 

function TimeOfDay () {
    const date = new Date(2021, 7, 31, 18 )
    const hour = date.getHours()
    let timeOfDay

    const styles = {
        fontSize:30
    }

    if(hour<12){
        timeOfDay = "Morning"
        styles.color = "#04756F"
    }else if(hour>=12 && hour<17){
        timeOfDay = "Afternoon"
        styles.color = "#8914A3"
    }else{
        timeOfDay = "Night"
        styles.color = "#D90000"
    }

   
    return(
        <h1 style = {styles}>Good {timeOfDay}!</h1>
    )

}
export default TimeOfDay;