import uiTheme from "@/context/theme.context";
import { useFileUpload } from "@/hooks/useFileUpload";
import MainFormInput from "@/types/main-form";
import { Done } from "@mui/icons-material";
import {
  Alert,
  Box,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useFormikContext } from "formik";
import { useEffect } from "react";
import PaperDropzone from "../ui/Dropzone";

const instructions = [
  <>
    PDFs (not scanned copies) of company&apos;s operating bank current
    account(s) statements for the past 6 months. Example: If today is 09 Apr 24,
    then please upload bank statements from Oct 23 to Mar 24 (both months
    inclusive)
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
  const { values, setFieldValue, setFieldError, errors } =
    useFormikContext<MainFormInput>();
  const { trigger: uploadFile, isMutating, data } = useFileUpload();

  useEffect(() => {
    if (data && data.data) {
      setFieldValue("documents", [
        ...values.documents,
        ...(data.data.map((file) => file.name) ?? []),
      ]);
    } else {
      setFieldError("documents", data?.message ?? "Failed to upload file");
    }
  }, [data]);

  return (
    <Grid container rowSpacing={3} spacing={3} py={2}>
      <Grid item xs={12} sm={6}>
        <PaperDropzone
          maxFiles={values.documents.length - 6}
          disabled={values.documents.length >= 6}
          uploadFile={uploadFile}
          isMutating={isMutating}
        />
        <Box mt={2}>
          {errors.documents && (
            <Alert variant="filled" severity="error">
              {errors.documents}
            </Alert>
          )}
        </Box>
        <Box mt={2}>
          {values.documents.length > 0 && (
            <List>
              {values.documents.map((file) => (
                <ListItem key={file}>
                  <Chip
                    color="success"
                    label={file}
                    onDelete={() => {
                      setFieldValue(
                        "documents",
                        values.documents.filter((doc) => doc !== file)
                      );
                    }}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Box>
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
