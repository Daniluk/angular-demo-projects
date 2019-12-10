import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePickerService } from './theme-picker.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {
  darkTheme = new FormControl(false);

  constructor(
    private service: ThemePickerService
  ) {
    this.darkTheme.valueChanges.subscribe(value => {
      console.log(value);
      if (value) {
        this.service.toggleDark();
      } else {
        this.service.toggleLight();
      }
    });
  }

  ngOnInit() {
  }

}
