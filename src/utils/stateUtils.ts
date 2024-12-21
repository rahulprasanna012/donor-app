import { US_STATES } from '../constants/states';

export function getStateName(stateCode: string): string {
  const state = US_STATES.find(state => state.code === stateCode);
  return state ? state.name : stateCode;
}