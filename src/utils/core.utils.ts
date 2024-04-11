import { PhoneNumberUtil } from "google-libphonenumber";
const phoneUtil = PhoneNumberUtil.getInstance();

export const isValidPhone = (phone: string | undefined) => {
  try {
    const number = phoneUtil.parse(phone);
    return phoneUtil.isValidNumber(number);
  } catch (e) {
    return false;
  }
};

export const safeParseInt = (value: string | number): number | null => {
  const parsed = parseInt(value as string);
  return isNaN(parsed) ? null : parsed;
};
