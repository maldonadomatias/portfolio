import { useState } from "react";

interface FormValues {
  [key: string]: any;
}

interface FormMethods {
  values: FormValues;
  setFieldValue: (field: string, value: any) => void;
  resetForm: () => void;
}

const useForm = (initialValues: FormValues): FormMethods => {
  const [values, setValues] = useState<FormValues>(initialValues);

  const setFieldValue = (field: string, value: any) => {
    setValues((prevValues) => ({ ...prevValues, [field]: value }));
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return { values, setFieldValue, resetForm };
};

export default useForm;
