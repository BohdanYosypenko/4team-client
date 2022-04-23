import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { AccountDTO } from 'src/app/models/accountDTO';
import { AuthService } from 'src/app/services/auth.service';
import * as AccountActions from '../../actions/account.action' 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  LoginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()    
  });
  constructor(private authService: AuthService,
    private router: Router,
    private store: Store<AppState>) { 

    }

  ngOnInit(): void {
  }

  login(){
    const val = this.LoginForm.value;

    console.log(val.username+val.password)
        this.authService.login(val.username, val.password)
            .subscribe(
                (res: AccountDTO) => {
                    console.log(res);
                    this.store.dispatch(new AccountActions.AddAction({id:0,username:res.username,token:res.token}))
                    this.router.navigateByUrl('/');
                }
            );
    
  }

}
