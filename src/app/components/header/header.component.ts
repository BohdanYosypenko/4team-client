import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('account').subscribe((res=>{this.user = res;
      console.log(this.user[0].username)}))
  }  


}
