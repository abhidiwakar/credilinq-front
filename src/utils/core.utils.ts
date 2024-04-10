import { PhoneNumberUtil } from "google-libphonenumber";
const phoneUtil = PhoneNumberUtil.getInstance();

export const isValidPhone = (phone: string) => {
  try {
    const number = phoneUtil.parse(phone);
    return phoneUtil.isValidNumber(number);
  } catch (e) {
    return false;
  }
};
