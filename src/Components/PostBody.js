import React, { Component } from 'react';
import { MdModeComment } from 'react-icons/md';
import '../Styles/PostBody.css';

class PostBody extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="post-body">
                <span>Post Body</span>
                <div id="comment-count"><MdModeComment id="comment-svg"/>Comments</div>
            </div>
        );
    }
}

export default PostBody;