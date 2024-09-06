import React, { useEffect } from "react";

const Thoughts = ({ thoughts, removeThoughts }) => {
    const handleRemoveClick = () => {
        removeThoughts(thoughts.id);
    };

    useEffect(() => {
        const timeRemaining = thoughts.expiredAt - Date.now();
        const timeout = setTimeout(() => {
            removeThoughts(thoughts.id);
        }, timeRemaining);
        return () => {
            clearTimeout(timeout);
        };
    }, [removeThoughts, thoughts.expiredAt, thoughts.id]);

    return (
        <li className="Thought">
            <button
                aria-label="Remove thought"
                className="remove-button"
                onClick={handleRemoveClick}
            >
                &times;
            </button>
            <div className="text">{thoughts.text}</div>
        </li>
    );
};

export default Thoughts;
