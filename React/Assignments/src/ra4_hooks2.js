import React,{useState,useEffect} from 'react';

function Marks(){
    const[name]=useState("Nitya")
    const[age]=useState(21)
    const[maths,setMaths]=useState(50);
    const[chemistry,setChemistry]=useState(60);
    const[physics,setPhysics]=useState(70);
    const[total,setTotal]=useState(0);
    const[update,setUpdate]=useState(false);

    useEffect(()=>{
        if(update){
            setTotal(maths+chemistry+physics);
        }
    },[maths,chemistry,physics,update]);

    const updateMarks=()=>{
        setMaths(maths+10);
        setChemistry(chemistry+10);
        setPhysics(physics+10);
        setUpdate(true);
    }

    return(
        <div>
            <h3>Marksheet</h3>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>Total:{total}</p>
            <p>Maths:{maths}</p>
            <p>Chemistry:{chemistry}</p>
            <p>Physics:{physics}</p>
            <button onClick={updateMarks}>Update</button>
        </div>
    )
}

export default Marks;