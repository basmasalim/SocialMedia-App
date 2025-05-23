import { Component, OnInit, inject } from '@angular/core';
import { FlowbiteService } from '../../../shared/services/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';
import { AuthService } from './../../../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly flowbiteService = inject(FlowbiteService);

  ngOnInit(): void {
    this.flowbite();
  }

  flowbite() {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }

  signOut() {
    this.authService.signOutUser();
  }
}
