import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  // apiUrl = environment.apiUrl;

  // getHeaders() {
  //   const header = {
  //     headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`),
  //   };
  //   return header;
  // }

  // getParams(parameters: ParamsGoogle) {
  //   let params = new HttpParams();
  //   params = params.append('code', parameters.code);
  //   params = params.append('scope', parameters.scope);
  //   params = params.append('authuser', parameters.authuser);
  //   params = params.append('prompt', parameters.prompt);
  //   return params;
  // }

  // public getVehicle(req: { id: string }): Observable<GetResponseData<VehicleDescription>> {
  //   return this.httpClient.get<GetResponseData<VehicleDescription>>(
  //     `${this.apiUrl}/guest/vehicles/${req.id}`,
  //   );
  // }
}
