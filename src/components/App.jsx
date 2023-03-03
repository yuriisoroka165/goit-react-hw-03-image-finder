import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
// import css from "./App.module.css";
// import Modal from "./Modal";

class App extends Component {
    state = {};

    // componentDidMount() {
    //     const contacts = localStorage.getItem("contacts");
    //     const parsedContacts = JSON.parse(contacts);
    //     if (parsedContacts) {
    //         this.setState({ contacts: parsedContacts });
    //     }
    // };

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.contacts !== prevState.contacts) {
    //         localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    //     }
    // };

    handleFormSubmit() {
        console.log("ok");
    }

    render() {
        return (
            <Searchbar onSubmit={this.handleFormSubmit} />
        );
    }
}

export default App;
