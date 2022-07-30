import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'angular-datatables';
  filteredRows = [];
  ngOnInit() {
    this.getProducts((res:any) => {
      this.filteredRows = res["cookies"];
    });
  }

  getProducts(resultSet:any) {
    const req = new XMLHttpRequest();
    req.open('GET', `https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json`);
    req.onload = () => {
      const data = JSON.parse(req.response);
      resultSet(data);
    };
    req.send();
  }

}
