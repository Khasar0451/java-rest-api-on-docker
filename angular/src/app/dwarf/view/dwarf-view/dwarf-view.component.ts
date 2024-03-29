import {Component, OnInit} from '@angular/core';
import {DwarfDetails} from "../../model/dwarf-details";
import {DwarfService} from "../../service/dwarf.service";
import {Weapons} from "../../../weapon/model/weapons";
import {ActivatedRoute} from "@angular/router";
import {WeaponService} from "../../../weapon/service/weapon.service";
import {Weapon} from "../../../weapon/model/weapon";

@Component({
  selector: 'app-dwarf-view',
  templateUrl: './dwarf-view.component.html',
  styleUrl: './dwarf-view.component.css'
})
export class DwarfViewComponent implements OnInit{
  dwarf: DwarfDetails | undefined;
  dwarfID: string | undefined
  weapons: Weapons | undefined
  constructor(private service: DwarfService, private weaponService: WeaponService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.service.getDwarf(params['uuid'])
        .subscribe(dwarf => this.dwarf = dwarf)
      this.weaponService.getWeaponsByDwarf(params['uuid']).subscribe(weapons => this.weapons = weapons)
      this.dwarfID = params['uuid']
    });

  }
  onDelete(weapon:Weapon){
    this.weaponService.deleteWeapon(weapon.id).subscribe(()=> this.ngOnInit());
  }

}
