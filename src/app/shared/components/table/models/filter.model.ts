export class TableFilter {
  page?: number;
  size?: number;
  sort?: string;
  order?: "asc" | "desc" | "" = "";
  search?: string;
  length?: number = 10;
  showFirstLastButtons?: boolean = true;
  pageSizeOptions?: number[] = [5, 10, 20, 100];

  constructor({
    page,
    size,
    sort,
    order,
    search,
    length,
    showFirstLastButtons,
    pageSizeOptions,
  }: Partial<TableFilter>) {
    this.page = page || 0;
    this.size = size || 10;
    this.sort = sort;
    this.order = order;
    this.search = search;
    this.length = length || 10;
    this.showFirstLastButtons = showFirstLastButtons || true;
    this.pageSizeOptions = pageSizeOptions || [5, 10, 20, 100];
  }
}
