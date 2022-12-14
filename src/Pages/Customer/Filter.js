//import Home from "../components/Home";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Filter() {
    return(
        <>
      <DropdownButton id="dropdown-basic-button" title="Filter">
      <Dropdown.Item type="checkbox" href="#/action-1">Capacity</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Brand</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Price</Dropdown.Item>
      <button className="apply btn btn-primary">Apply</button>
    </DropdownButton>
    </>
   );
  }
  
  export default Filter;