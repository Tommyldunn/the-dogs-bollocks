import { Component, OnInit } from '@angular/core';

import { Member } from '../_models/member';
import { MemberService } from '../_services/member.service';

@Component({
  selector: 'site-site-members',
  templateUrl: './site-members.component.html',
  styles: [` h2 { color: #ef4e7b; } .card p { padding-bottom: 0; margin-top: 0; margin-bottom: 0;}
    .image.is-4by3 { padding-top: 2.5em;}.image.is-4by3 img { position: relative;}
            p.title { color:  #ef4e7b; font-weight: bold;} a.icon { margin-top: .5em;}`]
})
export class SiteMembersComponent implements OnInit {
  members: Member[] = [];
  error: any;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.members = [];
    this.memberService.getMembers()
      .subscribe(members => {
        this.members = this.members = members;
      });
  }
}
