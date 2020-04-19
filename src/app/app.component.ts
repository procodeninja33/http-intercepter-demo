import { Component } from '@angular/core';
import { ApisService } from './core/services/apis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-Interceptor-demo';
  titles: any = [];
  loading: boolean = false;

  constructor(public apiService: ApisService) { }

  fetchSuccess() {
    this.loading = true;
    this.apiService.fetchSuccess().subscribe((data) => {
      this.loading = false;
      this.titles = data;
    });
  }

  fetchError() {
    this.apiService.fetchError().subscribe((data) => {
    });
  }
}
