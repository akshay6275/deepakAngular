import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Order } from './order';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrderService {

  constructor(private http:HttpClient) {}

  //private userUrl = 'http://localhost:8080/user-portal/user';
	private userUrl = '/http://localhost:8080/api/v1/orderPlace';

  /*public getUsers() {
    return this.http.get<Order[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }*/

  public orderPlace(order) {
    return this.http.post<Order>(this.userUrl, order);
  }

}