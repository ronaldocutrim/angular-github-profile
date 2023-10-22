import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { RepositoryService } from '../../service/repositories/repository/repository.service';
import { Repository } from '../../service/entities/repository';
import { User } from '../../service/entities/user';
import { UserService } from '../../service/repositories/user/user.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})

export class RepositoriesComponent implements OnInit, OnDestroy {
  repositories: Repository[] = []
  user!: User;
  @Input({required: true}) username!: string;
  @Output() statusServiceEvent = new EventEmitter<'success' | 'error' | 'empty'>();

  constructor(private repositoryService: RepositoryService, private userService: UserService) {}


  getReposByUsername() {
    this.userService.getUser({username: this.username}).subscribe({
      next: (user) => {
        this.user = user
      }
    })
    this.repositoryService.getRepositories({username: this.username}).subscribe({
      next: (response) => {
        response.forEach(data => {
          this.repositories.push(data)
        })
        this.statusServiceEvent.emit('success')
      },
      error: () => {
        this.statusServiceEvent.emit('error')
      },
    })
  }

  ngOnInit(): void {
    console.log('init', this.username)
    if(this.username) this.getReposByUsername()
  }

  ngOnDestroy(): void {
    this.statusServiceEvent.emit('empty')

  }
}
