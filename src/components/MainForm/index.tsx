"use client";

import uiTheme from "@/context/theme.context";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import MainFormInput from "@/types/main-form";
import mainFormSchema from "@/validators/main-form.validator";
import {
  Box,
  Button,
  Container,
  Step,
  StepContent,
  Stepper,
  ThemeProvider,
} from "@mui/material";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import ApplicantInformationForm from "./ApplicantInformationForm";
import CompanyInformationForm from "./CompanyInformationForm";
import StepperLabel from "./StepperLabel";
import TermsAndConditionsForm from "./TermsAndConditionsForm";
import UploadDocumentsForm from "./UploadDocumentsForm";

const steppers = [
  {
    uid: "company-information",
    label: "Company Information",
    component: CompanyInformationForm,
  },
  {
    uid: "applicant-information",
    label: "Applicant Information",
    component: ApplicantInformationForm,
  },
  {
    uid: "upload-documents",
    label: "Upload Documents",
    component: UploadDocumentsForm,
  },
  {
    uid: "terms-conditions",
    label: "Terms & Conditions",
    component: TermsAndConditionsForm,
  },
];

export default function MainForm() {
  const router = useRouter();
  const { trigger, isMutating } = useFormSubmit();
  const handleSubmit = async (values: MainFormInput) => {
    const result = await trigger(values);
    if (result.ok) {
      router.push("/entries");
    }
  };

  return (
    <ThemeProvider theme={uiTheme}>
      <Formik<MainFormInput>
        initialValues={{
          applicantInfo: {
            email: "",
            fullName: "",
            mobile: "",
            position: "",
            reEmail: "",
          },
          companyInfo: {
            name: "",
            uen: "",
          },
          documents: [],
          tnc: false,
        }}
        validateOnMount={false}
        onSubmit={handleSubmit}
        validationSchema={mainFormSchema}
      >
        {(props) => (
          <Container sx={{ background: "white", paddingY: 5 }}>
            <form onSubmit={props.handleSubmit}>
              <Stepper orientation="vertical">
                {steppers.map((step) => (
                  <Step key={step.uid} expanded>
                    <StepperLabel label={step.label} />
                    <StepContent>
                      <step.component />
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              <Box display="flex" justifyContent="end" mt={2}>
                <Button
                  disabled={!props.isValid || isMutating}
                  type="submit"
                  variant="contained"
                >
                  {isMutating ? "Submitting..." : "Submit"}
                </Button>
              </Box>
            </form>
          </Container>
        )}
      </Formik>
    </ThemeProvider>
  );
}
