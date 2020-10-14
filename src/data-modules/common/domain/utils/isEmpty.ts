import { hasValue } from './hasValue';

export function isEmpty(value: string | null | undefined): boolean {
  return !hasValue(value) || value.trim() === '';
}
