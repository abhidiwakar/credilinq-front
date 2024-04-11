import MainFormInput from "@/types/main-form";
import { getUrl } from "@/utils/fetcher.utils";
import useSWRMutation from "swr/mutation";

const formSubmitHandler = async (
  url: string,
  { arg }: { arg: MainFormInput }
) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      company_uen: arg.companyInfo.uen,
      company_name: arg.companyInfo.name,
      person_name: arg.applicantInfo.fullName,
      position_in_company: arg.applicantInfo.position,
      email: arg.applicantInfo.email,
      phone_number: arg.applicantInfo.mobile,
      files: arg.documents,
    }),
  });

  return response;
};

export const useFormSubmit = () => {
  return useSWRMutation(getUrl(), formSubmitHandler);
};
