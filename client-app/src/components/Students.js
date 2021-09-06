import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import './App.css';

const GET_STUDENTS = gql`
  query GetAllStudents {
    students {
      id,
      name,
      email,
      age
    }
  }
`;

const ADD_STUDENT = gql`
  mutation AddStudent($id: Int!, $email: String!, $age: Int!, $name: String!) {
    addStudent(
        input: {id: $id, name: $name, email: $email, age: $age}
    ) {
      id
      name
    }
  }
`;

function Students() {
    const { loading, error, data } = useQuery(GET_STUDENTS);
    const [addStd] = useMutation(ADD_STUDENT);
    if (loading)
        return <h1>Loading ...</h1>

    if (error)
        return <h1>Error</h1>

    const { students } = data;

    return (
        <div align = "center">
            <h1>Student List</h1>
            <table border="5" width="500">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody align = "center">
                    {
                        students.map((std, ind) => {
                            return (<tr key={ind}>
                                <td>{std.name}</td>
                                <td>{std.age}</td>
                                <td>{std.email}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>

            <button onClick={() =>
                addStd({
                    variables: {
                        id: 21, email: "jopebiden@gmail", age: 23, name: "biden"
                    },
                    refetchQueries: [{ query: GET_STUDENTS }]

                })
            } className="Butt">
                Add Student</button>
        </div>
    );
}

export default Students;