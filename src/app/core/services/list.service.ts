import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { Page } from "src/app/shared/components/table/models/page.model";

export interface InventoryProduct {
  number: number;
  id: string;
  category?: string;
  name: string;
  description?: string;
  tags?: string[];
  sku?: string | null;
  barcode?: string | null;
  brand?: string | null;
  vendor: string | null;
  stock: number;
  reserved: number;
  cost: number;
  basePrice: number;
  taxPercent: number;
  price: number;
  weight: number;
  thumbnail: string;
  images: string[];
  active: boolean;
}

export interface InventoryPagination {
  length: number;
  size: number;
  page: number;
  lastPage: number;
  startIndex: number;
  endIndex: number;
}

@Injectable({
  providedIn: "root",
})
export class ListService<T> {
  private list: BehaviorSubject<T[]> = new BehaviorSubject(null);

  constructor(private _httpClient: HttpClient) {}

  /**
   * Getter for products
   */
  get list$(): Observable<T[]> {
    return this.list.asObservable();
  }

  /**
   * Get products
   *
   *
   * @param page
   * @param size
   * @param sort
   * @param order
   * @param search
   */
  getAll(
    page: number = 0,
    size: number = 10,
    sort: string = "name",
    order: "asc" | "desc" | "" = "asc",
    search: string = "",
    path: string
  ): Observable<Page<T>> {
    return this._httpClient
      .get<Page<T>>(path, {
        params: {
          page: "" + page,
          size: "" + size,
          sort,
          order,
          search,
        },
      })
      .pipe(
        tap((response) => {
          this.list.next(response.content);
        })
      );
  }
}
