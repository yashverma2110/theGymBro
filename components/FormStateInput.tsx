import React from "react";
import { TextInputProps } from "react-native";
import { Input } from "react-native-elements";

interface FormStateInputProps {
  setFormState: React.Dispatch<any>;
  name: string;
  label: string;
  leftIcon: any;
}

const FormStateInput = ({
  name,
  setFormState,
  ...props
}: FormStateInputProps & TextInputProps) => {
  const handleInputChange = (name: string, value: string) => {
    setFormState((formState: any) => ({
      ...formState,
      [name]: value,
    }));
  };

  return (
    <Input {...props} onChangeText={(text) => handleInputChange(name, text)} />
  );
};

export default FormStateInput;
