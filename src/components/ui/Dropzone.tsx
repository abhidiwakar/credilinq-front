import { UploadFileOutlined, UploadFileRounded } from "@mui/icons-material";
import { Box, Paper } from "@mui/material";
import { ComponentProps, createRef, forwardRef } from "react";
import { useDropzone } from "react-dropzone";

type Props = {
  disabled?: boolean;
};

function PaperDropzone({ disabled = false }: Props) {
  const { getRootProps, getInputProps } = useDropzone({
    disabled,
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
    onDropRejected(fileRejections, event) {
      console.log(fileRejections);
    },
    maxFiles: 6,
    maxSize: 1024 * 5 * 1000, // 5MB
  });
  const { ref, ...rootProps } = getRootProps();

  return (
    <Box
      {...rootProps}
      sx={{ height: 150, borderStyle: "dashed", backgroundColor: "#F4F4F4" }}
      alignItems="center"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      border={1}
      borderColor={"#E0E0E0"}
      borderRadius={1}
      textAlign="center"
    >
      <input {...getInputProps()} />
      <UploadFileOutlined color={disabled ? "disabled" : "action"} />
      <p style={{ color: disabled ? "gray" : "inherit" }}>
        <span style={{ textDecoration: "underline" }}>Click to upload</span> or
        drag and drop Bank Statements
      </p>
    </Box>
  );
}

export default PaperDropzone;
