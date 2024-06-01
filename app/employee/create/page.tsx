"use client";
import { SaveEmployee } from "@/lib/action";
import React from "react";
import { useFormState } from "react-dom";

const CreateEmployePage = () => {
  const [state, formAction] = useFormState(SaveEmployee, null);
  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Add New Employee</h1>
      <div>
        <form action={formAction}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-500"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Full Name..."
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-500"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Email"
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.email}</p>
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-500"
            >
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Phone"
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
            </div>
          </div>
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployePage;
