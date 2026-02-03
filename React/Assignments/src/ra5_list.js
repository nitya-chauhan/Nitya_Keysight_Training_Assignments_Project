import React from 'react';

function Students() {

    const list = students.map((student) =>
        <div key={student.studid}>
            <h2>{student.studname}</h2>
            <h3>{student.age}</h3>
            <p>{student.city}</p>
        </div>
    );

    return (
        <div>
            <div>{list}</div>
        </div>
    );
}

const students = [
    { studid: 1, studname: "Rahul", age: 20, city: "Delhi" },
    { studid: 2, studname: "Anita", age: 21, city: "Mumbai" },
    { studid: 3, studname: "Karan", age: 22, city: "Pune" },
    { studid: 4, studname: "Sneha", age: 19, city: "Bangalore" }
];

export default Students;
