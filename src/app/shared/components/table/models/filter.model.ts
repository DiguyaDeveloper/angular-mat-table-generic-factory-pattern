export interface Filters extends PaginationFilter {
  columns: { [field: string]: string };
}

class PaginationFilter {
  page: number;
  size: number;
  offset?: number;
  sort?: "ASC" | "DSC";

  constructor({ page, size, offset, sort }: Partial<PaginationFilter>) {
    this.offset = offset;
    this.page = page || 0;
    this.size = size || 10;
    this.sort = sort;
  }
}
