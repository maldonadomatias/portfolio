import { createContext, ReactNode, useContext } from "react";
import emailjs from "@emailjs/browser";

interface DataContextType {
  sendEmail: (form: React.MutableRefObject<null>) => Promise<void>;
}

const DataContext = createContext<DataContextType>({} as DataContextType);

interface DataProviderProps {
  children: ReactNode;
}

const DataProvider = ({ children }: DataProviderProps) => {
  const sendEmail = async (form: React.MutableRefObject<null>) => {
    if (!form.current) return;
    await emailjs.sendForm(
      process.env.EMAILJS_SERVICES_ID as string,
      process.env.EMAILJS_TEMPLATE_ID as string,
      form.current,
      process.env.EMAILJS_USER_ID
    );
  };

  const value = {
    sendEmail,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export { DataProvider, useData };
