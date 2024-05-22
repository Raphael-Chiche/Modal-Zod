"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { studeaVille } from "@/data/citys";

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
  status: z.enum(
    ["étudiant", "étudiant en dernière année", "jeune actif"],
    {
      required_error: "Vous devez séléctionner votre status",
    }
  ),
  studea: z.string().optional(),
  where: z.enum(["socialMedia", "Nexity", "residence", "autre"], {
    required_error: "Vous devez séléctionner une option",
  }),
});

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

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
    <main className="h-full w-full flex flex-col justify-center items-center gap-4">
      <p className=" font-bold text-3xl text-center">
        Clique sur le bouton pour ouvrir la modal !
      </p>
      <button
        onClick={handleOpenModal}
        className=" text-xl px-4 py-2 bg-blueGradient rounded-xl "
      >
        Clique
      </button>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      <p>kjhdsfghkjsdfhjk</p>
      {isModalOpen && (
        <div className="bg-[rgba(5,31,82,.3)] w-full h-full fixed top-0 left-0 flex justify-center items-center text-[#0e225d]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className=" max-w-md w-full flex flex-col gap-2 bg-white p-8 rounded-xl "
            >
              <div className="relative flex justify-center pb-4 mb-4 border-b border-[#f0f5ff] ">
                <p className="font-bold text-lg">Kit le nid - Studéa</p>
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
                          placeholder="Adresse e-mail"
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
                      <FormLabel>Statut*</FormLabel>
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
                          <SelectItem value="étudiant">Étudiant</SelectItem>
                          <SelectItem value="étudiant en dernière année">
                            Étudiant en dernière année
                          </SelectItem>
                          <SelectItem value="jeune actif">Jeune actif</SelectItem>
                        </SelectContent>
                      </Select>
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
                          <SelectItem value="residence">
                            Flyer / Application Studéa / Écran de la résidence
                          </SelectItem>
                          <SelectItem value="socialMedia">
                            Site internet Studéa / Réseau sociaux
                          </SelectItem>
                          <SelectItem value="Nexity">
                            Site internet Nexity
                          </SelectItem>

                          <SelectItem value="autre">Autre</SelectItem>
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
                        Si vous êtes locataire Studéa, dans quelle ville se
                        situe votre résidence ?
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "justify-between border-2 border-inputBlue text-",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? studeaVille.find(
                                    (language) => language.value === field.value
                                  )?.label
                                : "Choisissez votre ville"}
                              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className=" p-0">
                          <Command>
                            <CommandInput
                              placeholder="Cherchez votre résidence..."
                              className="h-9 text-placeholder"
                            />
                            <CommandEmpty>Pas de ville trouvé.</CommandEmpty>
                            <CommandList>
                              {studeaVille.map((language) => (
                                <CommandItem
                                  value={language.label}
                                  key={language.value}
                                  onSelect={() => {
                                    form.setValue("studea", language.value);
                                  }}
                                >
                                  {language.label}
                                  <CheckIcon
                                    className={cn(
                                      "ml-auto h-4 w-4",
                                      language.value === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                </CommandItem>
                              ))}
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
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
