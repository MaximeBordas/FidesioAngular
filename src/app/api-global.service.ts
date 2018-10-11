import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiGlobalService {
  API_URL = 'https://data.ratp.fr/api/records/1.0/search/?dataset=liste-des-commerces-de-proximite-agrees-ratp';
  constructor() { }
}
