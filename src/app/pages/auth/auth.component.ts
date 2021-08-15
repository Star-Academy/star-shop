import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EngineService} from '../../services/engine.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
    @ViewChild('emailInput') emailInput!: ElementRef;
    @ViewChild('passwordInput') passwordInput!: ElementRef;

    public constructor(private router: Router, private engineService: EngineService) {}

    public async loginClickHandler() {
        const email = this.emailInput.nativeElement.value;
        const password = this.passwordInput.nativeElement.value;

        try {
            const token = await this.engineService.login(email, password);
            console.log(token);

            await this.router.navigateByUrl('/shop');
        } catch {
            console.log('ERROR');
        }
    }
}
