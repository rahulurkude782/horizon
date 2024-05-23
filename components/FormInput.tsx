import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/constants";
import { Input } from "./ui/input";

const formSchema = authFormSchema("sign-up");

interface Props {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  type?: string;
  placeholder: string;
}

const FormInput = ({ control, name, label, placeholder, type }: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              className="input-class"
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage className="form-message" />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
