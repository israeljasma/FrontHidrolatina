import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../interfaces/users.intarface';
import { UsersService } from '../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../components/confirm/confirm.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['username', 'name', 'last_name', 'email', 'last_login', 'actions'];
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private usersService: UsersService, private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadUsers(){
    this.usersService.getUsersList().subscribe( dataSource => this.dataSource.data = dataSource );
  }

  delete(user: User, id: string){
    const dialog = this.dialog.open( ConfirmComponent, {
      width: '300px',
      data: user
    });

    dialog.afterClosed().subscribe( (result ) => {
      if (result) {
        this.usersService.deleteUser( id ).subscribe( resp => { this.showSnackBar('Usuario eliminado con exito!') });
        this.loadUsers();
      }
    } );
    // this.userService.deleteUser( id ).subscribe( resp => { this.router.navigate(['/users']) });
  }

  showSnackBar(message: string){
    this.snackBar.open(message, 'Cerrar', { duration:3500 })
  }

}
