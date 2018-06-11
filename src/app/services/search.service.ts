import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { SearchItem } from '../shared/searchItem';

@Injectable()
export class SearchService {
  apiRoot: string = 'https://itunes.apple.com/search';
  results: SearchItem[];
  loading: boolean;
  //https://itunes.apple.com/search?term=the beatles&media=music&limit=20

  //siempre hay que injectar el objeto http para hacer peticiones rest
  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }
  search(term: string) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => { //Succes
            this.results = res.json().results.map(item => {
              return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
              );

            });
            //this.results = res.json().results;
            resolve();
          },
          msg => { //Error
            reject(msg);
          }
        );
    });
    return promise;
  }
}
