import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {DummyDataService} from "../Services/dummy-data.service";


@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {

  entryForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dummyService: DummyDataService) {
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let house = '';
    let pet = '';
    let florida = '';
    let boat = '';
    let name = '';
    let age = '';
    let branch = '';
    let rank = '';

    this.entryForm = new FormGroup({
      'house': new FormControl(house),
      'pet': new FormControl(pet),
      'florida': new FormControl(florida),
      'boat': new FormControl(boat),
      'name': new FormControl(name),
      'age': new FormControl(age),
      'branch': new FormControl(branch),
      'rank': new FormControl(rank)
    });
  }

  onSubmit(form: NgForm) {
    const name = form.value.name;
    const age = form.value.age;
    const branch = form.value.branch;
    const rank = form.value.rank;

    const house = form.value.house;
    if (house) {
      this.dummyService.generateContent("house");
    }
    const pet = form.value.pet;
    if (pet) {
      this.dummyService.generateContent("pet");
    }
    const florida = form.value.florida;
    if (florida) {
      this.dummyService.generateContent("florida");
    }
    const boat = form.value.boat;
    if (boat) {
      this.dummyService.generateContent("boat");
    }


    this.router.navigate(['../results'], {relativeTo: this.route});
  }
}
