type Entry = {
  id: string;
  company_uen: string;
  company_name: string;
  person_name: string;
  position_in_company: string;
  email: string;
  phone_number: string;
  files: string[];
  created_at: string;
  updated_at: string;
};

type EntryResponse = {
  entries: Entry[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
  limit: number;
  hasNextPage: boolean;
};

export type { Entry, EntryResponse };
