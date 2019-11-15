import React, { Component } from 'react';
import API from "../utils/API";

class List extends Component {
    // Initialize the state
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.getList();
        this.getFood("cheddar cheese");
    }

    // Retrieves the list of items from the Express app
    getList = () => {
        fetch('/api/getList')
        .then(res => res.json())
        .then(list => this.setState({ list }))
    }

    getFood = search => {
        API.getFood(search)
        .then(res => console.log(res));
    }

    render() {
        const { list } = this.state;

        return (
            <div className="App">
                <h1>List of Items</h1>
                {/* Check to see if any items are found */}
                {list.length ? (
                    <div>
                        {/* render the list of items */}
                        {list.map((item) => {
                            return(
                                <div>
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div>
                        <h2>No list items found</h2>
                    </div>
                )}

            </div>
        );
    }
}

export default List;