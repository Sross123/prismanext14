'use server'
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const EmployeeSchema = z.object({
  name: z.string().min(6),
  email: z.string().min(6),
  phone: z.string().min(11),
});

export const SaveEmployee = async (prevState: any, formData: FormData) => {
  const validateFields = EmployeeSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validateFields.success) {
    return {
      Error: validateFields.error.flatten().fieldErrors,
    };
  }

  try {
    console.log("Success");
  } catch (error) {
    return {
        message: "Failed to create new employee"
    }
  }
  revalidatePath("/employee");
  redirect("/employee")
};
