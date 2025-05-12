"use client";

import { useForm } from "react-hook-form";
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
import Tag from "@/types/tag";
import { Textarea } from "@/components/ui/textarea";
import { createTag } from "@/lib/actions/add-tag.actions";
import { insertTagSchema } from "@/lib/validations/TagSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const AddTag = () => {
  const form = useForm<z.infer<typeof insertTagSchema>>({
    resolver: zodResolver(insertTagSchema),
    defaultValues: {
      name: "",
      description: ""
    }
  })

  const onSubmit = async (data: Tag) => {
    await createTag(data);
  }

  return (
    <div>
      <Form { ...form }>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input { ...field } />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            >
          </FormField>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter a description"
                    className="min-h-32"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
}

export default AddTag;