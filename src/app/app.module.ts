import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent as createCUser } from './userlab/create/create.component';
import { IndexComponent as indexCUser } from './userlab/index/index.component';
import { UpdateComponent as updateCUser } from './userlab/update/update.component';
import { CreateComponent as createCPatient } from './patient/create/create.component';
import { IndexComponent as indexCPatient } from './patient/index/index.component';
import { UpdateComponent as updateCPatient } from './patient/update/update.component';
import { CreatesampleComponent as createCsample } from './sample/createsample/createsample.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { BackdropComponent } from './backdrop/backdrop.component';
import { IndexComponent as indexCAnalysis } from './analysis/index/index.component';
import { ShowresultComponent } from './analysis/showresult/showresult.component';
import { UpdateresultComponent } from './analysis/updateresult/updateresult.component';

@NgModule({
  declarations: [
    AppComponent,
    createCUser,
    indexCUser,
    updateCUser,
    createCPatient,
    indexCPatient,
    updateCPatient,
    DashboardComponent,
    BackdropComponent,
    createCsample,
    indexCAnalysis,
    ShowresultComponent,
    UpdateresultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
