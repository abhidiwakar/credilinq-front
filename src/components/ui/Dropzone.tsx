"use client";

import uiTheme from "@/context/theme.context";
import { UploadFileOutlined } from "@mui/icons-material";
import { Box, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

type Props = {
  disabled?: boolean;
  uploadFile: (files: File[]) => void;
  isMutating: boolean;
  maxFiles?: number;
};

function PaperDropzone({
  disabled = false,
  uploadFile,
  isMutating,
  maxFiles,
}: Props) {
  const [hover, setHover] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    disabled: disabled,
    onDrop: (acceptedFiles) => {
      setHover(false);
      uploadFile(acceptedFiles);
    },
    onDropRejected(fileRejections, event) {},
    onDragEnter: () => setHover(true),
    onDragLeave: () => setHover(false),
    onDragOver: () => setHover(true),
    multiple: true,
    maxFiles: maxFiles || 1,
    maxSize: 1024 * 1024 * 5, // 5MB
    accept: {
      "application/pdf": [".pdf"],
    },
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
      borderColor={hover ? uiTheme.palette.primary.main : "#E0E0E0"}
      borderRadius={1}
      textAlign="center"
    >
      {isMutating ? (
        <CircularProgress size={20} />
      ) : (
        <>
          <input {...getInputProps()} />
          <UploadFileOutlined color={disabled ? "disabled" : "action"} />
          <p style={{ color: disabled ? "gray" : "inherit" }}>
            <span style={{ textDecoration: "underline" }}>Click to upload</span>{" "}
            or drag and drop Bank Statements
          </p>
        </>
      )}
    </Box>
  );
}

export default PaperDropzone;
