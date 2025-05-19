import {Injectable, signal} from '@angular/core';
import {AdminsInterface} from '../types/admin-panel-admins-interface';

@Injectable({
  providedIn: "root"
})

export class AuthService {
  currentAdminSig = signal<AdminsInterface | undefined | null>(undefined);
}
