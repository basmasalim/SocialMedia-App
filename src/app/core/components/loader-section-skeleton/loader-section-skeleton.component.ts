import { Component } from '@angular/core';

@Component({
  selector: 'app-loader-section-skeleton',
  imports: [],
  templateUrl: './loader-section-skeleton.component.html',
  styleUrl: './loader-section-skeleton.component.css'
})
export class LoaderSectionSkeletonComponent {
  skeleton: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

}
