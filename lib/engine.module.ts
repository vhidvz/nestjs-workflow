import { BPMNProcessDocType } from '@wenex/workflow-lib/lib/bpmn';
import { Module, DynamicModule } from '@nestjs/common';
import { EngineService } from './engine.service';

@Module({})
export class EngineModule {
  static register({ process }: { process?: BPMNProcessDocType }): DynamicModule {
    return {
      module: EngineModule,
      providers: [
        {
          provide: 'PROCESS',
          useValue: process,
        },
        EngineService,
      ],
      exports: [EngineService],
    };
  }
}
