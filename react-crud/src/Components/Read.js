import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react'
export default function Read() {


    const [apidata, setApiData] = useState([]);

    useEffect(() => {
        axios.get(`https://630614ef697408f7edd23124.mockapi.io/dummyData
        `).then((response) => {
            setApiData(response.data);
            console.log(response.data)
        })

    }, [])
    const setUpdate = (data) => {

        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)


    }

    const getData = () => {
        axios.get(`https://630614ef697408f7edd23124.mockapi.io/dummyData
        `).then((getData) => {
            setApiData(getData.data);
            console.log(getData.data)
        })
    }

    const onDelete = (id) => {
        axios.delete(`https://630614ef697408f7edd23124.mockapi.io/dummyData/${id}`).then(() => {
            getData()
        })

    }




    return (
        <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>FirstName</Table.HeaderCell>
                    <Table.HeaderCell>LastName</Table.HeaderCell>
                    <Table.HeaderCell>CheckBox</Table.HeaderCell>
                    <Table.HeaderCell>Update</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>

                </Table.Row>
            </Table.Header>
            <Table.Body>
                {apidata.map((data) => {
                    return (<Table.Row>
                        <Table.Cell>{data.firstName}</Table.Cell>
                        <Table.Cell>{data.lastName}</Table.Cell>
                        <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                        <Link to="/update"><Table.Cell><Button onClick={setUpdate(data)}>Update</Button></Table.Cell></Link>
                        <Link to="/read">
                            <Table.Cell>
                                <Button onClick={() => onDelete(data.id)}>Delete</Button>
                            </Table.Cell>
                        </Link>
                    </Table.Row>)
                })}


            </Table.Body>
        </Table>
    )
}

