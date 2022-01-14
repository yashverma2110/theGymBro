import React from "react";
import { TextInputProps } from "react-native";
import { Input } from "react-native-elements";

interface FormStateInputProps {
  setFormState: React.Dispatch<any>;
  name: string;
  label: string;
  leftIcon: any;
  isInvalid?: boolean;
  errorMessage?: string;
}

const FormStateInput = ({
  name,
  setFormState,
  isInvalid = false,
  errorMessage = "",
  ...props
}: FormStateInputProps & TextInputProps) => {
  const handleInputChange = (name: string, value: string) => {
    setFormState((formState: any) => ({
      ...formState,
      [name]: value,
    }));
  };

  return (
    <Input
      {...props}
      errorMessage={isInvalid ? errorMessage : ""}
      onChangeText={(text) => handleInputChange(name, text)}
    />
  );
};

export default FormStateInput;
