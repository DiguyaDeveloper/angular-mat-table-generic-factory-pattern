import { map, Observable } from "rxjs";
import { PokedexService } from "src/app/core/services/pokedex.service";
import { Filters } from "./filter.model";
import { Page } from "./page.model";
import { Table } from "./table.class";

interface Service<S, T> {
  get: (parameters?: unknown) => Observable<Page<T>>;
}

export class DataSource<S, T> {
  constructor(
    private service: Service<PokedexService, T>,
    private table: Table<T>
  ) {}

  getTable(): Table<T> {
    return this.table;
  }

  get<P extends Filters>({
    parameters,
    method,
  }: {
    parameters: P;
    method: string;
  }): Observable<Page<T>> {
    if (!method) throw new Error("Method name is required");

    return this.service.get(parameters).pipe(
      map((response) => {
        this.table.setDataSourcePaginated(response);
        return response;
      })
    );
  }
}
