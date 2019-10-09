import { NgModule } from '@angular/core';
import { DatePipe } from './date.pipe';
import { DurationPipe } from './duration.pipe';

@NgModule({
  imports: [
  ],
  declarations: [
    DurationPipe,
    DatePipe
  ],
  exports: [
    DurationPipe,
    DatePipe
  ],
})
export class ApplicationPipesModule {}
