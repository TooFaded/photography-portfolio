"use client";

import { Label, TextInput } from "flowbite-react";

function Contact() {
  return (
    <div className="flex max-w-md flex-col gap-4 justify-start sm:mx-auto mx-6 h-screen p-6 ">
      <h1 className="text-3xl text-center mt-12 font-light">Contact Me</h1>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="small" value="Name" />
        </div>
        <TextInput id="small" sizing="sm" type="text" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="base" value="Email" />
        </div>
        <TextInput id="base" sizing="md" type="text" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="large" value="Message" />
        </div>
        <TextInput id="large" sizing="lg" type="text" />
      </div>
    </div>
  );
}

export default Contact;
