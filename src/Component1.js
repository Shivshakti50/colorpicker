import React from 'react'
import "./Component1.css"
import {useState} from "react"

export default function Component1() {
  const[color,setColor]=useState()
  const[R1,setR1]=useState()
  const[G1,setG1]=useState()
  const[B1,setB1]=useState()

  const change=(event)=>{
    var z;
    if(event.target.id=="R"){
      
      if(event.target.value[0]==0 || event.target.value[0]==1 || event.target.value[0]==2){
        setR1(event.target.value)
        z = R1;
      
      }
      if(event.target.value[0]!=0 && event.target.value[0]!=1 && event.target.value[0] !=2){
        setR1("")
      }
      if(event.target.value[1]>=0 && event.target.value[1]<=5){
        setR1(event.target.value)
        z = R1;
        
      }
      if(event.target.value[1]!=0 && event.target.value[1]!=1 && event.target.value[1]!=2 && event.target.value[1]!=3 && event.target.value[1]!=4 && event.target.value[1]!=5 && event.target.value[1]!=undefined){
        setR1("")
        setR1(z)
      }
      if(event.target.value[2]>=0 && event.target.value[2]<=5){
        setR1(event.target.value) 
        z = R1;
      }
      if(event.target.value[2]!=0 && event.target.value[2]!=1 && event.target.value[2]!=2 && event.target.value[2]!=3 && event.target.value[2]!=4 && event.target.value[2]!=5 && event.target.value[2]!=undefined){
        setR1("")
        setR1(z)
      }
      if(event.target.value[3]!=undefined){
        setR1(z)
      }

    }
    if(event.target.id=="G"){
      if(event.target.value[0]==0 || event.target.value[0]==1 || event.target.value[0]==2){
        setG1(event.target.value)
        z = G1;      
      }
      if(event.target.value[0]!=0 && event.target.value[0]!=1 && event.target.value[0] !=2){
        setG1("")
      }
      if(event.target.value[1]>=0 && event.target.value[1]<=5){
        setG1(event.target.value)
        z = G1;
      }
      if(event.target.value[1]!=0 && event.target.value[1]!=1 && event.target.value[1]!=2 && event.target.value[1]!=3 && event.target.value[1]!=4 && event.target.value[1]!=5 && event.target.value[1]!=undefined){
        setG1("")
        setG1(z)
      }
      if(event.target.value[2]>=0 && event.target.value[2]<=5){
        setG1(event.target.value) 
        z = G1;
      }
      if(event.target.value[2]!=0 && event.target.value[2]!=1 && event.target.value[2]!=2 && event.target.value[2]!=3 && event.target.value[2]!=4 && event.target.value[2]!=5 && event.target.value[2]!=undefined){
        setG1("")
        setG1(z)
      }
      if(event.target.value[3]!=undefined){
        setG1(z)
      }
    
    }
    if(event.target.id=="B"){
      if(event.target.value[0]==0 || event.target.value[0]==1 || event.target.value[0]==2){
        setB1(event.target.value)
        z = B1;      
      }
      if(event.target.value[0]!=0 && event.target.value[0]!=1 && event.target.value[0] !=2){
        setB1("")
      }
      if(event.target.value[1]>=0 && event.target.value[1]<=5){
        setB1(event.target.value)
        z = B1;
      }
      if(event.target.value[1]!=0 && event.target.value[1]!=1 && event.target.value[1]!=2 && event.target.value[1]!=3 && event.target.value[1]!=4 && event.target.value[1]!=5 && event.target.value[1]!=undefined){
        setB1("")
        setB1(z)
      }
      if(event.target.value[2]>=0 && event.target.value[2]<=5){
        setB1(event.target.value) 
        z = B1;
      }
      if(event.target.value[2]!=0 && event.target.value[2]!=1 && event.target.value[2]!=2 && event.target.value[2]!=3 && event.target.value[2]!=4 && event.target.value[2]!=5 && event.target.value[2]!=undefined){
        setB1("")
        setB1(z)
      }
      if(event.target.value[3]!=undefined){
        setB1(z)
      }
    }
  }
  const printcolor=()=>{
   var result="#" + componentToHex(parseInt(R1)) + componentToHex(parseInt(G1)) + componentToHex(parseInt(B1));
   setColor(result)
   setR1("")
   setG1("")
   setB1("")

  }
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  return (
    <div id="component1" style={{backgroundColor:color}}>
     R: <input type="number" id="R" onChange={change} value={R1}/><br/>
     G: <input type="number" id="G" onChange={change} value={G1}/><br/>
     B: <input type="number" id="B" onChange={change} value={B1}/><br/>
        <button onClick={printcolor}>Change</button><br/>

    </div>
  )
}
