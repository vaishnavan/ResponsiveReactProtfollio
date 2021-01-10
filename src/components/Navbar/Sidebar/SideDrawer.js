import React from 'react';
import { Icon } from 'semantic-ui-react';
import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <Icon name="cancel" size="large" className="side_navCancel" onClick={props.click} />
      <ul className="side_navItem">
        <li className="side_navList">Home</li>
        <li className="side_navList">About</li>
        <li className="side_navList">Qualification</li>
        <li className="side_navList">Skillls</li>
        <li className="side_navList">Project</li>
        <li className="side_navList">Contact</li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
