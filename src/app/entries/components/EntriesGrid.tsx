"use client";

import { Entry, EntryResponse } from "@/types/entry";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";

const columns: GridColDef<Entry>[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "company_uen", headerName: "Company UEN", minWidth: 150 },
  { field: "company_name", headerName: "Company Name", minWidth: 150 },
  { field: "person_name", headerName: "Full Name", minWidth: 150 },
  {
    field: "position_in_company",
    headerName: "Position in Company",
    minWidth: 200,
  },
  { field: "email", headerName: "Email", minWidth: 250 },
];

type Props = {
  data: EntryResponse | undefined;
};

export default function EntriesGrid({ data }: Props) {
  const router = useRouter();

  return (
    <DataGrid
      pageSizeOptions={[10, 25, 50]}
      onPaginationModelChange={(model) => {
        router.push(`/entries?page=${model.page + 1}&limit=${model.pageSize}`);
      }}
      initialState={{
        pagination: {
          paginationModel: {
            page: (data?.currentPage ?? 1) - 1,
            pageSize: data?.limit ?? 10,
          },
          rowCount: data?.totalCount ?? 0,
        },
      }}
      sx={{ my: 2 }}
      autoHeight
      rows={data?.entries || []}
      columns={columns}
      paginationMode="server"
      rowCount={data?.totalCount || 0}
      disableRowSelectionOnClick
    />
  );
}
