import React, {createContext, useState, useContext} from 'react';

// Create a context with an empty object as default value
const FormContext = createContext({});

export const FormProvider = ({children}) => {
  const [formData, setFormData] = useState({});

  return (
    <FormContext.Provider value={{formData, setFormData}}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
