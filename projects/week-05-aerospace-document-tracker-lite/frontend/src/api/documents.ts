export type DocumentRow = {
  id: number;
  projectCode: string;
  customer: string;
  title: string;
  status: string;
};

export async function searchDocuments() {
  return [] as DocumentRow[];
}
