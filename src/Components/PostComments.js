import React, { Component } from 'react';
import Comment from './Comment';
import '../Styles/PostComments.css';

class PostComments extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="comment-container">
                <Comment />
                <Comment />
                <Comment />
            </div>
        )
    }
}

export default PostComments;