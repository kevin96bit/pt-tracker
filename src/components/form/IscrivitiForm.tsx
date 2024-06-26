// REGISTRAZIONE UTENTE = SIGNUP
"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import GoogleSignInButton from "../GoogleSignInButton";
import { useRouter } from "next/navigation";

import { useLanguages } from '../../context/LanguageContext';
import { translate } from '../../../utils/translations';

const FormSchema = z
  .object({
    username: z.string().min(1, "l'username è richiesto").max(100),
    email: z.string().min(1, "Email richiesta").email("Email non valida"),
    password: z
      .string()
      .min(1, "Password richiesta")
      .min(8, "La password deve contenere almeno 8 caratteri"),
    confermaPassword: z.string().min(1, "Conferma la tua password"),
  })
  .refine((data) => data.password === data.confermaPassword, {
    path: ["confermaPassword"],
    message: "Le password non corrispondono",
  });

// sign up form
  const IscrivitiForm = () => {

    const { language } = useLanguages();


  const router = useRouter();
    const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confermaPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch("/api/user", {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
      })
    })
    if (response.ok) {
      router.push("/accedi");
    } else {
      console.error("La registrazione non è andata a buon fine");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder={translate('placeholderUser',language)} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder={translate("PlaceHolderEmailSu",language)}
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={translate('placeHolderPwSu',language)}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confermaPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{translate('repeatPw',language)}</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={translate('placeHolderRepeatPw',language)}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full mt-6 " type="submit">
          {translate('signUp',language)}
        </Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
       {translate('orSu',language)}
      </div>
      <GoogleSignInButton> {translate('subByGoogle',language)} </GoogleSignInButton>
      <p className="text-center text-sm text-gray-600 mt-2">
        {translate('inviteToLogIn',language)}
        <Link className="text-blue-500 hover:underline" href="/accedi">
          {" "}
          {translate('linkLog',language)}
        </Link>
      </p>
    </Form>
  );
};

export default IscrivitiForm;
