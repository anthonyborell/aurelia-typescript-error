import {HttpClient} from 'aurelia-fetch-client';

export class App {
  message = 'Hello World!';
  private m_getHTTP: HttpClient;

  constructor(private http: HttpClient) {
    this.m_getHTTP = http;
    this.m_getHTTP.fetch('https://www.google.com.au/')
      .then(response => response.json())
      .then(data => {
        console.log('Google has loaded!');
      });
  }
}
