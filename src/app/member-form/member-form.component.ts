import {Component, OnInit} from '@angular/core';
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
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let house = '';
    let pet = '';
    let florida = '';
    let boat = '';

    this.entryForm = new FormGroup({
      'house': new FormControl(house),
      'pet': new FormControl(pet),
      'florida': new FormControl(florida),
      'boat': new FormControl(boat)
    });
  }

  onSubmit(form: NgForm) {
    const house = form.value.house;
    const pet = form.value.pet;
    const florida = form.value.florida;
    const boat = form.value.boat;

    console.log(house);

    this.router.navigate(['../results'], {relativeTo: this.route});
  }
}
