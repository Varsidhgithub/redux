

import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import { useSelector, useDispatch } from "react-redux";
import { selectProduct, userUpdated, Removedetails } from "../store/reducers/cntReducer";
import { Link } from "react-router-dom";


export default function Table() {
    const userDetails = useSelector(selectProduct);
    // console.log(userDetails)

    const dispatch = useDispatch();
    // const removeIndex = useSelector(remove);
    // console.log(removeIndex)
    const editBtn = (i) => {
        let a = i;
        dispatch(userUpdated(a));
    };
    const remove = (i) => {
        dispatch(
            Removedetails(i)
        )
    }
    return (
        <>
            <div className=' mb-5'>
                <h1>Product Details</h1>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">index</th>
                        <th scope="col">id</th>
                        <th scope="col">ProductName</th>
                        <th scope="col">Price</th>
                        <th scope="col">Product Category</th>
                        <th scope="col">Image</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userDetails.map((item) => {
                            return (
                                <>
                                    <tr>
                                        <th scope="row" > {item.id}</th>
                                        <td>{item.Id}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.Price}</td>
                                        <td>{item.DropValue}</td>
                                        <td><img src={item.File} height="100" /></td>
                                        <Link to="/"><td><Button className='me-5' onClick={() => editBtn(item.id)}>update</Button></td></Link>
                                        <td><Button onClick={() => remove(item.id)}>Delete</Button></td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>

            <div>
                <Link to="/">
                    <Button className='form'>Form</Button>
                </Link>
            </div>
        </>
    )
}

