import MainFormInput from "@/types/main-form";
import { Grid, TextField } from "@mui/material";
import { useFormikContext } from "formik";

export default function CompanyInformationForm() {
  const { getFieldProps, errors } = useFormikContext<MainFormInput>();
  return (
    <Grid py={2} container spacing={2} rowSpacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Comapny UEN"
          {...getFieldProps("companyInfo.uen")}
          helperText={errors.companyInfo?.uen}
          error={Boolean(errors.companyInfo?.uen)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Comapny Name"
          {...getFieldProps("companyInfo.name")}
          helperText={errors.companyInfo?.name}
          error={Boolean(errors.companyInfo?.name)}
        />
      </Grid>
    </Grid>
  );
}
