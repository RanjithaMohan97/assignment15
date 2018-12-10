import {Injectable} from '@angular/core';

@Injectable()
export class UserService{
getUsers(){
    return [
        {
        id:1,
        name:"Ram",
        location:"chennai"
        },
        {
        id:2,
        name:"Krish",
        location:"coimbatore"
        },
        {
        id:3,
        name:"Karna",
        location:"madurai"
        }
]
}
}
