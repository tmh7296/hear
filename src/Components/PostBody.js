import React, { Component } from 'react';
import { MdModeComment } from 'react-icons/md';
import { parseTextForNewLines } from '../Utils/stringUtils';
import '../Styles/PostBody.css';

class PostBody extends Component {
    render() {
        const { body, commentCount } = this.props;

        return (
            <div id="post-body">
                {parseTextForNewLines(body)}
                <div id="comment-count"><MdModeComment id="comment-svg"/>{`${commentCount} Comments`}</div>
            </div>
        );
    }
}

export default PostBody;