import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PokedexService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<any> {
    return this.httpClient.get("../../../assets/mocks/mock.json");
  }
  get2(): Observable<any> {
    return this.httpClient.get("../../../assets/mocks/mock2.json");
  }
}
