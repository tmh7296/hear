import React, { Component } from 'react';
import '../Styles/PostHeader.css';

class PostHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="post-header">
                <div id="subreddit-name">
                    <span>
                        r/subreddit
                    </span>
                </div>
                <div id="upvotes-and-title">
                    <div id="upvotes">
                        <span>
                            20.7k
                        </span>
                    </div>
                    <div id="post-title">
                        <span>
                            Post Title
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostHeader