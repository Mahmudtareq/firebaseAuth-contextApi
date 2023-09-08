/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container mx-auto">
      <h1>This is home {user && <span>{user.displayName}</span>}</h1>
    </div>
  );
};

export default Home;
