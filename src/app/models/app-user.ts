import { AngularFirestoreDocument } from 'angularfire2/firestore';

export interface AppUser {
    uid : string
    name : string;
    email : string;
    isAdmin? : boolean;
    photourl : string;
}


