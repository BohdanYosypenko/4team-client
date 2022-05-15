import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { AccountDTO } from 'src/app/models/accountDTO';
import { AuthService } from 'src/app/services/auth.service';
import * as AccountActions from '../../actions/account.action' 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterForm: FormGroup = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl()    
  });

  constructor(private authService: AuthService,
    private router: Router,
    private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  register(){
    const val = this.RegisterForm.value;

    console.log(val.username+val.password)
        this.authService.register(val.username, val.email, val.password)
            .subscribe(
                (res: AccountDTO) => {
                    console.log(res.username);
                    this.store.dispatch(new AccountActions.AddAction({id:0,username:res.username,token:res.token}))
                    this.router.navigateByUrl('/');
                }
            );
    
  }

}
