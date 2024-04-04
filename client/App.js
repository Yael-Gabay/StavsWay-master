import React, { useEffect, useState } from "react";
import OpenScreen from "./screens/OpenScreen";
import AuthContextProvider from "./store/auth-context";
import NavContainer from "./nav/NavContainer";
import FormContextProvider from "./store/signup-form-context";
import DonationsContextProvider from "./store/donation-context";
import OrderContextProvider from "./store/order-context";

export default function App() {
  const [showOpenScreen, setShowOpenScreen] = useState(true);

  useEffect(() => {
    // Use a setTimeout to hide the OpenScreen after 1000 milliseconds (1 second)
    setTimeout(() => {
      setShowOpenScreen(false);
    }, 1000);
  }, []);

  return (
    <>
      <AuthContextProvider>
        <FormContextProvider>
          <DonationsContextProvider>
            <OrderContextProvider>
              {showOpenScreen ? <OpenScreen /> : <NavContainer />}
            </OrderContextProvider>
          </DonationsContextProvider>
        </FormContextProvider>
      </AuthContextProvider>
    </>
  );
}
