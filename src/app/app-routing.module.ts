import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';


const appRoutes: Routes = [
  // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  // { path: 'recipes', component: RecipesComponent, children: [
  //   { path: '', component: RecipeStartComponent },
  //   { path: 'new', component: RecipeEditComponent },
  //   { path: ':id', component: RecipeDetailComponent },
  //   { path: ':id/edit', component: RecipeEditComponent },
  // ] },
  // { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'login', component: LoginComponent},
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent}
    ]
  },
  
];
console.log(222)
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  declarations: [ DashboardComponent],
  exports: [RouterModule]
})
export class AppRoutingModule {}
