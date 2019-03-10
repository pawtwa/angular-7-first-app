import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  leadedFeature: string = 'recipe';

  constructor() {}

  ngOnInit() {

  }

  onNavigate(feature: string) {
    this.leadedFeature = feature;
  }
}
