"use client";

import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import CustomTextInput from "./CustomTextInput";
import { Button } from "../ui/button";

const AuthenticationForm = ({ signIn }) => {
  const form = useForm({
    defaultValues: signIn
      ? {
          email: "",
          password: "",
        }
      : {
          username: "",
          email: "",
          password: "",
        },
  });

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        className="w-full space-y-8"
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h2 className="h2 text-primary-foreground text-center">
          {signIn ? "ورود" : "ثبت نام"}
        </h2>
        {!signIn && (
          <CustomTextInput
            name="username"
            form={form}
            label="نام کاربری"
            type="text"
          />
        )}
        <CustomTextInput name="email" form={form} label="ایمیل" type="email" />
        <CustomTextInput
          name="password"
          form={form}
          label="رمز عبور"
          type="password"
        />
        <Button
          className="w-full text-lg font-bold text-secondary-foreground bg-[#D9D9D9] hover:bg-[#D9D9D9]/80"
          size="lg"
          type="submit"
        >
          {signIn ? "ورود" : "ثبت نام"}
        </Button>
      </form>
    </Form>
  );
};

export default AuthenticationForm;
