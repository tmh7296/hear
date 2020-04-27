import React, { Component } from 'react';
import './App.css';
import PostContainer from './Components/PostContainer';
import PostHeader from './Components/PostHeader';
import Error from './Components/Error';
import Spinner from 'react-spinkit';

class App extends Component {
  state = {
    snapshotData: null,
    loading: true,
    commentCount: 0,
    error: false
  };

  componentDidMount() {
    // asynchronously load the data
    const getJson = new XMLHttpRequest();
    getJson.onload = (event) => {
      const { currentTarget : { responseText }} = event;
      try{
        const data = this.nestComments(JSON.parse(responseText));
        this.setState({snapshotData: data});
      } catch (err) {
        this.setState({ error: true});
      } finally {
        this.setState({ loading: false});
      }
    }
    getJson.open('get', './reddit.json', true);
    getJson.send();
  }
  
  nestComments = (data) => {
    // nest comments in a way that makes logical sense to render
    const { comments } = data;
    this.setState({ commentCount: comments.length })
    const commentList = [...comments];
    const commentMap = commentList.reduce((acc, comment) => { 
      acc[comment.id] = comment;
      return acc; 
    }, {});

    // iterate over the comments again and correctly nest the children
    commentList.forEach(comment => {
      if(comment.parent_id) {
        const parent = commentMap[comment.parent_id];
        (parent.children = parent.children || []).push(comment);
      }
    });
    // filter the list to return a list of correctly nested comments
    data.comments = commentList.filter(comment => {
      return comment.parent_id === undefined;
    });
    return data;
}

  render() {
    const { loading, snapshotData, commentCount, error } = this.state;

    return (
      loading ? <Spinner name='circle' id="loading" /> : (
        error ? <Error /> : 
        <div className="App">
          <div id="content">
            <PostHeader
              subreddit={snapshotData.subreddit_name_prefixed}
              title={snapshotData.title}
              score={snapshotData.score}
            />
            <PostContainer comments={snapshotData.comments} body={snapshotData.selftext} commentCount={commentCount}/>
          </div>
        </div>
      )
    );
  }
}

export default App;
