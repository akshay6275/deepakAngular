import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../login/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../order';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-order-input',
  templateUrl: './order-input.component.html',
  styleUrls: ['./order-input.component.css']
})


export class OrderInputComponent implements OnInit {

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private http: HttpClient) { }

  ngOnInit(): void {
  }
  private baseUrl = 'http://localhost:8080/api/v1/';  


  placeOrder(order: object): Observable<object> {  

    console.log("I am here");
    // if(this.authenticationService.isUserLoggedIn()){
 
     console.log("I am here"+`${this.baseUrl}`+'orderPlace'+order);
     return this.http.post<Order>(this.baseUrl+"/orderPlace", order);
 
   // return this.http.post(`${this.baseUrl}`+'orderPlace', order);  
  } 

  public orderPlace(order) {
    return this.http.post<Order>(this.baseUrl+"/orderPlace", order);
  }

  
}
