interface FetchCountCallback {
  (count: number): void
}

export default function fetchCount(callback: FetchCountCallback): void {
  callback(0)
}
