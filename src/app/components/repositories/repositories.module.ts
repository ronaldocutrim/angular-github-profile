import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoriesComponent } from './repositories.component';
import { RepositoryService } from '../../service/repositories/repository/repository.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../service/repositories/user/user.service';

@NgModule({
  declarations: [
    RepositoriesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    RepositoryService,
    UserService
  ],
  exports: [
    RepositoriesComponent
  ]
})
export class RepositoriesModule { }
