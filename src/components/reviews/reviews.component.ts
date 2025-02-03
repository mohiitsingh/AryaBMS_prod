import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewComponent {
  currentIndex: number = 0;
  reviews = [
    { name: "Rajesh Kumar", image: "images/photo2.svg", review: "This training institute has completely changed the way I look at my career. The instructors are highly skilled, and the affordable fees make it accessible to everyone. I am grateful for the hands-on training and placement assistance!" },
    { name: "Priyank Sharma", image: "images/photo2.svg", review: "I’ve gained so much knowledge here. The supportive learning environment and practical experience helped me grasp everything easily. Most importantly, the affordable fees make it a great choice for anyone looking to enhance their skills!" },
    { name: "Amit Verma", image: "images/photo2.svg", review: "I had a wonderful learning experience here. The instructors were knowledgeable and approachable. The best part is the placement assistance; I got a job shortly after completing the training. Highly recommend it to anyone!" },
    { name: "Shubham Patel", image: "images/photo2.svg", review: "Choosing this institute was the best decision I made for my career. The courses are very well-structured, and the team is always there to guide you. They truly care about your success, and the affordable pricing makes it even better!" },
    { name: "Vikram Singh", image: "images/photo2.svg", review: "A great place to enhance your skills and get placed! The instructors are amazing, and the course content is top-notch. Plus, the affordable fees mean that quality education is available to everyone. I highly recommend this institute to all!" },
    { name: "Mukesh Bhagat", image: "images/photo2.svg", review: "This institute provides a fantastic learning experience. The trainers are experienced, and the curriculum is practical and relevant to the industry. I completed my training and was successfully placed in a reputed company. Thank you for the wonderful experience!" }
];

  constructor() { }

  ngOnInit(): void {
  }

  goToPrevious(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.reviews.length - 2; // If at the beginning, jump to the second last review.
    }
  }

  goToNext(): void {
    if (this.currentIndex < this.reviews.length - 2) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // If at the last, jump back to the first review.
    }
  }
}
