import React, { Component } from 'react';
import Comment from './Comment';
import '../Styles/PostComments.css';

class PostComments extends Component {
    render() {
        const { comments } = this.props;
        const commentTree = comments.map(comment => <Comment comment={comment} key={comment.id} />);

        return (
            <div id="comments-container">
                {commentTree}
            </div>
        )
    }
}

export default PostComments;