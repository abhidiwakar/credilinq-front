import MainFormInput from "@/types/main-form";
import { Grid, TextField } from "@mui/material";
import { useFormikContext } from "formik";
import { MuiPhone } from "../ui/PhoneInput";

export default function ApplicantInformationForm() {
  const { getFieldProps, errors, values, setFieldValue, handleBlur } =
    useFormikContext<MainFormInput>();
  const inputDisabled = false;
  return (
    <Grid py={2} spacing={2} container rowSpacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Full Name"
          {...getFieldProps("applicantInfo.fullName")}
          helperText={errors.applicantInfo?.fullName}
          error={Boolean(errors.applicantInfo?.fullName)}
          disabled={inputDisabled}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Position within company"
          {...getFieldProps("applicantInfo.position")}
          helperText={errors.applicantInfo?.position}
          error={Boolean(errors.applicantInfo?.position)}
          disabled={inputDisabled}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Email Address"
          {...getFieldProps("applicantInfo.email")}
          helperText={
            errors.applicantInfo?.email ??
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
          {...getFieldProps("applicantInfo.reEmail")}
          helperText={errors.applicantInfo?.reEmail}
          error={Boolean(errors.applicantInfo?.reEmail)}
          disabled={inputDisabled}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <MuiPhone
          fullWidth
          label="Mobile Number"
          name="applicantInfo.mobile"
          onBlur={() => handleBlur("applicantInfo.mobile")}
          value={values.applicantInfo.mobile}
          onChange={(phone) => setFieldValue("applicantInfo.mobile", phone)}
          helperText={errors.applicantInfo?.mobile}
          error={Boolean(errors.applicantInfo?.mobile)}
        />
      </Grid>
    </Grid>
  );
}
