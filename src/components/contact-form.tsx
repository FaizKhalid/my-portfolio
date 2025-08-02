import React, { useState } from "react";
import { toast } from "sonner";

export const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handle submit clicked");

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill all the fields");
      return;
    }

    // call your API here to submit the form.
    // here's a mock API call for you.
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("API call successful");
      }, 1000);
    });

    if (response) {
      toast.success("Form submitted successfully");
    } else {
      toast.error("Something went wrong");
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="gap5 mx-auto flex max-w-2xl flex-col py-10"
    >
      <div className="mb-4 flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Full name
        </label>
        <input
          id="name"
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Faiz Khalid"
          className="shadow-form focus:ring-primary rounded-md px-2 py-1 text-sm outline-none focus:ring-2"
        />
      </div>

      <div className="mb-4 flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="faiz@example.com"
          className="shadow-form focus:ring-primary rounded-md px-2 py-1 text-sm outline-none focus:ring-2"
        />
      </div>

      <div className="mb-4 flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          name="message"
          onChange={handleChange}
          placeholder="You're crazy good.never change."
          className="shadow-form focus:ring-primary resize-none rounded-md px-2 py-1 text-sm outline-none focus:ring-2"
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-neutral-800 px-4 py-2 text-sm text-white"
      >
        Submit
      </button>
    </form>
  );
};
