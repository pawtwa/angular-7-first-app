import { Component, OnInit, EventEmitter, Output, Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: []
})

@Injectable()
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() featureSelected = new EventEmitter<string>();

  saveDataSubscription: Subscription;
  fetchDataSubscription: Subscription;

  constructor(
    private router: Router,
    private dataStorage: DataStorageService,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {}

  ngOnDestroy() {
    this.saveDataSubscription ? this.saveDataSubscription.unsubscribe() : null;
    this.fetchDataSubscription ? this.fetchDataSubscription.unsubscribe() : null;
  }

  onSelect(feature: string, event) {
    this.featureSelected.emit(feature);
  }

  brandClick(event: UIEvent) {
    event.preventDefault();
    this.router.navigate(['/']);
  }

  onSaveData(event) {
    event.preventDefault();
    this.saveDataSubscription ? this.saveDataSubscription.unsubscribe() : null;
    this.saveDataSubscription = this.dataStorage.storeData(this.recipeService.getRecipes()).subscribe(() => {}, console.log);
  }

  onFetchData(event) {
    event.preventDefault();
    this.fetchDataSubscription ? this.fetchDataSubscription.unsubscribe() : null;
    this.fetchDataSubscription = this.dataStorage.fetchData().subscribe((recipes: Recipe[]) => {
      this.recipeService.setRecipes(recipes);
    }, console.log);
  }
}
