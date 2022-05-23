import { take } from "rxjs";
import { TableFilter } from "src/app/shared/components/table/models/filter.model";
import { Page } from "src/app/shared/components/table/models/page.model";
import { Table } from "src/app/shared/components/table/models/table.class";
import { TableColumns } from "../interfaces/table-columns.interface";
import { TableService } from "../services/list.service";

export abstract class TablePaginationAbstract<T> {
  table: Table<T> = new Table<T>();
  columns: TableColumns<T>[];

  constructor(protected service: TableService<T>, private pathUrl: string) {
    this.table.filter.subscribe((filter) => {
      this.getAll(filter);
    });
  }

  abstract getColumns(): TableColumns<T>[];

  getAll({ page, size, order, search, sort }: TableFilter): any {
    return this.service
      .getAll(page, size, sort, order, search, this.pathUrl)
      .pipe(take(1))
      .subscribe((response: Page<T>) => {
        this.table.setDataSourcePaginated(response);
      });
  }
}
