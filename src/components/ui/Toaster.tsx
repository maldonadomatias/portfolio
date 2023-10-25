import { Toaster } from "react-hot-toast";

const CustomToaster = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: "",
        duration: 5000,
        style: {
          background: "var(--foreground-color)",
          color: "var(--background-color)",
        },

        // Default options for specific types
        success: {
          duration: 3000,
          style: {
            background: "var(--foreground-color)",
            color: "var(--background-color)",
          },
          iconTheme: {
            primary: "var(--background-color)",
            secondary: "var(--foreground-color)",
          },
        },
      }}
    />
  );
};

export default CustomToaster;
