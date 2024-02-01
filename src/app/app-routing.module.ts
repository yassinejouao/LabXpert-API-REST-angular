import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent as createCUser } from './userlab/create/create.component';
import { IndexComponent as indexCUser } from './userlab/index/index.component';
import { UpdateComponent as updateCUser } from './userlab/update/update.component';
import { CreateComponent as createCPatient } from './patient/create/create.component';
import { IndexComponent as indexCPatient } from './patient/index/index.component';
import { UpdateComponent as updateCPatient } from './patient/update/update.component';
import { CreatesampleComponent as CreateCsample } from './sample/createsample/createsample.component';
import { IndexComponent as indexCAnalysis } from './analysis/index/index.component';
import { ShowresultComponent } from './analysis/showresult/showresult.component';
import { UpdateresultComponent } from './analysis/updateresult/updateresult.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'userlab', redirectTo: 'post/index', pathMatch: 'full' },
  { path: 'userlab/index', component: indexCUser },
  { path: 'userlab/create', component: createCUser },
  { path: 'userlab/update/:id', component: updateCUser },
  { path: 'patient/index', component: indexCPatient },
  { path: 'patient/create', component: createCPatient },
  { path: 'patient/update/:id', component: updateCPatient },
  { path: 'sample/create', component: CreateCsample },
  { path: 'analysis/index', component: indexCAnalysis },
  { path: 'analysis/result/:id', component: ShowresultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
