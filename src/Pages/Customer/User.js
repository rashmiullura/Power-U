import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function User() {
    return(
      <div className="user">
      <DropdownButton title="" className="drop"> 
      <Dropdown.Item href="#/action-1">My Account</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Log out</Dropdown.Item>
      
    </DropdownButton>
    </div>
   );
  }
  
  export default User;