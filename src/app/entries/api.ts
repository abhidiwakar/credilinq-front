import { EntryResponse } from "@/types/entry";

export const getEntries = async (page: number, limit: number) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}?page=${page}&limit=${limit}`,
    {
      cache: "no-cache",
    }
  );

  if (result.ok) {
    return {
      data: (await result.json()) as EntryResponse,
      success: true,
    };
  } else {
    console.log("Failed to fetch enties: ", result.status);
    return {
      success: false,
      message: "Failed to fetch entries",
    };
  }
};
