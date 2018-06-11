import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {

  public loading:boolean = false;

  constructor(public itunes:SearchService) { }

  doSearch(term: string){
    this.loading = true;
    this.itunes.search(term).then(_=>this.loading =false);
  }

  ngOnInit() {
  }

}
