import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {

  entryForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let house = '';
    let pet = '';

    this.entryForm = new FormGroup({
      'house': new FormControl(house, Validators.required),
      'pet': new FormControl(pet, Validators.required),
    });
  }

  onSubmit(form: NgForm) {
    const house = form.value.house;
    const pet = form.value.pet;

    this.router.navigate(['../results'], {relativeTo: this.route});
  }
}
