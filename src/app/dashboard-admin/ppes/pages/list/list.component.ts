import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Ppe } from '../../interfaces/ppes.intarface';
import { PpesService } from '../../services/ppes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['username', 'name', 'last_name', 'helmet', 'headphones', 'goggles', 'gloves', 'boots', 'date'];
  dataSource = new MatTableDataSource<Ppe>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor( private ppesService: PpesService ) { }

  ngOnInit(): void {
    this.ppesService.getPpeList().subscribe( dataSource => this.dataSource.data = dataSource );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
