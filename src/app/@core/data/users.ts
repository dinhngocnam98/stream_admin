import { Observable } from 'rxjs';

export interface User {
  id: string;
  name: string;
  username: string;
  role: string;
  email: string;
  phoneNumber: string;
  picture: string;
}

export interface Contacts {
  user: User;
  type: string;
}

export interface RecentUsers extends Contacts {
  time: number;
}

export abstract class UserData {
  abstract getCurrentUser(): Observable<User>;
  abstract getUsers(): Observable<User[]>;
  abstract getContacts(): Observable<Contacts[]>;
  abstract getRecentUsers(): Observable<RecentUsers[]>;
}
