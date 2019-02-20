import { Component, OnInit, EventEmitter, Output, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@Injectable()
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSelect(feature: string, event) {
    this.featureSelected.emit(feature);
  }

  brandClick(event: UIEvent) {
    event.preventDefault();
    this.router.navigate(['/']);
  }
}
