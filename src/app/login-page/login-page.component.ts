import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string = '';
  password: string = '';
  loginError: boolean = false;
  showAdminLogin: boolean = true;
  ngOnInit(): void {}

  constructor(private router: Router) {}

  login() {
    if (this.username === 'terasotel' && this.password === '2025') {
      console.log("Login success");
      this.router.navigate(['admin/product-control']);
      this.loginError = false;
    } else {
      this.loginError = true;
    }
  }

  cancel(){
    this.showAdminLogin = false;
    this.router.navigate(['menu/restuarant']);
  }
}
