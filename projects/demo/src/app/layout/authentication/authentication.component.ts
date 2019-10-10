import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatDialog } from '@angular/material';
import IUser from '../../../../../shared-modules/users/user/interfaces/IUser';
import { UserService } from '../../../../../shared-modules/users/user/user.service';
import { DialogComponent } from '../../../../../shared-modules/users/dialog/dialog.component';
import { CONFIG } from '../../config/config';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  currentUser: IUser;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public dialog: MatDialog,
    private userService: UserService,
  ) {

  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.currentUser = JSON.parse(localStorage.getItem(CONFIG.LOCAL_STORAGE.CURRENT_USER)) as IUser;
    }
  }

  public login(): void {
    this.openDialogAddItem();
  }

  public logout() {
    localStorage.removeItem(CONFIG.LOCAL_STORAGE.CURRENT_USER);
    this.currentUser = null;
  }

  private openDialogAddItem(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { name: 'name', user: {} }
    });

    dialogRef.afterClosed().subscribe(result => {
      const item = result as IUser;
      const subscription = this.userService.getItemFromPortblog(item)
        .subscribe((data) => {
          this.currentUser = data as IUser;
          if (this.currentUser.image === null) {
            this.currentUser.image = 'https://ru.askgames.net/images/ava.png';
          }
          localStorage.setItem(CONFIG.LOCAL_STORAGE.CURRENT_USER, JSON.stringify(this.currentUser));
          console.log(localStorage);
          subscription.unsubscribe();
        });
    });
  }
}
