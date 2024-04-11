import uiTheme from "@/context/theme.context";
import MainFormInput from "@/types/main-form";
import { Done } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { useFormikContext } from "formik";

const tncs = [
  <>
    I confirm that I am the authorized person to upload bank statements on
    behalf of my company
  </>,
  <>
    I assure you that uploaded bank statements and provided company information
    match and are of the same company, if there is a mismatch then my report
    will not be generated
  </>,
  <>
    I understand that this is a general report based on the bank statements and
    Credilinq is not providing a solution or guiding me for my business growth
  </>,
  <>
    I have read and understand the{" "}
    <a
      style={{ textDecoration: "none", color: uiTheme.palette.primary.main }}
      href="https://smehealthcheck.credilinq.ai/terms-and-conditions"
      target="_blank"
    >
      Terms & Conditions
    </a>
  </>,
];

export default function TermsAndConditionsForm() {
  const { getFieldProps, errors } = useFormikContext<MainFormInput>();

  return (
    <Box>
      <FormControl>
        <FormGroup>
          <FormControlLabel
            {...getFieldProps("tnc")}
            control={<Checkbox />}
            label="By ticking, you are confirming that you have understood and are agreeing to the details mentioned:"
          />
          <FormHelperText error>{errors.tnc}</FormHelperText>
        </FormGroup>
      </FormControl>
      <List>
        {tncs.map((tnc, index) => (
          <ListItem key={index} disablePadding alignItems="flex-start">
            <ListItemIcon>
              <Done />
            </ListItemIcon>
            <ListItemText sx={{ color: "gray" }} primary={tnc} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
