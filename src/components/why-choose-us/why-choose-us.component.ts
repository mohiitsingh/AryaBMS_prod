import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.css'
})
export class WhyChooseUsComponent {
  language: 'en' | 'hi' = 'en';

  content = {
    en: {
      title: 'Why Choose Us?',
      points: [
        '15+ Years of Gulf’s Countries Experienced in BMS & Industrial Automation as a designer, commissioning engineer and instructor.',
        'Hands-on Training with Real Equipment',
        'Affordable Course Fees',
        'Placement Support in India & Gulf Countries',
        'High Demand for Skilled Professionals Worldwide'
      ]
    },
    hi: {
      title: 'हमें क्यों चुनें?',
      points: [
        'खाड़ी देशों में डिजाइनर, कमीशनिंग इंजीनियर और प्रशिक्षक के रूप में BMS और Industrial Automation में 15+ वर्षों का अनुभव।',
        'वास्तविक उपकरणों के साथ व्यावहारिक प्रशिक्षण',
        'किफ़ायती कोर्स फ़ीस',
        'भारत और खाड़ी देशों में प्लेसमेंट सहायता',
        'दुनिया भर में कुशल पेशेवरों की उच्च मांग'
      ]
    }
  };

  switchLanguage(lang: 'en' | 'hi') {
    this.language = lang;
  }
}
