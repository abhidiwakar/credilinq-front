import { MainFormInput } from "@/validators/main-form.validator";
import { Grid, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { MuiPhone } from "../ui/PhoneInput";

export default function ApplicantInformationForm() {
  const {
    register,
    control,
    getValues,
    formState: { errors, touchedFields },
  } = useFormContext<MainFormInput>();
  const inputDisabled =
    Object.keys(errors).some((field) => field.startsWith("companyInfo")) ||
    !Object.keys(touchedFields).some((field) =>
      field.startsWith("companyInfo")
    );

  return (
    <Grid py={2} spacing={2} container rowSpacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Full Name"
          {...register("applicantInfo.fullName")}
          helperText={errors.applicantInfo?.fullName?.message}
          error={Boolean(errors.applicantInfo?.fullName)}
          disabled={inputDisabled}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Position within company"
          {...register("applicantInfo.position")}
          helperText={errors.applicantInfo?.position?.message}
          error={Boolean(errors.applicantInfo?.position)}
          disabled={inputDisabled}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Email Address"
          {...register("applicantInfo.email")}
          helperText={
            errors.applicantInfo?.email?.message ??
            "The report will be delivered on this email address"
          }
          error={Boolean(errors.applicantInfo?.email)}
          disabled={inputDisabled}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Re-enter Email Address"
          {...register("applicantInfo.reEmail")}
          helperText={errors.applicantInfo?.reEmail?.message}
          error={Boolean(errors.applicantInfo?.reEmail)}
          disabled={inputDisabled}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Controller
          control={control}
          name="applicantInfo.mobile"
          render={({ field }) => (
            <MuiPhone
              fullWidth
              label="Mobile Number"
              {...field}
              helperText={errors.applicantInfo?.mobile?.message}
              error={Boolean(errors.applicantInfo?.mobile)}
            />
          )}
          disabled={inputDisabled}
        />
      </Grid>
    </Grid>
  );
}
