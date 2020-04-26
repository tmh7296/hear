import React, { Component } from 'react';
import { IoMdTrash } from 'react-icons/io';
import '../Styles/Comment.css';

class Comment extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="comment-container">
                <div className="comment-header">
                    <div className="comment-info">
                        <a href="#" className="username">username</a>
                        <span className="vote-count">982</span>
                        <span className="timestamp">8 hours ago</span>
                    </div>
                    <div className="delete-icon">
                        <IoMdTrash />
                    </div>
                </div>
                <div className="comment-text">
                    <span>Comment text</span>
                </div>
            </div>
        );
    }
}

export default Comment;