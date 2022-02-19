import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Controllers } from 'src/app/enums/controllers';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  sportCategories: any;
  sportTypes: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getEntity(Controllers.SportType).subscribe(res => this.sportTypes = res);
    this.apiService.getEntity(Controllers.SportCategory).subscribe(res => this.sportCategories = res);
  }

}
