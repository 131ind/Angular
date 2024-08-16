import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';  // Importiere den ApiService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  testData: string | undefined;

  constructor(private testService: ApiService) { }

  ngOnInit() {
    this.getTestData(1);  // Beispiel-ID, die du abrufen möchtest
  }

  getTestData(id: number) {
    this.testService.getTest(id).subscribe(
      (data) => {
        this.testData = data;
      },
      (error) => {
        console.error('Fehler beim Abrufen der Daten:', error);
      }
    );
  }
}
