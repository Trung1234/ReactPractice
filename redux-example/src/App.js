import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { PostsList } from './features/posts/PostsList'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { EditPostForm } from './features/posts/EditPostForm'
import BaseLayout from './features/common/BaseLayout';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<BaseLayout />}>
            <Route path="/" element={<PostsList />} />
            <Route path="/:postId" element={<SinglePostPage/>} />
            <Route  path="/editPost/:postId" element={<EditPostForm/>} />
          </Route>       
        </Routes>
      </BrowserRouter>
  );
}

export default App;
