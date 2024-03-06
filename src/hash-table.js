export default class HashTable {
  constructor() {
    this.array = []
  }

  hash(key) {
    return key.charAt(0).toUpperCase().charCodeAt(0) - 65
  }

  set(key, value) {
    const hash = this.hash(key)
    const bucket = this.array[hash]
    if (!bucket) {
      this.array[hash] = [[key, value]]
    }
    else
    {
      bucket.push([key, value])
    }
  }

  get(key) {
    const bucket = this.array[this.hash(key)]
    if (!bucket) {
      return false
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1]
      }
    }
    return false
  }
}
