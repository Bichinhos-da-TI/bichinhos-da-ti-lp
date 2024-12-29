import {
  EnvironmentProviders,
  importProvidersFrom,
  Injectable,
  Provider,
} from '@angular/core';
import {
  HAMMER_GESTURE_CONFIG,
  HammerGestureConfig,
  HammerModule,
} from '@angular/platform-browser';

@Injectable()
export class HammerConfig extends HammerGestureConfig {
  override overrides = {
    swipe: { velocity: 0.2, threshold: 10 },
  };
}

export function provideHammer(): (Provider | EnvironmentProviders)[] {
  return [
    importProvidersFrom(HammerModule),
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig,
    },
  ];
}
