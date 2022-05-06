import { Login } from './login';
import {Injectable}  from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class LoginService
{
    public users:Login[]=[
        {
            email:"praveen@gmail.com",
            password:"Praveen@123"
        },
        {
            email:"ppachouri96@gmail.com",
            password:"Praveen@123"
        },
        {
            email:"simplilearn@gmail.com",
            password:"simplilearn"
        }
    ];
    getUsers():Login[]
    {
        return this.users;
    }
    
}