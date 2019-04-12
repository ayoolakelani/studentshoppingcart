import { Observable } from 'rxjs';



export interface categories {
    id: string;
    name: string;
    Type: number;
    subs? : Observable<categories[]>;
}
