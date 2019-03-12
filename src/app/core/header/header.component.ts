import { Component, OnInit, EventEmitter, Output, Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../../shared/data-storage.service';
import { RecipesService } from '../../recipes/recipes.service';
import { Recipe } from '../../recipes/recipe.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: []
})

@Injectable()
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() featureSelected = new EventEmitter<string>();

  get isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  saveDataSubscription: Subscription;
  fetchDataSubscription: Subscription;

  constructor(
    private router: Router,
    private dataStorage: DataStorageService,
    private recipesService: RecipesService,
    private authService: AuthService
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
    this.saveDataSubscription = this.dataStorage.storeData(this.recipesService.getRecipes()).subscribe((response) => {}, console.log);
  }

  onFetchData(event) {
    event.preventDefault();
    this.fetchDataSubscription ? this.fetchDataSubscription.unsubscribe() : null;
    this.fetchDataSubscription = this.dataStorage.fetchData().subscribe((recipes: Recipe[]) => {
      this.recipesService.setRecipes(recipes);
      this.router.navigate(['/recipes']);
    }, console.log);
  }

  onLogout(event) {
    event.preventDefault();
    this.authService.logoutUser().then(() => {
      this.recipesService.setRecipes([]);
      this.router.navigate(['/']);
    });
  }
}
