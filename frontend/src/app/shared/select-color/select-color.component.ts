import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Background } from 'src/app/core/types/styles/background';

@Component({
  selector: 'app-select-color',
  templateUrl: './select-color.component.html',
  styleUrls: ['./select-color.component.scss']
})
export class SelectColorComponent implements OnInit {
  control!: FormControl;

  checked!: FormControl;

  @Input('color') color: string = '#ffffff';

  @Input('title') title: string = '';

  @Output('change') change = new EventEmitter<{style: any, show: boolean}>()
  constructor() {
    this.control = new FormControl(this.color);
    this.checked = new FormControl(false);
  }
  ngOnInit(): void {
    this.control.valueChanges.subscribe(selectedValue => {
      this.change.emit({
        style: selectedValue,
        show: this.checked.value,
      })
    })
    this.checked.valueChanges.subscribe(selectedValue => {
      this.change.emit({
        style: this.control.value,
        show: selectedValue
      })
    })
  }

}
