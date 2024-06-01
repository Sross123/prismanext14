import TableData from "@/components/tableData";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1>
          Next.js 14 CRUD and Search with Prisma MySQL | Tailwindcss DaisyUI
        </h1>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link href={"/employee/create"} className="btn btn-accent btn-outline w-40 rounded-full">Create</Link>
        </div>
        <TableData />
      </div>
    </div>
  );
};

export default Home;
