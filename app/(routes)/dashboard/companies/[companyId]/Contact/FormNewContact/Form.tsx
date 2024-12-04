"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { useParams, useRouter } from "next/navigation";
import { CirclePlus } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  role: z.string(),
  phone: z.string(),
  email: z.string(),
});

export function DialogButton() {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const params = useParams<{ companyId: string }>();
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      role: "",
      phone: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      axios
        .post(`/api/company/${params.companyId}/contact`, values)
        .then(() => {
          toast({ title: "Contact created", className: "bg-nextui-succes/60"});
          setOpenModalCreate(false);
          router.refresh();
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-nextui-succes m-2 hover:bg-nextui-succes/70 text-background hover:text-background"
        >
          <CirclePlus width={16} height={16} />
          New contact
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Input placeholder="Role" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="+58 424 139 6781" {...field} />
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
                    <Input placeholder="Email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
