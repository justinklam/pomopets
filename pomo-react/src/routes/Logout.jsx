import React, {useContext} from 'react';
import { SessionsContext } from "../context/SessionsContext";
import { useNavigate } from "react-router-dom";
import { logout } from "../helpers/helpers"

export default function Logout() {
  const [session, setSession] = useContext(
    SessionsContext
  );

  let navigate = useNavigate();

  setSession({state: null});
  navigate("/");
  logout();
  console.log('logged out')
  return(
    <></>
  );
};