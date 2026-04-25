import { useEffect, useState } from "react";
import { searchDocuments, type DocumentRow } from "../api/documents";

export function DocumentSearch() {
  const [rows, setRows] = useState<DocumentRow[]>([]);

  useEffect(() => {
    searchDocuments().then(setRows);
  }, []);

  return (
    <section>
      <h1>Aerospace Document Tracker</h1>
      <p>Documents: {rows.length}</p>
    </section>
  );
}
