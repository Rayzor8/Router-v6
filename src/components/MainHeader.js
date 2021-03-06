import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';
console.log(classes)
const MainHeader = () => {
   return (
      <header className={classes.header}>
         <nav>
            <ul>
               <li>
                  <NavLink className={(navData)=> navData.isActive ? classes.active : '' } to="/welcome">
                     Welcome
                  </NavLink>
               </li>
               <li>
                  <NavLink className={(navData)=> navData.isActive ? classes.active : ''} to="about">
                     About Products
                  </NavLink>
               </li>
               <li>
                  <NavLink className={(navData)=> navData.isActive ? classes.active : ''} to="/products">
                     Products
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default MainHeader;
