import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone : false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn = false; // Estado local de autenticación
  private subscription: Subscription | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Suscribirse al estado de autenticación
    this.subscription = this.authService.isLoggedIn().subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

  logout() {
    this.authService.logout(); // Llamar al método de logout del servicio
  }

  ngOnDestroy() {
    // Cancelar la suscripción al destruir el componente
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
