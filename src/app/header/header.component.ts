import { Component, OnInit } from '@angular/core';
import {MemberService} from "../Services/member.service";
import {Member} from "../Models/member.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  member: Member;
  name: string = '';
  age: string = '';
  rank: string = '';
  branch: string = '';

  constructor(private memberService: MemberService) {
  }

  ngOnInit() {
    this.member = this.memberService.getMember();
    this.name = this.member.name;
    this.age = this.member.age;
    this.rank = this.member.rank;
    this.branch = this.member.branch;
  }

}
