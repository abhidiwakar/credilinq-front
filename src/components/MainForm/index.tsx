"use client";

import uiTheme from "@/context/theme.context";
import mainFormSchema, {
  MainFormInput,
} from "@/validators/main-form.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Container,
  Step,
  StepContent,
  Stepper,
  ThemeProvider,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
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
  const methods = useForm<MainFormInput>({
    mode: "onBlur",
    resolver: zodResolver(mainFormSchema),
  });

  const onSubmit = (data: MainFormInput) => console.log(data);

  return (
    <ThemeProvider theme={uiTheme}>
      <FormProvider {...methods}>
        <Container sx={{ background: "white", paddingY: 5 }}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
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
                disabled={!methods.formState.isValid}
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </Box>
          </form>
        </Container>
      </FormProvider>
    </ThemeProvider>
  );
}
