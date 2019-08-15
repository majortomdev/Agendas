import { Injectable } from '@angular/core';
//import { Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { User } from '../user';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class UserService {
  private baseUrl:string = 'http://localhost:8082/api';
  private headers = new HttpHeaders ({'Content-type': 'application/json'});
  // private options = new HttpRequest({headers: this.headers});
  private options = new HttpRequest({headers: this.headers});
  constructor(private myHttp: HttpClient) { }

  getUsers(){ // to send request to getUsers method in my backend controller

    return this.myHttp.get(this.baseUrl + '/users', this.options).map((response:HttpResponse)=>response.json()).
    catch(this.errorHandler);   // the map function from rxjs converts the response to JSON

  }

  getUser(id: Number) { // sends to my getUser Method in my spring controller

    return this.myHttp.delete(this.baseUrl + '/user/' + id, this.options).map((response:HttpResponse)=>response.json()).
    catch(this.errorHandler);

  }

  deleteUser(id: Number) { //.........deleteUser in controller

    return this.myHttp.get(this.baseUrl + '/user/' + id, this.options).map((response:HttpResponse)=>response.json()).
    catch(this.errorHandler);

  }

  createUser(user: User) { // .......................................

    return this.myHttp.post(this.baseUrl + '/user', JSON.stringify(user), this.options).map((response:HttpResponse)=>response.json()).
    catch(this.errorHandler);

  }

  updateUser(user: User) { //

    return this.myHttp.put(this.baseUrl + '/user', JSON.stringify(user), this.options).map((response:HttpResponse)=>response.json()).
    catch(this.errorHandler);

  }

  errorHandler(error: HttpResponse) {

    return Observable.throw(error || 'SERVER ERROR');
  }
}
