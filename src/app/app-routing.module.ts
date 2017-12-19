import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent}
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  declarations: [ DashboardComponent ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
