import React, { Component } from 'react';
import PostBody from './PostBody';
import PostComments from './PostComments';
import '../Styles/PostContainer.css';

class PostContainer extends Component {
    render() {
        const { comments, body, commentCount } = this.props;
        return (
            <div id="post-container">
                <PostBody body={body} commentCount={commentCount}/>
                <PostComments comments={comments} />
            </div>
        );
    }
}

export default PostContainer;