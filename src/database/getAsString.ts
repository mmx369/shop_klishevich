export function getAsString(value: string | string[]): string {
  if (Array.isArray(value)) {
    return value[0] as string
  }
  return value
}