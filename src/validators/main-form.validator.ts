import { isValidPhone } from "@/utils/core.utils";
import { FieldErrors } from "react-hook-form";
import { z } from "zod";

export const companyInfoSchema = z.object({
  uen: z
    .string()
    .min(1, "Company UEN is required")
    .regex(/^[0-9]{8}[A-Z]$/, { message: "Invalid Company UEN" }),
  name: z.string().min(2, "Minimum 2 characters required"),
});

export const applicantInfoSchema = z
  .object({
    fullName: z.string().min(2, "Minimum 2 characters required"),
    position: z.string().min(2, "Minimum 2 characters required"),
    email: z.string().email("Invalid email address"),
    reEmail: z.string().email("Invalid email address"),
    mobile: z.string().refine((value) => isValidPhone(value), {
      message: "Invalid phone number",
    }),
  })
  .refine((data) => data.email === data.reEmail, {
    message: "Emails do not match",
    path: ["applicantInfo", "reEmail"],
  });

export const documentsSchema = z
  .array(z.string())
  .nonempty()
  .max(6, { message: "Maximum 6 files allowed" });

export const tncSchema = z.boolean().refine((value) => value, {
  message: "Please accept the terms and conditions",
});

const mainFormSchema = z.object({
  companyInfo: companyInfoSchema,
  applicantInfo: applicantInfoSchema,
  documents: documentsSchema,
  tnc: tncSchema,
});

export type MainFormInput = z.infer<typeof mainFormSchema>;

export const fieldHasErrorOrNotTouched = (
  names: string[],
  errors: FieldErrors<MainFormInput>,
  touched: Partial<Readonly<unknown>>
) => {
  return names.some(
    (field) =>
      Object.keys(errors).some((errorFields) =>
        errorFields.startsWith(field)
      ) ||
      !Object.keys(touched).some((touchedField) =>
        touchedField.startsWith(field)
      )
  );
};

export default mainFormSchema;
