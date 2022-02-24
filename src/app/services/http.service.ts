import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiMethods, ApiResponse } from '../utils/constants'; 

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  methods: ApiMethods | undefined;

  constructor(
    private http: HttpClient
  ) { }

  requestCall(api: string, method: ApiMethods, data?: any){
    let response: Observable<ApiResponse> = new Observable;
    switch (method) {
      case ApiMethods.GET:
        response = this.http.get<ApiResponse>(`${environment.endpoint}${api}`);
        break;
      case ApiMethods.POST:
        response = this.http.post<ApiResponse>(`${environment.endpoint}${api}`,data);
        break;
      case ApiMethods.PUT:
        response = this.http.put<ApiResponse>(`${environment.endpoint}${api}`,data);
        break;
      case ApiMethods.DELETE:
        response = this.http.get<ApiResponse>(`${environment.endpoint}${api}`);
        break;
      default:
        break;
    }
    return response;
  }
}
