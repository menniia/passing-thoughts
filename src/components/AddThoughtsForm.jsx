import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "../utils/utils";

const AddThoughtsForm = (props) => {
    const [text, setText] = useState("");

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        if (text.length > 0) {
            event.preventDefault();
            const thought = {
                id: generateId(),
                text: text,
                expiresAt: getNewExpirationTime(),
            };
            props.addThoughts(thought);
            setText("");
        }
    };

    return (
        <form action="#" className="AddThoughtForm" onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                aria-label="What's on your mind?"
                placeholder="What's on your mind?"
                onChange={handleTextChange}
            />
            <input type="submit" value="Add" />
        </form>
    );
};

export default AddThoughtsForm;
