import{ BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ProfileCard from "./components/ProfileCard";
import SinglePost from "./components/SinglePost";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={ProfileCard} path='/about/:slug'/>
        <Route component={About} path='/about'/>
        <Route component={SinglePost} path='/blog/:slug'/>
        <Route component={Blog} path='/blog'/>
        <Route component={Contact} path='/contact'/>
      </Switch>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App;
