import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { authStateCahngeUser } from "../redux/auth/authOperations";
import { onRoute } from "../router.js";
import { selectStateChange } from "../redux/selectors";

const Main = () => {
  const stateChange = useSelector(selectStateChange);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateCahngeUser());
  }, []);

  const routing = onRoute(stateChange);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
