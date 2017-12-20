import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RoutersModule } from './routes/routes.module';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent}
    ]
  },
];
@NgModule({
  imports: [
    RoutersModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
