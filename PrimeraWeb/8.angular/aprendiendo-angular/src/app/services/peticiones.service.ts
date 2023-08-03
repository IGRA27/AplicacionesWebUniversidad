import{Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PeticionesService{
    public url:string;
    constructor (
        public _http:HttpClient
    ){
        this.url="https://reqres.in/";
    }
    //https://reqres.in/api/users/2
    getUser(userId:number):Observable<any> {
        return this._http.get(this.url+'api/users/'+userId);
    }
}