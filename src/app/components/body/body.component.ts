import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Controllers } from 'src/app/enums/controllers';
import { sportLookup } from 'src/app/models/sportLookup';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  sportCategories: any;
  sportTypes: any;
  lookupCategories: any;
  selectedSportLookup: number = 0;

  sportLookupForm: FormGroup = new FormGroup({
    country: new FormControl(),
    city: new FormControl(),
    sportCategory: new FormControl(),
    sportType: new FormControl(),
  });

  constructor(private apiService: ApiService,
    private store: Store<AppState>) { }

  ngOnInit(): void {    
    this.apiService.getEntity(Controllers.SportCategory).subscribe(res => this.sportCategories = res);
    this.apiService.getEntity(Controllers.LookupCategory).subscribe(res => this.lookupCategories = res);    

    this.sportLookupForm.get("sportCategory")?.valueChanges.subscribe(id => {
      this.apiService.getEntityById(Controllers.SportTypeByCategory, id).subscribe(res => this.sportTypes = res)
   })
   
  }

  selectLookupCategory(id:number){
    this.selectedSportLookup = id;
  }

  gemePlaseholder():string{
    return this.sportLookupForm.value.sportCategory === null?
      "Choose category first" : "Game";
  }

  submit(){

    let lookup = new sportLookup();
    lookup.lookupCategoryFID = this.selectedSportLookup;
    lookup.ageStart = 20;
    lookup.ageEnd = 21;
    lookup.gender= 'M';
    lookup.latitude= 0;
    lookup.longitude = 0;
    lookup.sportTypeFID = this.sportLookupForm.value.sportType;
    lookup.priceStart =100;
    lookup.priceEnd =200;    
    
    this.apiService.addEntity(Controllers.SportLookup,lookup).subscribe(()=> console.log("saved"));
  }

  test(){    
    this.store.select('account').subscribe(res=>console.log(res))
  }
}
