import { Observable } from 'rxjs';

// should match proto definitions

export interface userGrpcService {
    // create
    registerUser(userCreateRequest) :Observable<any>; // requestResponse

    // read
    findUserByID(userByIDRequest) :Observable<any>; // user 
    findUserByEmail(userByEmailRequest) :Observable<any>; // user
    
    // update
    updateUser(userCreateRequest) :Observable<any>; // requestResponse 

    // delete
    deleteUser(userDeleteRequest) :Observable<any>; // requestResponse
}