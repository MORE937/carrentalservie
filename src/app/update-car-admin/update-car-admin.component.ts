import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarService } from '../car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-car-admin',
  templateUrl: './update-car-admin.component.html',
  styleUrls: ['./update-car-admin.component.css']
})
export class UpdateCarAdminComponent {
   
  carId: number;
  list: any;
  file:File;

  carForm: FormGroup;
  selectedFile: File | null = null;
  imageUrl: any;

  constructor(private formBuilder: FormBuilder, private carService: CarService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.carForm = this.formBuilder.group({
      fileName: [''],
      nameOfBrand: [''],
      carName: [''],
      selectType: [''],
      selectTransmmission: [''],
      selectColor: [''],
      modelYear: [''],
      price: [''],
      description: ['']
    });

    this.route.paramMap.subscribe(params => {
      this.carId = +params.get('carId'); // Convert to number
    });
  }

  update(): void {
    console.warn(this.carId);
    
    if (this.carForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    if (!this.selectedFile) {
      console.log('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);
    Object.keys(this.carForm.controls).forEach(key => {
      formData.append(key, this.carForm.get(key).value);
    });

    // Assuming you have the carId available
    const carId = 1802// Update this with your carId

    this.carService.updateCar(carId, formData).subscribe(
      (res) => {
        console.log("Car updated successfully:", res);
        alert("Car updated successfully.");
        //this.carForm.reset();
        this.selectedFile = null;
      },
      (error) => {
        console.error("Error updating car:", error);
        alert("Error updating car. Please try again.");
      }
    );
  }

  onSelectedFileChange(event: any): void {
    const file = event.target.files[0];
    this.selectedFile = file;
    this.previewImage(file);
  }

  previewImage(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
