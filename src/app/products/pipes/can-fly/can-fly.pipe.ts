import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(canFly: boolean = false): unknown {
    return canFly ? "Vuela" : "No vuela";
  }
}
