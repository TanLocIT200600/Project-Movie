import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserTemplate from "./Templates/UserTemplate";
import Detail from "./Pages/Details";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import BookingTicket from "./Pages/BookingTicket";
import BookingTemplate from "./Templates/bookingTemplate/bookingTemplate";
import Loading from "./Components/Loading";
import Profile from "./Pages/Profile";
import News from "./Pages/News";



function App() {
  return (
    <BrowserRouter>
      <Loading/>
      <Switch>
        <UserTemplate path="/signin" Component={SignIn} />
        <UserTemplate path="/signup" Component={SignUp} />
        <UserTemplate path="/profile" Component={Profile} />
        <BookingTemplate path="/booking/:id" Component={BookingTicket}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/news" component={News}/>
        <Route exact path="/detail/:id" component={Detail}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
