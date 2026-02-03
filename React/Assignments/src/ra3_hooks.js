import React,{useState,useEffect} from 'react';
function Instrument(){
    const[old]=useState("Drums");
    const[newInstrument,setInstrument]=useState("");
    const[show,setShow]=useState(false);

    useEffect(()=>{
        if (show){
            setInstrument("Violin");
        }
    },[show]);


    return(
        <div>
            <h2>Old Instrument:{old}</h2>
            <h2>New Instrument:{newInstrument}</h2>
            <button onClick={()=> setShow(true)}>Show</button>
        </div>
    )
}

export default Instrument;




