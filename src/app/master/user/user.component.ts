import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup
} from "@angular/forms";
import { MessageService, SelectItem } from "primeng/api";
import { UserService } from "src/app/_services/user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  userform: FormGroup;

  submitted: boolean;

  genders: SelectItem[];

  description: string;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userform = this.fb.group({
      id: new FormControl(0),
      firstName: new FormControl("", Validators.required),
      middleName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      userName: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ]),
      password: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
      description: new FormControl(""),
      gender: new FormControl("", Validators.required)
    });

    this.genders = [];
    this.genders.push({ label: "Select Gender", value: 0 });
    this.genders.push({ label: "Male", value: 1 });
    this.genders.push({ label: "Female", value: 2 });
  }

  onSubmit(value: string) {
    this.submitted = true;
    // this.messageService.add({
    //   severity: "info",
    //   summary: "Success",
    //   detail: "Form Submitted"
    // });
    this.createUser();
  }

  get diagnostic() {
    return JSON.stringify(this.userform.value);
  }
  createUser() {
    console.log(this.userform.value);
    this.userService.createUser(this.userform.value).subscribe(
      user => {
        this.messageService.add({
          severity: "info",
          summary: "sucess",
          detail: "User Created Sucessfully"
        });
      },
      error => {
        console.log(error);
        this.messageService.add({
          severity: "error",
          summary: "error",
          detail: "Error occured" + JSON.stringify(error.error)
        });
      }
    );
  }
}
