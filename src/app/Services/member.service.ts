import { Injectable } from '@angular/core';
import {Member} from "../Models/member.model";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private member: Member;

  constructor() { }

  public getMember() {
    return this.member;
  }

  public setMember(member: Member) {
    //console.log("ashdoiasjdoa" + member);
    this.member = member;
  }
}
