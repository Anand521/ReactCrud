
import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory,useNavigate } from 'react-router';

export default function Update() {
    let history = useNavigate();
    const [id, setID] = useState(null);
    const [firstName1, setFirstName] = useState('');
    const [lastName1, setLastName] = useState('');
    const [checkbox1, setCheckbox] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    }, []);
    console.log(firstName1)

    const updateAPIData = () => {
        axios.put(`https://630614ef697408f7edd23124.mockapi.io/dummyData/${id}`, {
            firstName1,
            lastName1,
            checkbox1
        })
            history('/read')
    
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName1} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName1} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox1} onChange={() => setCheckbox(!checkbox1)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}