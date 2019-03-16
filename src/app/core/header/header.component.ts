import { Component, OnInit, EventEmitter, Output, Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataStorageService } from '../../shared/data-storage.service';
import { RecipesService } from '../../recipes/recipes.service';
import { Recipe } from '../../recipes/recipe.model';
import { AuthService } from '../../auth/auth.service';
import { AppStateInterface } from 'src/app/app.reducer';
import { AuthStateInterface } from 'src/app/auth/ngrx/auth.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: []
})

@Injectable()
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() featureSelected = new EventEmitter<string>();

  authState: Observable<AuthStateInterface>;

  saveDataSubscription: Subscription;
  fetchDataSubscription: Subscription;

  constructor(
    private router: Router,
    private dataStorage: DataStorageService,
    private recipesService: RecipesService,
    private authService: AuthService,
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit() {
    this.authState = this.store.select('appState').pipe(map((appState: AppStateInterface): AuthStateInterface => appState.auth));
  }

  ngOnDestroy() {
    this.saveDataSubscription ? this.saveDataSubscription.unsubscribe() : null;
    this.fetchDataSubscription ? this.fetchDataSubscription.unsubscribe() : null;
  }

  onSelect(feature: string, event: MouseEvent) {
    this.featureSelected.emit(feature);
  }

  brandClick(event: MouseEvent) {
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
