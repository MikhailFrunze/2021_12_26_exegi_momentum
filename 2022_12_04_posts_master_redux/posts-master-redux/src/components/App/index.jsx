import { posts_data } from '../../data/posts';
import { Context } from '../../context';
import { useState, useEffect } from 'react'
import PostsContainer from '../PostsContainer';

function App() {

  const [posts, setPosts] = useState(posts_data);

  return (
    <div className="App">
      <Context.Provider value={{ posts }}>
        <PostsContainer />
      </Context.Provider>
    </div>
  );
}

export default App;
