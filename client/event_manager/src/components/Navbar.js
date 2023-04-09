function Navbar(){
    return(
        <div class="list-group">
          <a href="/home" class="list-group-item list-group-item-action">Home</a>
          <a href="new_user" class="list-group-item list-group-item-action">New User</a>
          <a href="login" class="list-group-item list-group-item-action">Login</a>
          <a href="add_events" class="list-group-item list-group-item-action active" aria-current="true"> Add event</a>
          <a href="update_user_info" class="list-group-item list-group-item-action">Update User Info</a>
        </div>
    )
}

export default Navbar