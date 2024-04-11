// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const getUrl = (url?: string) => {
  return `${process.env.NEXT_PUBLIC_API_URL}/${url ?? ""}`;
};

export default fetcher;
