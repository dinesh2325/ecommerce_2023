import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>User pannel</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
          <NavLink
            to="/dashboard/user/custmizeorders"
            className="list-group-item list-group-item-action"
          >
            Custmized order
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
