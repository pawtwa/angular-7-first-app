import { Component, OnInit, EventEmitter, Output, Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppStateInterface } from 'src/app/app.reducer';
import { AuthStateInterface } from 'src/app/auth/ngrx/auth.reducer';
import { TryLogout } from 'src/app/auth/ngrx/auth.actions';
import { TryFetchRecipes, TryStoreRecipes } from 'src/app/recipes/ngrx/recipes.actions';

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

  constructor(
    private router: Router,
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  ngOnDestroy() { }

  onSelect(feature: string, event: MouseEvent) {
    this.featureSelected.emit(feature);
  }

  brandClick(event: MouseEvent) {
    event.preventDefault();
    this.router.navigate(['/']);
  }

  onSaveData(event) {
    event.preventDefault();
    this.store.dispatch(new TryStoreRecipes());
    // this.store.select('recipes')
    //   .pipe(
    //     take(1),
    //     switchMap((recipesState: RecipesStateInterface) => {
    //       return this.dataStorage.storeData(recipesState.recipes);
    //     }),
    //     catchError((error, caught) => {
    //       return throwError(error);
    //     })
    //   ).subscribe(
    //     () => { },
    //     (error) => {
    //       console.error('error `onSaveData`', error);
    //     }
    //   );
  }

  onFetchData(event) {
    event.preventDefault();
    this.store.dispatch(new TryFetchRecipes());
    // this.dataStorage.fetchData()
    //   .pipe(
    //     take(1)
    //   )
    //   .subscribe(
    //     (recipes: Recipe[]) => {
    //       this.store.dispatch(new FetchRecipes(recipes));
    //       this.router.navigate(['/recipes']);
    //     },
    //     (error) => {
    //       console.error('error `onFetchData`', error);
    //     }
    //   );
  }

  onLogout(event) {
    event.preventDefault();
    this.store.dispatch(new TryLogout());
  }
}
