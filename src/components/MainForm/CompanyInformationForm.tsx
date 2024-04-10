import { MainFormInput } from "@/validators/main-form.validator";
import { Grid, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function CompanyInformationForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<MainFormInput>();
  return (
    <Grid py={2} container spacing={2} rowSpacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Comapny UEN"
          {...register("companyInfo.uen")}
          helperText={errors.companyInfo?.uen?.message}
          error={Boolean(errors.companyInfo?.uen)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Comapny Name"
          {...register("companyInfo.name")}
          helperText={errors.companyInfo?.name?.message}
          error={Boolean(errors.companyInfo?.name)}
        />
      </Grid>
    </Grid>
  );
}
