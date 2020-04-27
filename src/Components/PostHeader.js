import React, { Component } from 'react';
import { formatScore } from '../Utils/stringUtils';
import '../Styles/PostHeader.css';

class PostHeader extends Component {
    render() {
        const { subreddit, title, score } = this.props;
        return (
            <div id="post-header">
                <div id="subreddit-name">
                    <span>
                        {subreddit}
                    </span>
                </div>
                <div id="upvotes-and-title">
                    <div id="upvotes">
                        <span>
                            {formatScore(score)}
                        </span>
                    </div>
                    <div id="post-title">
                        <span>
                            {title}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostHeader