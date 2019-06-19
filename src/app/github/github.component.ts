import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';


interface GitUser {
  login: '',
  avatar_url: string; // "https://avatars2.githubusercontent.com/u/29612435?v=4"
  company: string; // "CINQ - Technologies"
  name: string;
  public_repos: number; //26
  repos_url: any; //"https://api.github.com/users/gbrivate/repos"
}

@Component({
  selector: 'app-github',
  template: `
    <div>
      <input [(ngModel)]="gitUser.name">
      <br>
      <button (click)="loadGitUser()">
        Get git user!!
      </button>
      <br>
      <img *ngIf="profilePic" [src]="profilePic" width="100" height="100">
      <label *ngIf="loading">Loading..</label>
      <br>
      <button (click)="listGitRepo()" *ngIf="profilePic">
        Show my repo now!!!
      </button>
      <br>
      <ul *ngFor="let repo of listRepo">
        <li>Repo name:{{repo.name}}</li>
      </ul>
      <div>

  `
})
export class GithubComponent implements OnInit {

  gitUser: GitUser;

  profilePic: SafeUrl;

  loading: boolean;

  listRepo: any[];

  constructor(private httpClient: HttpClient,
              private domSanitizer: DomSanitizer,
              private route: ActivatedRoute) {
    this.gitUser = <GitUser> {
      avatar_url: '',
      company: '',
      name: '',
      public_repos: 0,
      repos_url: ''
    };
    this.loading = false;

  }

  ngOnInit(): void {
    let param = '';
    this.route.paramMap.subscribe(params => {
      param = params.get('gituser');
      if (param) {
        this.gitUser.name = param;
        this.loadGitUser();
      }
    });
  }

  loadGitUser(): void {
    this.loading = true;
    const url = 'https://api.github.com/users/' + this.gitUser.name;
    this.httpClient.get(url)
      .subscribe((response: GitUser) => {
        this.loading = false;
        this.gitUser = response;
        this.profilePic = this.domSanitizer.bypassSecurityTrustUrl(this.gitUser.avatar_url);
      }, (e) => {
        this.loading = false;
        console.log('Error in getting github profile');
      });
  }

  listGitRepo(): void {
    this.loading = true;
    const url = 'https://api.github.com/users/' + this.gitUser.login + '/repos';
    this.httpClient.get(url)
      .subscribe((response: any) => {
        this.listRepo = response;
      });

  }

}
