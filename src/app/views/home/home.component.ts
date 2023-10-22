import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'github-finder-profile';
  username = '';
  shouldRenderList = false
  serviceStatus: 'success' | 'error' | 'empty' =  'empty';
  alertMessage = '';

  onSearch(search: 'success' | 'error' | 'empty') {
    const messages = {
      error: 'Error ao listar repositorios',
      success: '',
      empty: ''
    }
    this.alertMessage = messages[search];
    this.serviceStatus = search
  }

  onSubmit() {
    this.shouldRenderList = true
  }

  handleChange(data: Event) {
    this.username = (data.target as HTMLInputElement).value;
    if(this.shouldRenderList) this.shouldRenderList = false;
  }
}
