import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carfilter'
})
export class CarfilterPipe implements PipeTransform {

  transform(value: any[], searchcar:any): any {
    return value.filter((e:any)=>{
       return  e.carName.toLowerCase().indexOf(searchcar)>-1;
    })
    ;
  }

}
