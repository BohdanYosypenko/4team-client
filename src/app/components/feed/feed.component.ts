import { Component, OnInit } from '@angular/core';
import { Controllers } from 'src/app/enums/controllers';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  selectedId: number = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  selectFilter(id:number)
  {
    this.selectedId = id;
    console.log(id);
  }  

}
