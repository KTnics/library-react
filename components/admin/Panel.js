import React, { useEffect, useState } from "react";
import axios from "axios";
import { updateBook, deleteBook, addBook } from '../api/API';

export default function Panel() {
    const [getBooks, setBooks] = useState([]);
    const [bookid, setbookid] = useState();
    const [author, setauthor] = useState('')
    const [name, setname] = useState();
    const [description, setdescription] = useState();
    const [price, setprice] = useState('');
    const headers = {
        Authorization: "Token " + localStorage.getItem("token"),
        Accept: "application/json",
        "Content-Type": "application/json",
    };
    useEffect(() => {
        let data;
        axios.get("http://127.0.0.1:8000/books/",{headers}).then((result) => {
            data = result.data;
            setBooks(data);
        });
    });

    function create(e) {
        e.preventDefault();
        addBook(name, author, description, price)
    }
    function update(e) {
        e.preventDefault();
        updateBook(bookid, name, description)
    }
    function deletee(bookid) {
        deleteBook(bookid)
    }
    return (
        <>
            <h1>Admin Panel</h1>
            <button type="button" className="" data-bs-toggle="modal" data-bs-target="#staticBackdropCreate">Create New Book Record</button>
            <div className="row">
                <table  >
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Author</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col"> </th>
                            <th scope="col"> </th>

                        </tr>
                    </thead>
                    {getBooks.map((e, i) => (
                        <tbody key={i}>
                            <tr>
                                <td>{i}</td>
                                <td>{e.name}</td>
                                <td>{e.author}</td>
                                <td>{e.description}</td>
                                <td>{e.price}</td>
                                <td><button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => { setbookid(e.id) }}>Update</button></td>
                                <td><button type="button" className="btn btn-danger" onClick={() => { deletee(e.id) }}>Delete</button></td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>

            <div className="modal fade" id="staticBackdropCreate" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropCreateLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropCreateLabel">Create New Book Record</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={create}>
                                <div className="form-group  my-2">
                                    <label htmlFor="exampleInputEmail1">Name</label>
                                    <input
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                        placeholder="name"
                                        value={name}
                                        onChange={(e) => setname(e.target.value)}
                                    />
                                </div>
                                <div className="form-group  my-2">
                                    <label htmlFor="exampleInputEmail1">Author</label>
                                    <input
                                        className="form-control"
                                        aria-describedby="author"
                                        placeholder="author"
                                        value={author}
                                        onChange={(e) => setauthor(e.target.value)}
                                    />
                                </div>

                                <div className="form-group my-2">
                                    <label htmlFor="exampleInputPassword1">Description</label>
                                    <input
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="description"
                                        value={description}
                                        onChange={(e) => setdescription(e.target.value)}
                                    />
                                </div>
                                <div className="form-group  my-2">
                                    <label htmlFor="exampleInputEmail1">Price</label>
                                    <input
                                        className="form-control"
                                        aria-describedby="price"
                                        placeholder="price"
                                        value={price}
                                        onChange={(e) => setprice(e.target.value)}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary my-2">
                                    Create
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Update Book Number : {bookid}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={update}>
                                <div className="form-group  my-2">
                                    <label htmlFor="exampleInputEmail1">Name</label>
                                    <input
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                        placeholder="name"
                                        value={name}
                                        onChange={(e) => setname(e.target.value)}
                                    />
                                </div>

                                <div className="form-group my-2">
                                    <label htmlFor="exampleInputPassword1">Description</label>
                                    <input
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="description"
                                        value={description}
                                        onChange={(e) => setdescription(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary my-2">
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
