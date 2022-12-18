import { posts_data } from '../../data/posts';
import { Context } from '../../context';
import { useState, useEffect } from 'react'
import PostsContainer from '../PostsContainer';
import AddPostForm from '../AddPostForm';
import CommentsContainer from '../CommentsContainer';

function App() {

  const [posts, setPosts] = useState(posts_data);

  return (
    <div className="App">
      <Context.Provider value={{ posts }}>
        <AddPostForm/>
        <PostsContainer />
      </Context.Provider>
    </div>
  );
}

export default App;
