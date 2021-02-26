import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';

const routes: Routes = [
  { path: '', component: MyDashboardComponent },
  { path: '', component: MyDashboardComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
