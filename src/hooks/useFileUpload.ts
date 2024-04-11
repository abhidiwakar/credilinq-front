import { FileResposne } from "@/types/file-upload";
import { getUrl } from "@/utils/fetcher.utils";
import useSWRMutation from "swr/mutation";

type FileUploader = (
  url: string,
  { arg }: { arg: File[] }
) => Promise<{
  data: FileResposne[];
  message: string;
}>;

const fileUploader: FileUploader = async (url, { arg: files }) => {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append("files", file, file.name);
  });

  const response = await fetch(getUrl(url), {
    method: "POST",
    body: formData,
  });
  return response.json() as Promise<{
    data: FileResposne[];
    message: string;
  }>;
};

export const useFileUpload = () => {
  return useSWRMutation("upload", fileUploader);
};
