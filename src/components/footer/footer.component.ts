import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy-policy.html',
})
export class PrivacyComponent {

}

@Component({
  selector: 'app-terms',
  templateUrl: './terms-and-conditions.html',
})
export class TermsAndConditionComponent {

}
