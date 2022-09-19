import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatereference',
  templateUrl: './templatereference.component.html',
})
export class TemplatereferenceComponent implements OnInit {

  @ViewChild('contactForm') contactForm: NgForm;
 
  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
 
  contact: contact = new contact;
 
  ngOnInit() {
 
    this.contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: {
        city: "Mumbai",
        street: "Perry Cross Rd",
        pincode: "400050"
      }
    };
 
    setTimeout(() => {
      this.contactForm.setValue(this.contact);
    });
 
  }
 
  onSubmit() {
    console.log(this.contactForm.value);
  }
 
  setDefaults() {
    this.contactForm.setValue(this.contact);
  }
 
  changeCountry() {
    this.contactForm.controls["country"].setValue("1");
  }
 
  // patchValue to change the only few fields anytime
  patchValue() {
    let obj = {
      firstname: "Rahul",
      lastname: "Dravid",
      email: "rahul@gmail.com",
    };
 
    this.contactForm.control.patchValue(obj);
 
  }
 
  //Set value of nested FormGroup with patchValue
  changeAddress() {
    let obj = {
      city: "Bangalore",
      street: "Brigade Road",
      pincode: "600100"
    };
    let address= this.contactForm.controls["address"] as FormGroup
    address.patchValue(obj);
 
  }
 
  reset() {
    this.contactForm.reset();
  }
 
  resetForm() {
    this.contactForm.resetForm();
  }
}

export class contact {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  isMarried: boolean;
  country: string;
  address: {
    city: string;
    street: string;
    pincode: string;
  }
}
 
 
export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}