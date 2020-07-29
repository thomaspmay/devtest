import { Observable } from 'rxjs';
import { recipeArray } from './recipeModels';

export interface recipeGrpcService {
  accumulate(numberArray: recipeArray): Observable<any>;
}