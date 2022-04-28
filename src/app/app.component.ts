import { Component } from '@angular/core';

import { SearchResult } from 'src/models/search-result.model';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  keywords = '';

  results: SearchResult | undefined;

  loading = false;

  constructor(private searchService: SearchService) {}

  search() {
    this.loading = true;
    this.results = undefined;
    this.searchService
      .search(this.keywords.toLowerCase())
      .subscribe((results) => {
        this.results = results;
        this.loading = false;
      });
  }
}
