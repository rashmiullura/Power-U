import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'

function User() {
  return (
    <div className="user">
      <DropdownButton title="User" className="drop">
        <FontAwesomeIcon style={{ padding: '0 1em' }} color="#fff" icon={faUser} />
        <Dropdown.Item href="#/action-1">My Account</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Log out</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default User;