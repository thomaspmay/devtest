import { Observable } from 'rxjs';
export interface userGrpcService {
    registerUser(userCreateRequest: any): Observable<any>;
    findUserByID(userByIDRequest: any): Observable<any>;
    findUserByEmail(userByEmailRequest: any): Observable<any>;
    updateUser(userCreateRequest: any): Observable<any>;
    deleteUser(userDeleteRequest: any): Observable<any>;
}
