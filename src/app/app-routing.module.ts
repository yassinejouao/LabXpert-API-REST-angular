import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './userlab/index/index.component';
import { CreateComponent } from './userlab/create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './userlab/update/update.component';

import { CreateComponent as CreateCFournisseur } from './fournisseur/create/create.component';
import { IndexComponent as IndexCFournisseur } from './fournisseur/index/index.component';
import { UpdateComponent as UpdateCFournisseur } from './fournisseur/update/update.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'userlab', redirectTo: 'post/index', pathMatch: 'full' },
  { path: 'userlab/index', component: IndexComponent },
  { path: 'userlab/create', component: CreateComponent },
  { path: 'userlab/update/:id', component: UpdateComponent },
  //fournisseur:
  { path: 'fournisseur', redirectTo: 'post/index', pathMatch: 'full' },
  { path: 'fournisseur/index', component: IndexCFournisseur },
  { path: 'fournisseur/create', component: CreateCFournisseur },
  { path: 'fournisseur/update/:id', component: UpdateCFournisseur },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
