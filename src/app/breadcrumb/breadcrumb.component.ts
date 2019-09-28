import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbList: string[];
  breadcrumbLinksList: string[];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.breadcrumbList = [];
        this.breadcrumbLinksList = [];
        this.buildBreadcrumbs();
      }
    });
  }

  private buildBreadcrumbs() {
    if (this.router.url === "/") {
      this.breadcrumbList = [""];
    } else {
      this.breadcrumbList = this.router.url.split('/');
    }
    this.breadcrumbLinksList  = [this.breadcrumbList[0]];

    for(let i=1; i<=this.breadcrumbList.length; i++){
      const link = this.breadcrumbLinksList[i-1] +'/'+ this.breadcrumbList[i]
      this.breadcrumbLinksList.push(link)
    }
  }
}
