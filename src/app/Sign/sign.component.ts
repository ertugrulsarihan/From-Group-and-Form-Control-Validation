
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Service } from "../Service/users.service";

@Component({
    selector: 'sign',
    templateUrl: './sign.component.html'
})

export class SignComponent {

    constructor(private route: Router, private service: Service) {

    }
    username = new FormControl('', [Validators.required, Validators.minLength(8)])
    email = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
    password = new FormControl('', [Validators.required, Validators.minLength(8)])
    values = new FormGroup({
        username: this.username,
        email: this.email,
        password: this.password
    })
    save(): void {

        if (!this.username.invalid && !this.password.invalid && !this.email.invalid) {
            this.service.users.push(this.values.value)
            this.route.navigate(['goodjob']);
            console.log(this.service.users);

        }
        else {
            alert('Lütfen bütün alanları doğru kodlayın')
        }


    }
}