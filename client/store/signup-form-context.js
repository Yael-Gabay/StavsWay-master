import React, { createContext, useContext, useState } from "react";

export const FormContext = createContext({
  formData:null,
  updateFormData :()=>{}

});

 const useFormContext = () => {
  const context = useContext(FormContext);
  
  if (!context) {
    throw new Error("useFormContext must be used within a FormContextProvider");
  }
  return context;
};

  const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    phoneNumber: "",
    email: "",
    userType: "", // This can be 'Donator' or 'Volunteer' based on your logic
    city: "",
    street: "",
    houseNumber: "",
    floor: "",
    approvedType: false,
  });

  const updateFormData = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider
