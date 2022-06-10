export class TableSort {
  sort?: string;
  order?: 'asc' | 'desc' | '' = '';

  constructor({ sort, order }: Partial<TableSort>) {
    this.sort = sort;
    this.order = order;
  }
}
