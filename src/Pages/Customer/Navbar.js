import User from "./User";
import{Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar justify-content-between">
        <div className="navbar-brand" style={{ marginLeft: "40px" }}>
       
          <img
            src="./images/userfinal.png"
            width="100px"
            height="auto"
            alt="user"
          />
          <User/>
         
        </div>
        <form>
          <div className="search-bar">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-primary"
              type="submit"
              style={{ marginLeft: "10px" }}
            >
              Search
            </button>
          </div>
        </form>
        <Link
                  to='/cart'
                  className='btn-link'
                >
        <div >
        <img
            src="./images/cart.png"
            width="100px"
            height="auto"
            alt="user"
          />
          </div>
          </Link>
      </nav>
    </div>
  );
}

export default Navbar;
