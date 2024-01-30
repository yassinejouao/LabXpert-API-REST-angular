import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './userlab/index/index.component';
import { CreateComponent } from './userlab/create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './userlab/update/update.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'userlab', redirectTo: 'post/index', pathMatch: 'full' },
  { path: 'userlab/index', component: IndexComponent },
  { path: 'userlab/create', component: CreateComponent },
  { path: 'userlab/update/:id', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
