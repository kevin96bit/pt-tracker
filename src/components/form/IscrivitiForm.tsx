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

const FormSchema = z.object({
  username: z.string().min(1, "l'username è richiesto").max(100),
  email: z.string().min(1, "Email richiesta").email("Email non valida"),
  password: z
    .string()
    .min(1, "Password richiesta")
    .min(8, "La password deve contenere almeno 8 caratteri"),
  confermaPassword: z.string().min(1, "Conferma la tua password"),
})
.refine((data)=>data.password === data.confermaPassword, {
  path:['confermaPassword'],
  message:"Le password non corrispondono",
})

const IscrivitiForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues:{
      username:'',
      email:'',
      password:'',
      confermaPassword:'',
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
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
                  <Input placeholder="Inserisci username" {...field} />
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
                    placeholder="email@esempio.com"
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
                    placeholder="Inserisci la tua password"
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
                <FormLabel>Ripeti Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Ripeti Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full mt-6 " type="submit">
          Iscriviti
        </Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        Oppure
      </div>
      <GoogleSignInButton>Iscriviti con Google</GoogleSignInButton>
      <p className="text-center text-sm text-gray-600 mt-2">
        Se hai già un account,
        <Link className="text-blue-500 hover:underline" href="/accedi">
          {" "}
          Accedi
        </Link>
      </p>
    </Form>
  );
};

export default IscrivitiForm;
