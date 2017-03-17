import React from 'react';

import Cheese from './cheese';

export default class CheeseList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const cheeses = ["bath blue", "barkham blue", "buxton blue"].map((cheese, i) =>
            <Cheese cheese={cheese} key={cheese}/>
        )
        return (
            <div className="cheese-list">
                {cheeses}
            </div>
        );
    }
}
