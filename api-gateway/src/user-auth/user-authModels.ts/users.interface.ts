import { Observable } from "rxjs";
import { requestResponse, user } from "src/protocols/userProtocols/users_pb";

 
 
 export interface rpcUsersAuthService {
    // create
    registerUser(userCreateRequest): Observable<requestResponse> 

    // read
    findUserByID(userByIDRequest) :Observable<user>
    findUserByEmail(userByEmailRequest): Observable<user>
    
    // update
    updateUser(userCreateRequest): Observable<requestResponse>

    // delete
    deleteUser(userDeleteRequest): Observable<requestResponse>

}