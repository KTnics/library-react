import axios from "axios";

const headers = {
    Authorization: "Token " + localStorage.getItem("token"),
    Accept: "application/json",
    "Content-Type": "application/json",
};

export const deleteBook = async (
    bookid
) => {
    await axios
        .delete(
            "http://127.0.0.1:8000/books/" + bookid + "/",
            { headers }
        )
        .then((result) => {
            console.log('book deleted');
        });
};

export const updateBook = async (
    bookid, name, description
) => {
    await axios
        .patch(
            "http://127.0.0.1:8000/books/" + bookid + "/",
            { name, description },
            { headers }
        )
        .then((result) => {
            console.log('book updated');
        });
};

export const addBook = async (
    name, author, description, price
) => {
    await axios
        .post(
            "http://127.0.0.1:8000/books/",
            { name, author, description, price },
            { headers }

        )
        .then((result) => {
            console.log('book record created');
        });
};

export const signin = async (username, password, setisloggedin) => {
    await axios
        .post(
            "http://127.0.0.1:8000/profiles/login/",
            { username, password },
            {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        )
        .then((result) => {
            let data = result.data;
            localStorage.setItem("token", data.token);
            console.log("signin successfully");
            window.location.href = "/";
        }).catch((error) => {
            setisloggedin(true);
            console.log("username or password wrong");
        })
};

export const signup = async (
    username,
    first_name,
    last_name,
    email,
    password, setisloggedin
) => {
    await axios
        .post(
            "http://127.0.0.1:8000/profiles/adminaccount/",
            { username, first_name, last_name, email, password },
            {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        )
        .then((result) => {
            console.log("signup successfully");
            window.location.href = "/signin";
        }).catch((error) => {
            setisloggedin(true);
            console.log("username already exists");
        });
};


export const signout = () => {
    localStorage.clear();
    window.location.href = "/";
    console.log("signout");
};