import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from 'src/app/services/http/http.service';
import { AngularMaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [AngularMaterialModule, FormsModule ],
  providers: [HttpService]

})
export class SharedModule {}
