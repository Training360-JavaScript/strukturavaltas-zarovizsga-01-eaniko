import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.scss'],
})
export class DrugComponent implements OnInit {
  constructor() {}

  id: number = 1;
  name: string = 'Escitalopram Oxalate';
  brand: string = 'Escitalopram';
  company: string = 'Major Pharmaceuticals';
  barcode: string = '23-537-0123';
  stock: number = 26;
  ngOnInit(): void {}
}
