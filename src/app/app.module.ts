import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DetallesLugarComponent } from './detalles-lugar/detalles-lugar.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetallesLugarComponent,
    EncabezadoComponent,
    AddEditUserComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
