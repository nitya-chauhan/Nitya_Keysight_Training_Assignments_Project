import React, { useRef } from 'react'
 
function CourseFeedbackForm(){
 
    const nameRef = useRef(null);
    const courseRef = useRef(null);
    const feedbackRef = useRef(null);
    const ratingRef = useRef(null);
 
    const handleSubmit = (event) =>{
        event.preventDefault();
 
        alert(
            `Name: ${nameRef.current.value}
Course: ${courseRef.current.value}
Feedback: ${feedbackRef.current.value}
Rating: ${ratingRef.current.value}`
        )
 
        nameRef.current.value = "";
        courseRef.current.value = "";
        feedbackRef.current.value = "";
        ratingRef.current.value = "";
    }
 
    return(
        <form onSubmit={handleSubmit}>

            <h2>Course Feedback Form</h2>
 
            <p>Student Name:</p>
            <input type="text" ref={nameRef} />
 
            <p>Course Name:</p>
            <input type="text" ref={courseRef} />
 
            <p>Feedback Message:</p>
            <textarea ref={feedbackRef}></textarea>
 
            <p>Rating (1-5):</p>
            <input type="number" min="1" max="5" ref={ratingRef} />
 
            <br/><br/>
            <button type="submit">Submit</button>
        </form>
    )
}
 
export default CourseFeedbackForm;
