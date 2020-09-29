import { Injectable, Inject, Scope } from '@nestjs/common';
import { BPMNProcessDocType } from '@wenex/workflow-lib/lib/bpmn';
import { BPMNEngine } from '@wenex/workflow-lib/lib';

@Injectable({ scope: Scope.REQUEST })
export class EngineService extends BPMNEngine {
  constructor(@Inject('PROCESS') process?: BPMNProcessDocType) {
    super({ process });
  }
}
