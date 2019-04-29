import React from 'react';

const Message = ({ message, pseudo, isUser }) => {
    if(isUser(pseudo)) {
        return (
            <div className="message">
                <p className="user-message">
                { message }
                </p>
            </div>
        );
    } else {
        return (
            <div className="message">
                <p className="not-user-message">
                <strong>{ pseudo }: </strong>{ message }
                </p>
            </div>
        );
    }

};

export default Message;