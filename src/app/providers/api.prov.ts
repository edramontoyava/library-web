import {Injectable} from "@angular/core";
import axios from 'axios';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ApiProvider {
  url=environment.apiUrl;

  getBooks():Promise<any>{
    return new Promise((resolve, reject)=>{
      axios.get(this.url+'books').then(res =>{
        resolve(res.data)
      })
      .catch(err =>{
        console.log(err)
      });
    });
  }

  login (data:any):Promise<any>{
    return new Promise((resolve, reject)=>{
      axios.post(this.url+'users/login',data).then(res =>{
        resolve(res.data)
      })
      .catch(err =>{
        console.log(err)
      });
    });
  }

  isAuthenticatedUser():boolean{
    const token = localStorage.getItem('token');
    return token ? true : false;
  }

  logout(){
    localStorage.removeItem('token');
  }

  
}
