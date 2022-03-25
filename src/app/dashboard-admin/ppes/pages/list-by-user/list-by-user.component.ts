import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PpesService } from '../../services/ppes.service';
import { switchMap, tap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Ppe } from '../../interfaces/ppes.intarface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list-by-user',
  templateUrl: './list-by-user.component.html',
  styleUrls: ['./list-by-user.component.css']
})
export class ListByUserComponent implements OnInit {

  displayedColumns: string[] = ['helmet', 'headphones', 'goggles', 'gloves', 'boots', 'date'];
  dataSource = new MatTableDataSource<Ppe>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private activateRoute: ActivatedRoute, private ppesService: PpesService ) { }

  ngOnInit(): void {
    this.activateRoute.params.pipe( switchMap( (param) => this.ppesService.getPpeListByUser( param['id'] )), tap( console.log ) ).subscribe( dataSource => this.dataSource.data = dataSource );
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
