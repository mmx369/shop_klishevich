export function getAsString(value: string | string[] | undefined): string {
  if (typeof value === 'undefined') {
    return ''
  }
  if (Array.isArray(value)) {
    return value[0] as string
  }
  return value
}
