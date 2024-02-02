import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './userlab/create/create.component';
import { IndexComponent } from './userlab/index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { BackdropComponent } from './backdrop/backdrop.component';
import { UpdateComponent } from './userlab/update/update.component';

import { CreateComponent as CreateCFournisseur } from './fournisseur/create/create.component';
import { IndexComponent as IndexCFournisseur } from './fournisseur/index/index.component';
import { UpdateComponent as UpdateCFournisseur } from './fournisseur/update/update.component';

import { CreateComponent as CreateCReagent } from './reagent/create/create.component';
import { IndexComponent as IndexCReagent } from './reagent/index/index.component';
import { UpdateComponent as UpdateCReagent } from './reagent/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    IndexComponent,
    DashboardComponent,
    BackdropComponent,
    UpdateComponent,
    CreateCFournisseur,
    IndexCFournisseur,
    UpdateCFournisseur,
    CreateCReagent,
    IndexCReagent,
    UpdateCReagent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DatePipe,],
  bootstrap: [AppComponent],
})
export class AppModule {}
