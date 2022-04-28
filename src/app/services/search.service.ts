import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
import { SearchResult } from 'src/models/search-result.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  search(keyword: string): Observable<SearchResult> {
    const url = `http://api.alquran.cloud/v1/search/${keyword}/all/en.sahih`;
    return this.http.get<any>(url).pipe(
      map((res) => {
        if (res) {
          return res.data;
        } else {
          return { count: 0, matches: [] };
        }
      })
    );
  }
}
