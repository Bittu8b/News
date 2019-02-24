import { Component, OnInit } from "@angular/core";
import { NewsService } from "src/app/Service/news.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  display: boolean;
  // newsData = [
  //   {
  //     headline: "Arshad Pregnant",
  //     newscontent: "While making love with saubhik arshad got pregnant."
  //   },
  //   {
  //     headline: " saubhik Pregnant",
  //     newscontent: "While making love with saubhik arshad got pregnant."
  //   }
  // ];
  news = [];

  newsData = [];
  dataSource;

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit() {
    this.newsService.getAllNews().subscribe(news => {
      //this.newsData = news;
      this.dataSource = news["articles"];
      //console.log(this.dataSource[0].author);

      //console.log(this.newsData);
      this.dataConversion();
    });
  }

  dataConversion() {
    this.dataSource.forEach(element => {
      let temp = {};
      temp["Title"] = element.title;
      temp["Content"] = element.content;
      temp["urlToImage"] = element.urlToImage;
      temp["url"] = element.url;
      this.newsData.push(temp);
    });
    console.log(this.newsData);
    this.news = this.newsData;
  }

  readMore(url) {
    this.router.navigateByUrl(url).then(e => {
      console.log("Navigated");
    });
  }
}
