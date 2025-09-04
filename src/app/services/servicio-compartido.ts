import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
    providedIn:'root'
})
export class SharedService {
      private teachermesagesource=new Subject<String>();
      constructor(){}

      teachermesage$=this.teachermesagesource.asObservable();
    
      sedmessage(message:String){

        return this.teachermesagesource.next(message);
      }


 

}



