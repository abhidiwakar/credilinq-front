import uiTheme from "@/context/theme.context";
import { Done } from "@mui/icons-material";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import PaperDropzone from "../ui/Dropzone";
import { useFormContext } from "react-hook-form";
import {
  MainFormInput,
  fieldHasErrorOrNotTouched,
} from "@/validators/main-form.validator";

const instructions = [
  <>
    PDFs (not scanned copies) of company's operating bank current account(s)
    statements for the past 6 months. Example: If today is 09 Apr 24, then
    please upload bank statements from Oct 23 to Mar 24 (both months inclusive)
  </>,
  <>
    If your company is multi-banked, then please upload 6 months bank statements
    for each bank account
  </>,
  <>
    If your file is password protected, we request you to remove the password
    and upload the file to avoid submission failure
  </>,
  <>
    In case if you are facing any issue while uploading bank statements, Please
    contact us on{" "}
    <a
      style={{ textDecoration: "none", color: uiTheme.palette.primary.main }}
      href="mailto:support@credilinq.ai"
    >
      support@credilinq.ai
    </a>
  </>,
];

export default function UploadDocumentsForm() {
  const {
    formState: { errors, dirtyFields, touchedFields },
  } = useFormContext<MainFormInput>();

  // const inputDisabled =
  //   Object.keys(errors).some(
  //     (field) =>
  //       field.startsWith("companyInfo") || field.startsWith("applicantInfo")
  //   ) ||
  //   !Object.keys(dirtyFields).some(
  //     (field) =>
  //       field.startsWith("companyInfo") || field.startsWith("applicantInfo")
  //   );

  const inputDisabled = fieldHasErrorOrNotTouched(
    ["companyInfo", "applicantInfo"],
    errors,
    touchedFields
  );

  return (
    <Grid container rowSpacing={3} spacing={3} py={2}>
      <Grid item xs={12} sm={6}>
        <PaperDropzone disabled={inputDisabled} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <List>
          {instructions.map((instruction, index) => (
            <ListItem key={index} disablePadding alignItems="flex-start">
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText sx={{ color: "gray" }} primary={instruction} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
