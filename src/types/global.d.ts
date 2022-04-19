export {}

declare global {
  namespace NodeJS {
    interface Global {
      mongoose: {
        conn: any
        promise: any
      }
    }
  }
}
