import Header from "@/components/Header";
import { safeParseInt } from "@/utils/core.utils";
import { Alert, Container, Typography } from "@mui/material";
import { getEntries } from "./api";
import EntriesGrid from "./components/EntriesGrid";

type Props = {
  searchParams: {
    page: number;
    limit: number;
  };
};

export default async function EntriesPage({ searchParams }: Props) {
  const limit = safeParseInt(searchParams.limit) || 10;
  const page = safeParseInt(searchParams.page) || 1;
  const { success, data, message } = await getEntries(page, limit);

  return (
    <>
      <Header title="Entries" />
      <Container sx={{ py: 5, bgcolor: "white" }}>
        <Typography variant="h4" gutterBottom>
          All Entries
        </Typography>
        <Typography variant="body1">
          This is the entries page. You can view all the entries here.
        </Typography>
        {!success && (
          <Alert sx={{ my: 2 }} severity={"error"} variant="filled">
            {message}
          </Alert>
        )}
        <EntriesGrid data={data} />
      </Container>
    </>
  );
}
