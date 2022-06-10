export class TablePage {
  page?: number;
  size?: number;
  totalElements?: number;

  constructor({ page, size }: Partial<TablePage>) {
    this.page = page || 0;
    this.size = size || 10;
  }
}
