import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/home';
import Login from './Login/login';
import Navbar from './Navbar/nav';
import Sidebar from './Sidebar/sidebar';
import Users from './Users/users';
import Posts from './Posts/posts';
import Category from './Category/category';
import UserDetiles from './UserDetiles/user'
import CreateNewCategory from './CreateNewCategory/create';
import UserPostDetelise from './UserPostDetelise/userPost';
import PostInfo from './PostInfo/postinfo';
import UpdateCategory from './UpdateCategory/updatecategory';


function App() {
  return (
    <Router>
      <Switch>

        <Route path="/login">
          <Navbar />
          <Login />
        </Route>
        <Route path="/homesidebar" >
          <Sidebar />
        </Route>
        <Route path="/createcategory" >
          <CreateNewCategory />
        </Route>
        <Route path="/users" >
          <Sidebar />
          <Users />
        </Route>
        <Route path="/userinfo/:id">
          <UserDetiles />
        </Route>
        <Route path="/postInfo/:id">
          <PostInfo />
        </Route>
        <Route path="/viewuserpost/:id">
          <UserPostDetelise />
        </Route>

        <Route path="/posts" >
          <Sidebar />
          <Posts />
        </Route>
        <Route path="/category" >
          <Sidebar />
          <Category />
          <Route path="/EditCategory/:categoryid">
            <UpdateCategory />
          </Route>
        </Route>
        <Route path="/">
          <Navbar />
          <Home />
        </Route>
      </Switch>
    </Router>


  );
}

export default App;
