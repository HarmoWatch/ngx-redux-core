import { ReduxStateSelectorDataType } from './data-type';

export function reduxStateSelectorDataTypeFactory(dataType: string): ReduxStateSelectorDataType {
  return {
    BehaviorSubject: ReduxStateSelectorDataType.BEHAVIOR_SUBJECT,
    Observable: ReduxStateSelectorDataType.OBSERVABLE,
    ReplaySubject: ReduxStateSelectorDataType.REPLAY_SUBJECT,
    Subject: ReduxStateSelectorDataType.SUBJECT,
  }[ dataType ];
}
