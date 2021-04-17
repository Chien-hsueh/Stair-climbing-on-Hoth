import { Typography } from '@material-ui/core';
import '../App.css';
import React from 'react';

type FooterProps ={
    userInput: Number,
    numWays: Number
}

const Footer = ({userInput, numWays}: FooterProps) =>{
 
    if (userInput && userInput >=0){
        return (<Typography variant="h5">You can reach the top in <span className="answer">{numWays}</span> distinct ways.</Typography>)
    }
    else if (userInput && userInput <0){
        return (<Typography variant="h5">You cannot reach the top with negative number of steps.</Typography>)
    }
    else{
        return (<Typography variant="h5">⠀</Typography>)
    }

}

export default Footer;