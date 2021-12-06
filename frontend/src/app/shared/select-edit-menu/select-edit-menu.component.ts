import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SelectStyleMenuOptions } from 'src/app/core/types/others/select-style-menu-options';
import { StyleRenderingService } from 'src/app/services/style-rendering.service';
import { SelectStyleComponent } from '../select-style/select-style.component';

@Component({
  selector: 'app-select-edit-menu',
  templateUrl: './select-edit-menu.component.html',
  styleUrls: ['./select-edit-menu.component.scss']
})
export class SelectEditMenuComponent implements OnInit {

  @Input('options') options: SelectStyleMenuOptions[] = [new SelectStyleMenuOptions()];

  constructor(private bottomSheet: MatBottomSheet, private styleService: StyleRenderingService) { }

  ngOnInit(): void {
  }

  openBottomSheet(options: string[], components: string[]): void {
    this.styleService.bottomSheetsOption = {options, components};
    this.bottomSheet.open(SelectStyleComponent);
  }
}
