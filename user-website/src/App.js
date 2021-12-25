
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/home';
import Navebar from './Navebar/nav';
import PostsLandPage from './PostsLandPage/posts';
import Login from './Login/login';
import Nav from './Nav/navbar';
import Posts from './Posts/post';
import MyPost from './MyPost/mypost';
import InformationPost from './InformationPost/infopost';
import SingUp from './SignUp/signup';
import CreatePost from './CreatePost/createpost';
import UpdatePost from './UpdetePost/updatepost';
import Profile from './Profile/profile';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/createpost">
          <Nav />
          <CreatePost />
        </Route>
        <Route path="/signup">
          <Navebar />
          <SingUp />
        </Route>
        <Route path="/profile">
          <Nav />
          <Profile/>
        </Route>
        <Route path="/updatepost/:id">
          <UpdatePost />
        </Route>
        <Route path="/infopost/:id">
          <InformationPost />
        </Route>
        <Route path="/mypost">
          <Nav />
          <MyPost />
        </Route>
        <Route path="/homePost">
          <Nav />
          <Posts />
        </Route>
        <Route path="/login">
          <Navebar />
          <Login />
        </Route>
        <Route path="/post">
          <Navebar />
          <PostsLandPage />
        </Route>
        <Route path="/">
          <Navebar />
          <Home />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
