import React from "react";
import uniqid from "uniqid";

const Overview = (props) => {
    const {tasks} = props;

    return (
        <ul>
            {tasks.map((task)=> {//NB:React always requires you to add a unique key to each element when you map over a list.
                return <li key={uniqid()}>{task}</li>;
            }
            )}
        </ul>
    );
};

export default Overview;