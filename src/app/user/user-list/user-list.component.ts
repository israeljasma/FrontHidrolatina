import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/auth.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../components/confirm/confirm.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['username', 'name', 'last_name', 'email', 'last_login', 'actions'];
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService, private router: Router, private snackBar: MatSnackBar, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.userService.getUsersList().subscribe( dataSource => this.dataSource.data = dataSource );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(user: User, id: string){
    const dialog = this.dialog.open( ConfirmComponent, {
      width: '300px',
      data: user
    });

    dialog.afterClosed().subscribe( (result ) => {
      if (result) {
        this.userService.deleteUser( id ).subscribe( resp => { this.showSnackBar('Usuario eliminado con exito!') });
        this.loadUsers();
      }
    } );
    // this.userService.deleteUser( id ).subscribe( resp => { this.router.navigate(['/users']) });
  }

  showSnackBar(message: string){
    this.snackBar.open(message, 'Cerrar', { duration:3500 })
  }
}
