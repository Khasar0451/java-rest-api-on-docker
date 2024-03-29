import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Weapons} from "../model/weapons";
import {Weapon} from "../model/weapon";
import {HttpClient} from "@angular/common/http";
import {WeaponForm} from "../model/weaponForm";

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  constructor(private http: HttpClient) { }
  getWeapons(): Observable<Weapons> {
    return this.http.get<Weapons>('/drg/weapons');
  }
  getWeapon(id: string): Observable<Weapon>{
    return this.http.get<Weapon>('/drg/weapons/' + id)
  }
  getWeaponsByDwarf(uuid: string): Observable<Weapons>{
    return this.http.get<Weapons>('/drg/dwarves/' + uuid + '/weapons')
  }

  deleteWeapon(uuid:string): Observable<Weapon> {
    return this.http.delete<Weapon>('/drg/weapons/' + uuid);
  }

  putWeapon(uuid:string, request:WeaponForm): Observable<any>{
    return this.http.put<Weapon>('/drg/weapons/' + uuid, request)
  }

  patchWeapon(idDwarf:string, idWeapon:string, request:WeaponForm): Observable<any>{
    return this.http.patch('/drg/dwarves/' + idDwarf + '/weapons/' + idWeapon, request);
  }
  //putWeapon()
}
