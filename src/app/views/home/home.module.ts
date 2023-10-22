import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { RepositoriesModule } from 'src/app/components/repositories/repositories.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    RepositoriesModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
