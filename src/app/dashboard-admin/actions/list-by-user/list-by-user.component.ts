import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Action} from '../interfaces/actions.intarface';
import { ActionsService } from '../services/actions.service';
import { switchMap, tap } from 'rxjs';
import { UsersService } from '../../users/services/users.service';
import { User } from 'src/app/auth/interfaces/auth.interface';

@Component({
  selector: 'app-list-by-user',
  templateUrl: './list-by-user.component.html',
  styleUrls: ['./list-by-user.component.css']
})
export class ListByUserComponent implements OnInit {

  displayedColumns: string[] = ['operator_present', 'action', 'risk', 'date'];
  dataSource = new MatTableDataSource<Action>();
  user!: User;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private activateRoute: ActivatedRoute, private actionsService: ActionsService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.activateRoute.params.pipe( switchMap( (param) => this.actionsService.getActionListByUser(param['id']))).subscribe( dataSource => this.dataSource.data = dataSource );
    this.activateRoute.params.pipe( switchMap( (param) => this.usersService.getUserDetail( param['id'] ))).subscribe( user => this.user = user );
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
