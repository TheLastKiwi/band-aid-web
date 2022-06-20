export const Navbar = () =>{
    return(
      <div>
          {localStorage.getItem("jwt")== null ?
              <div><a href={"/register"}>Register </a>
                  ---
                  <a href={"/login"}> Login</a>
                  ---
                  <a href={"/search"}> Search</a>
              </div> :
              <a href={""} onClick={()=>localStorage.removeItem("jwt")}>Log out</a>
          }
      </div>

    );
}