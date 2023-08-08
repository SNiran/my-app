import React from "react";

const formContext = React.createContext();

const FormProvider = ({ children }) => {
  const [form, setForm] = React.useState({
    name: "",
    date: "",
    time: "",
    guest: "",
    occasion: "Occasion",
  });

  return (
    <formContext.Provider value={{ form, setForm }}>
      {children}
    </formContext.Provider>
  );
};
export const useForm = () => React.useContext(formContext);

export default FormProvider;
