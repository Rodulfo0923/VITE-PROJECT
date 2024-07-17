import React from 'react';
import Student from './Student';

const Students = () => {
    // 3. Data Setup
    const students = [
        { name: 'Vincent Oros', department: 'Science', finalGrade: 85, status: 'Pass' },
        { name: 'James Sismar', department: 'Arts', finalGrade: 92, status: 'Pass' },
        { name: 'March Anthony Dela Pena', department: 'Commerce', finalGrade: 78, status: 'Pass' },
        { name: 'March Anton Dela Pena', department: 'Science', finalGrade: 65, status: 'Pass' },
        { name: 'Rodulfo O. Mangila II', department: 'Arts', finalGrade: 88, status: 'Pass' },
        { name: 'Bernadette Requinto', department: 'Commerce', finalGrade: 74, status: 'Pass' },
        { name: 'Russell Candilasa', department: 'Science', finalGrade: 91, status: 'Pass' },
        { name: 'Grace Patulongan', department: 'Arts', finalGrade: 82, status: 'Pass' },
        { name: 'Hank Delantar', department: 'Commerce', finalGrade: null, status: 'Fail' },
        { name: 'Ivy Padayao', department: 'Science', finalGrade: null, status: 'Fail' },
    ];

    return (
        <div>
            <h1>Student Directory</h1>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Student Names</th>
                        <th>Department</th>
                        <th>Final Grade</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <Student key={index} index={index} student={student} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Students;
