// ACCESSO UTENTE = SIGNIN
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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useLanguages } from '../../context/LanguageContext';
import { translate } from '../../../utils/translations';

const FormSchema = z.object({
  email: z.string().min(1, "Email richiesta").email("Email non valida"),
  password: z
    .string()
    .min(1, "Password richiesta")
    .min(8, "La password deve contenere almeno 8 caratteri"),
});

const AccediForm = () => {

  const { language } = useLanguages();


  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const signInDati = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect:false,
    });
    
    if(signInDati?.error){
      console.log(signInDati.error)
    }else{
      router.refresh()
      router.push('/admin')
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            // NAME CHE SERVE PER LA RACCOLTA DATI
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder={translate('placeholderPw',language)}
                    type="email"
                    {...field}
                    autoComplete="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            // NAME CHE SERVE PER LA RACCOLTA DATI
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={translate('logInForm1',language)}
                    {...field}
                    autoComplete="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full mt-6 " type="submit">
          {translate('logIn',language)}
        </Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        {translate('Or',language)}
      </div>
      <GoogleSignInButton>{translate('logInGoogle',language)}</GoogleSignInButton>
      <p className="text-center text-sm text-gray-600 mt-2">
        {translate("inviteToSub",language)}
        <Link className="text-blue-500 hover:underline" href="/iscriviti">
          {" "}
          {translate("linkSub",language)}
        </Link>
      </p>
    </Form>
  );
};

export default AccediForm;
