import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { FaPenAlt } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { FaPenNib } from "react-icons/fa";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <FaPenNib></FaPenNib>Quotes
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/quotes">
              All Quotes <FaPenAlt></FaPenAlt>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/new-quotes">
              Add a quote<AiOutlinePlus></AiOutlinePlus>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
