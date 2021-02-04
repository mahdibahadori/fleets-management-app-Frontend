import "./Sidebar.css";
import on_scooter from "../../assets/on_scooter.svg";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={on_scooter} alt="logo" />
          <h1>fleets</h1>
          <hr />
          <h3>Company Area</h3>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <Link to="/company">Dashboard</Link>
        </div>
        <h2>ACCOUNT</h2>
        <div className="sidebar__link">
          <i className="fa fa-address-book" aria-hidden="true"></i>
          <Link to="/update-company">Update Company Details</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-cog"></i>
          <a href="/">Settings</a>
        </div>
        <h2>DRIVERS</h2>
        <div className="sidebar__link">
          <i className="fa fa-id-card"></i>
          <Link to="/view-all-drivers">View All Drivers</Link>
        </div>
        <h2>VEHICLE</h2>
        <div className="sidebar__link">
          <i className="fa fa-car"></i>
          <a href="/">View Fleet</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-plus"></i>
          <a href="/">Add a Vehicle</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-edit"></i>
          <a href="/">Edit Vehicle</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-minus"></i>
          <a href="/">Remove Vehicle</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-link"></i>
          <a href="/">Assign Driver to Vehicle</a>
        </div>
        <h2>REPORTS</h2>
        <div className="sidebar__link">
          <i className="fa fa-database"></i>
          <a href="/">View Reports</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="/">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
