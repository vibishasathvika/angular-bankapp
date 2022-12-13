import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(transactions:[] , searchKey:string , propName:string): any[] {
  const result:any = [];
  

  if(!transactions || searchKey==='' || propName===''){
    return transactions
  }
  transactions.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(searchKey.toLocaleLowerCase())){
        result.push(a)
        //console.log(result);
        
      }
     });
 return result;
  }

}
