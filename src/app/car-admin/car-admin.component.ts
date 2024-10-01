import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-car-admin',
  templateUrl: './car-admin.component.html',
  styleUrls: ['./car-admin.component.css']
})
export class CarAdminComponent {
  carForm: FormGroup;
  selectedFile: File | null = null;
  imageUrl: any;

  nameOfBrand:string;
  carName:string;
  selectType:string;
  selectTransmmition:string;
  selectColor:string;
  modelYear:string;
  price:string;
  description:string;
  chooseFile:string;

 

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.carForm = this.formBuilder.group({
      fileName: [''],
      nameOfBrand: ['' ],
      carName: [''],
      selectType: [''],
      selectTransmmission: [''],
      selectColor: [''],
      modelYear: [''],
      price: [''],
      description: ['']
    });
  }

  save(): void {
    console.log(this.carForm.value);
    
    if (this.carForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    if (!this.selectedFile) {
      console.log('No file selected');
      return;
    }
  
    let formData = new FormData();
    formData.append('file', this.selectedFile);
    Object.keys(this.carForm.controls).forEach(key => {
      formData.append(key, this.carForm.get(key).value);
    });

    this.http.post('http://localhost:8080/cars/add', formData)
      .subscribe((res: any) => {
        console.log("Data added successfully:", res);
        alert("Data added successfully:");
        this.carForm.reset();
        this.selectedFile = null;
      }, (error) => {
        console.error("Error occurred while adding data:", error);
      });
  }

  onSelectedFileChange(event: any): void {
    const file = event.target.files[0];
    this.selectedFile = file;
  }
  onchangimgae(event: any) {
    let file: File;
     file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

}
