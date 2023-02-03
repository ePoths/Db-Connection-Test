import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { users } from "../db";

function mainPage() {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`userPage/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default mainPage;
