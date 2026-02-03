import React, { useState } from 'react'

function AdmissionForm(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [course, setCourse] = useState("")
    const [gender, setGender] = useState("")
    const [terms, setTerms] = useState(false)
    const [card, setCard] = useState(null)

    const submitHandler = (e) => {
        e.preventDefault()
        setCard({ name, email, age, course, gender })

        setName("")
        setEmail("")
        setAge("")
        setCourse("")
        setGender("")
        setTerms(false)
    }

    return(
        <div>
            <form onSubmit={submitHandler}>

                <p>Student Name</p>
                <input value={name} onChange={(e)=>setName(e.target.value)} />
                {name === "" && <p style={{color:"red"}}>Name required</p>}

                <p>Email ID</p>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} />
                {email === "" && <p style={{color:"red"}}>Email required</p>}

                <p>Age</p>
                <input value={age} onChange={(e)=>setAge(e.target.value)} />
                {age === "" && <p style={{color:"red"}}>Age required</p>}

                <p>Course</p>
                <select value={course} onChange={(e)=>setCourse(e.target.value)}>
                    <option value="">Select</option>
                    <option>React</option>
                    <option>Angular</option>
                    <option>Java</option>
                    <option>Python</option>
                </select>
                {course === "" && <p style={{color:"red"}}>Select course</p>}

                <p>Gender</p>
                <input type="radio" name="g" onChange={()=>setGender("Male")} /> Male
                <input type="radio" name="g" onChange={()=>setGender("Female")} /> Female
                {gender === "" && <p style={{color:"red"}}>Select gender</p>}

                <p>
                    <input
                        type="checkbox"
                        checked={terms}
                        onChange={(e)=>setTerms(e.target.checked)}
                    />
                    Accept Terms & Conditions
                </p>

                <button
                    disabled={
                        !terms ||
                        name === "" ||
                        email === "" ||
                        age === "" ||
                        course === "" ||
                        gender === ""
                    }
                >
                    Submit
                </button>
            </form>

            {card &&
                <div>
                    <h3>Admission Card</h3>
                    <p>Name: {card.name}</p>
                    <p>Email: {card.email}</p>
                    <p>Age: {card.age}</p>
                    <p>Course: {card.course}</p>
                    <p>Gender: {card.gender}</p>
                </div>
            }
        </div>
    )
}

export default AdmissionForm
