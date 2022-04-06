import React, { useEffect, useState } from 'react'
import axios from "axios";

function Home() {
    const [getBooks, setBooks] = useState([]);

    const headers = {
        Authorization: "Token " + localStorage.getItem("token"),
        Accept: "application/json",
        "Content-Type": "application/json",
    };
    useEffect(() => {
      console.log(localStorage.getItem("token"));
        let data;
        axios.get("http://127.0.0.1:8000/books/", {headers}).then((result) => {
            data = result.data;
            setBooks(data);
        });
    });


    return (
        <>
            <h1>Student View</h1>
            <div className="row ">
                {getBooks.map((e, i) => {
                    return (
                        <div key={i} className="card mb-3" style={{ "maxHeight": "200px" }}>
                            <div className="row g-0">
                               
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Author : {e.author}</h5>
                                        <h6 className="card-text">
                                            Name : {e.name}
                                        </h6>
                                        <h6 className="card-text">
                                            Description : {e.description}
                                        </h6>
                                        <h6 className="card-text">
                                            Price : {e.price}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </>
    )
}

export default Home
