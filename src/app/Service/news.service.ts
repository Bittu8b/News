import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=bb2a73b6fc50455b8615c3c494f7f22b";

  // url = "https://api.myjson.com/bins/12ksce";

  constructor(private http: HttpClient) {}

  getAllNews() {
    return this.http.get(this.url);
  }
}
