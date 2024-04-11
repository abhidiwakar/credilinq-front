import { isValidPhone } from "@/utils/core.utils";
import * as yup from "yup";

export const companyInfoSchema = yup.object({
  uen: yup
    .string()
    .required("Company UEN is required")
    .matches(/^[0-9]{8}[A-Z]$/, "Invalid Company UEN"),
  name: yup
    .string()
    .min(2, "Minimum 2 characters required")
    .required("Company name is required"),
});

export const applicantInfoSchema = yup.object({
  fullName: yup
    .string()
    .min(2, "Minimum 2 characters required")
    .required("Full name is required"),
  position: yup
    .string()
    .min(2, "Minimum 2 characters required")
    .required("Position is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  reEmail: yup
    .string()
    .email("Invalid email address")
    .required("Email is required")
    .test("email-match", "Emails do not match", function (value) {
      return value === this.parent.email;
    }),
  mobile: yup
    .string()
    .test("phone", "Invalid phone number", isValidPhone)
    .required("Mobile number is required"),
});

export const documentsSchema = yup
  .array()
  .of(yup.string())
  .min(6, "At least 6 file are required")
  .max(6, "Maximum 6 files allowed")
  .required("Please upload 6 files");

export const tncSchema = yup
  .boolean()
  .oneOf([true], "Please accept the terms and conditions")
  .required("Please accept the terms and conditions");

const mainFormSchema = yup.object({
  companyInfo: companyInfoSchema,
  applicantInfo: applicantInfoSchema,
  documents: documentsSchema,
  tnc: tncSchema,
});

export default mainFormSchema;
