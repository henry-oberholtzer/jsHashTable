import HashTable from "../src/hash-table";

describe('HashTable', () => {
  let hashTable = new HashTable();
  afterEach(() => {
    hashTable = new HashTable();
  });

  test('should instantiate a hash with an empty array', () => {
    expect(hashTable.array).toEqual([]);
  });
  test('should return a number representation of a letter', () => {
    expect(hashTable.hash("A")).toEqual(0)
    expect(hashTable.hash("Z")).toEqual(25)
  })
  test('number should be irrespective of case', () => {
    expect(hashTable.hash("a")).toEqual(0)
    expect(hashTable.hash("z")).toEqual(25)
  })
  test('should hash the first character of a string only', () => {
    expect(hashTable.hash("Abel")).toEqual(0)
    expect(hashTable.hash("cain")).toEqual(2)
  })
  test('should set a key-value pair in the hash table', () => {
    hashTable.set("Vivec", "Capital");
    expect(hashTable.array[21]).toEqual([["Vivec", "Capital"]]);
  })
  test('should extend a bucket if already exists', () => {
    hashTable.set("Vivec", "Capital");
    hashTable.set("Vos", "Telvanni");
    expect(hashTable.array[21]).toEqual([["Vivec", "Capital"], ["Vos", "Telvanni"]])
  })
  test('should correctly get a key-value pair from a hash-table', () => {
    hashTable.set("Vivec", "Capital");
    hashTable.set("Vos", "Telvanni");
    expect(hashTable.get("Vivec")).toEqual("Capital");
  })
  test('should return false if item does not exist', () => {
    hashTable.set("Vivec", "Capital")
    expect(hashTable.get("Vos")).toEqual(false)
    expect(hashTable.get("Ald'ruhn")).toEqual(false)
  })
});
