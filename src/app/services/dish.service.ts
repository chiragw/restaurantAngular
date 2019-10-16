import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from '../services/process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient, 
    private ProcessHTTPMsgService: ProcessHTTPMsgService) { }

  getDishes(): Observable<Dish[]> {
    //error part included
  	return this.http.get<Dish[]>(baseURL + 'dishes')
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
  }

  getDish(id: String): Observable<Dish> {
	  return this.http.get<Dish>(baseURL + 'dishes/' + id)
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));  	
  }

  //returns an array
  getFeaturedDish(): Observable<Dish> {
  	return this.http.get<Dish>(baseURL + 'dishes?featured=true')
      .pipe(map(dishes => dishes[0]))
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
  }

  getDishIds(): Observable<string[]> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
      .pipe(catchError(error => error));
  }

}