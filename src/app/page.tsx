"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";

const formSchema = z.object({
  emailadress: z
    .string()
    .email({ message: "Entrer une adresse valable" })
    .min(1, { message: "Une addresse e-mail est requise" }),
  name: z
    .string({
      required_error: "Le prénom est requis",
      invalid_type_error: "Prénom doit être une chaîne de caractères",
    })
    .min(1, { message: "Le prénom est requis" }),
  lastname: z
    .string({
      required_error: "Le nom est requis",
      // invalid_type_error: "Nom doit être une chaîne de caractères",
    })
    .min(1, { message: "Le nom est requis" }),
  status: z.enum(["a", "b", "c"], {
    required_error: "Vous devez séléctionner votre status",
  }),
  studea: z.string().optional(),
  where: z.enum(["socialMedia", "Nexity", "residence", "autre"], {
    required_error: "Vous devez séléctionner une option",
  }),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailadress: "",
      name: "",
      lastname: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
    console.log("submit");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <main className=" w-screen h-screen flex flex-col justify-center items-center gap-4">
      <p className=" font-bold text-3xl text-center">
        Clique sur le bouton pour ouvrir la modal !
      </p>
      <button onClick={handleOpenModal} className=" text-xl px-4 py-2 bg-blueGradient rounded-xl ">
        Clique
      </button>
      {isModalOpen && (
        <div className="bg-[rgba(5,31,82,.3)] w-screen h-screen absolute top-0 left-0 flex justify-center items-center text-[#0e225d]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className=" max-w-md w-full flex flex-col gap-4 bg-white p-8 rounded-xl "
            >
              <div className="relative flex justify-center pb-4 mb-4 border-b border-[#f0f5ff] ">
                <p className="font-bold text-lg">KitLeNid - Studéa</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  onClick={handleOpenModal}
                  stroke="currentColor"
                  className="w-6 h-6 absolute right-0 cursor-pointer text-[#0E225D]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field, fieldState }) => {
                    return (
                      <FormItem>
                        <FormLabel>Prenom*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Prenom"
                            type="string"
                            {...field}
                            className={
                              fieldState.invalid ? "border-red-500" : ""
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field, fieldState }) => {
                    return (
                      <FormItem>
                        <FormLabel>Nom*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nom"
                            type="string"
                            {...field}
                            className={
                              fieldState.invalid ? "border-red-500" : ""
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>

              <FormField
                control={form.control}
                name="emailadress"
                render={({ field, fieldState }) => {
                  return (
                    <FormItem>
                      <FormLabel>Adresse e-mail*</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Email Address"
                          type="email"
                          {...field}
                          className={fieldState.invalid ? "border-red-500" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field, fieldState }) => {
                  return (
                    <FormItem>
                      <FormLabel>Status*</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger
                            className={
                              fieldState.invalid ? "border-red-500" : ""
                            }
                          >
                            <SelectValue placeholder="Selectionnez une option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="a">Étudiant</SelectItem>
                          <SelectItem value="b">
                            Étudiant en dernière année
                          </SelectItem>
                          <SelectItem value="c">Jeune actif</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="studea"
                render={({ field, fieldState }) => {
                  return (
                    <FormItem>
                      <FormLabel>
                        Si vous êtes locataire Studéa, dans quelle résidence
                        Studéa habitez-vous ?
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="..."
                          type="string"
                          {...field}
                          className={fieldState.invalid ? "border-red-500" : ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="where"
                render={({ field, fieldState }) => {
                  return (
                    <FormItem>
                      <FormLabel>
                        {" "}
                        Où avez-vous entendu parler de cette offre ?*
                      </FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger
                            className={
                              fieldState.invalid ? "border-red-500" : ""
                            }
                          >
                            <SelectValue placeholder="Selectionnez une option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="socialMedia">
                            Réseau sociaux / Site internet Studéa
                          </SelectItem>
                          <SelectItem value="Nexity">
                            Site internet Nexity
                          </SelectItem>
                          <SelectItem value="residence">
                            En résidence : Flyer / Application Studéa / Écran de
                            la résidence
                          </SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <Button type="submit" className="w-full bg-blueGradient">
                Envoyer
              </Button>
            </form>
          </Form>
        </div>
      )}
    </main>
  );
}
