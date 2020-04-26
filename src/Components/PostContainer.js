import React, { Component } from 'react';
import PostBody from './PostBody';
import PostComments from './PostComments';
import '../Styles/PostContainer.css';

class PostContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="post-container">
                <PostBody />
                <PostComments />
            </div>
        );
    }
}

export default PostContainer;