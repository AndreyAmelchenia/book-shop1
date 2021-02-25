import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MytableComponent } from './mytable/mytable.component';

const routes: Routes = [
  { path: 'first-component', component: MyDashboardComponent },
  { path: 'second-component', component: MytableComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
