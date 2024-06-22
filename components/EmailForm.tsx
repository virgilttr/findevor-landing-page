"use client";

import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem } from "./ui/form";
import { useState } from "react";
import posthog from "posthog-js";

interface EmailFormProps {
  buttonStyle?: "blue" | "black";
}

const formSchema = z.object({
  email: z.string().email(),
});

export const EmailForm: React.FC<EmailFormProps> = ({
  buttonStyle = "blue",
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<{ email: string }>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    //We can save the email to a database here
    //using the values.email
    //but for now, I don't know how to do that
    console.log(values);

    // Track the event
    posthog.capture("Signed Up", { email: values.email });
    posthog.identify(values.email);

    // Simulate a delay to show the success message
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  }

  return (
    <>
      {isSubmitted ? (
        <div className="rounded border-2 text-black border-green-500 bg-green-100 p-4">
          <p className="text-center text-sm">
            Thank you for signing up! Our team will soon provide you with free
            access to our automation tool
          </p>
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-center justify-center space-x-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="text-black"
                    {...field}
                  />
                </FormItem>
              )}
            />
            <Button
              name="sign-up"
              type="submit"
              size={"lg"}
              className={`${
                buttonStyle === "blue"
                  ? "bg-[#3C65FB] text-white hover:bg-white hover:text-black"
                  : "bg-black text-white hover:bg-white hover:text-black"
              } font-semibold`}
            >
              Sign-up
            </Button>
          </form>
        </Form>
      )}
    </>
  );
};
