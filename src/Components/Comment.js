import React, { Component } from 'react';
import { IoMdTrash } from 'react-icons/io';
import { formatScore, convertUTCtoString, parseTextForNewLines } from '../Utils/stringUtils';
import '../Styles/Comment.css';

class Comment extends Component{
    state = {
        deleted: false
    }

    componentDidMount() {
        const { comment: { author, body }} = this.props;
        if (author === '[deleted]' && body === '[deleted]') {
            this.setState({ deleted: true });
        }
    }

    onDelete = () => {
        this.setState({ deleted: true })
    }

    render() {
        const { comment: {
            author,
            created_utc,
            ups,
            downs,
            body,
            children
        }} = this.props;

        const { deleted } = this.state;

        const replies = (children || []).map(comment => <Comment comment={comment} key={comment.id} />);
        return (
            <div className="comment-container">
                <div className="comment-header">
                    <div className="comment-info">
                        <a className="username">{deleted ? '[deleted]': author}</a>
                        <span className="vote-count">{`${formatScore(ups - downs)} points - `}</span>
                        <span className="timestamp">{convertUTCtoString(created_utc)}</span>
                    </div>
                    <div className="delete-icon">
                        {!deleted && <IoMdTrash onClick={this.onDelete}/>}
                    </div>
                </div>
                <div className="comment-text">
                    {deleted ? <p>[deleted]</p>: parseTextForNewLines(body)}
                </div>
                {replies}
            </div>
        );
    }
}

export default Comment;