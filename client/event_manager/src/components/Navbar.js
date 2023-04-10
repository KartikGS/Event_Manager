import { NavLink } from 'react-router-dom';

function Navbar(){
    return(
        <div className="list-group">
            <NavLink to="/home" className="list-group-item list-group-item-action" activeClassName="active" aria-current="true">Home</NavLink>
            <NavLink to="/new_user" className="list-group-item list-group-item-action" activeClassName="active" aria-current="true">New User</NavLink>
            <NavLink to="/login" className="list-group-item list-group-item-action" activeClassName="active" aria-current="true">Login</NavLink>
            <NavLink to="/add_events" className="list-group-item list-group-item-action" activeClassName="active" aria-current="true"> Add event</NavLink>
            <NavLink to="/update_user_info" className="list-group-item list-group-item-action" activeClassName="active" aria-current="true">Update User Info</NavLink>
        </div>
    )
}

export default Navbar;