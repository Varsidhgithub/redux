import React from "react";
import "../css/form.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectProduct, update, userAdded, userUpdated, editForm, valueofupdate } from "../store/reducers/cntReducer";
export default function Form() {

    const dispatch = useDispatch();
    // const history = useHistory();
    const usersAmount = useSelector((state) => state.cnt.value.length);
    const [Id, setId] = useState("");
    const [Name, setName] = useState("");
    const [Price, setPrice] = useState("");
    const [DropValue, setDropValue] = useState("");
    const [person, setperson] = useState([]);
    const userDetails = useSelector(update);
    const editBtnform = useSelector(editForm);

    //  upload IMage
    const [File, setFile] = useState("");
    const uploadImage = async (e) => {
        const image = e.target.files[0];
        const base64 = await convertBase64(image);
        console.log(base64);
        setFile(base64);
    }
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };

        });

    };
    // console.log(userAmount + "= userAmount");
    // console.log(editBtnForm + "= editBtnForm");
    const submit = () => {
        if (editBtnform != 0) {
            dispatch(
                valueofupdate({
                    id: editBtnform,
                    Id,
                    Name,
                    Price,
                    File,
                    DropValue
                })
            );
            if (editBtnform != 0) {
                dispatch(
                    userUpdated(0)
                );
            }
        } else {
            dispatch(
                userAdded({
                    id: usersAmount + 1,
                    Id,
                    Name,
                    Price,
                    File,
                    DropValue
                })
            )
            setId('');
            setName('');
            setPrice('');
            setDropValue('');
            setFile('');
        }
    };

    return (
        <>
            <div className="container body mb-5">
                <div className="login-box mt-5">
                    <h2 >Product Regestration</h2>
                    <form>
                        <div className="user-box">
                            <input
                                type="text"
                                name=""
                                required=""
                                onChange={(e) => setId(e.target.value)}
                            />
                            <label>ID</label>
                        </div>
                        <div className="user-box">
                            <input
                                type="text"
                                name=""
                                required=""
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label>Product Name</label>
                        </div>
                        <div className="user-box">
                            <input
                                type="text"
                                name=""
                                required=""
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            <label>Price</label>
                        </div>
                        <label className='img'>Select Category</label>
                        <select
                            class="form-select bg-dark text-warning mb-4"
                            aria-label="Default select example"
                            onChange={(e) => setDropValue(e.target.value)}
                        >
                            <option selected>select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label className='img'>Image</label>
                        <div className="user-box">
                            <input
                                type="file"
                                name=""
                                required=""
                                className="form-control"
                                onChange={(e) => { uploadImage(e); }}
                            />
                        </div><br />
                        {/* <img src={File} height="100" alt="" /> */}

                        <Link to="/table" className="me-5" onClick={submit}>
                            <span />
                            <span />
                            <span />
                            <span />
                            submit
                        </Link>
                        <Link to="/table">
                            <span />
                            <span />
                            <span />
                            <span />
                            Table
                        </Link>
                    </form>
                </div>

            </div>
        </>
    );
}