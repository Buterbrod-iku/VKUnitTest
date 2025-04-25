const { Node, First } = require('../script.js');
const { describe, test, expect } = require('@jest/globals');

describe('Doubly linked list and related logic', () => {
  // 1
  test('Node initializes value correctly', () => {
    const node = new Node('foo');
    expect(node.value).toBe('foo');
  });

  // 2
  test('Node initializes prev and next to null', () => {
    const node = new Node('bar');
    expect(node.prev).toBeNull();
    expect(node.next).toBeNull();
  });

  // 3
  test('First constructor without head sets head and tail to null', () => {
    const list = new First();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  // 4
  test('add on empty list returns the list instance', () => {
    const list = new First();
    expect(list.add(1)).toBe(list);
  });

  // 5
  test('add on empty list sets head and tail to the new node', () => {
    const list = new First();
    list.add(10);
    expect(list.head).toBeInstanceOf(Node);
    expect(list.tail).toBe(list.head);
    expect(list.head.value).toBe(10);
    expect(list.head.prev).toBeNull();
    expect(list.head.next).toBeNull();
  });

  // 6
  test('second add returns undefined', () => {
    const list = new First();
    list.add(5);
    expect(list.add(6)).toBeUndefined();
  });

  // 7
  test('add links two nodes correctly (prev/next)', () => {
    const list = new First();
    list.add('a');
    list.add('b');
    expect(list.head.next).toBe(list.tail);
    expect(list.tail.prev).toBe(list.head);
  });

  // 8
  test('multiple adds update tail correctly and maintain order', () => {
    const list = new First();
    [1, 2, 3, 4].forEach(v => list.add(v));
    expect(list.tail.value).toBe(4);

    const values = [];
    let cur = list.head;
    while (cur) {
      values.push(cur.value);
      cur = cur.next;
    }
    expect(values).toEqual([1, 2, 3, 4]);
  });

  // 9
  test('Map-based removal logic removes entries after the first occurrence of n', () => {
    const n = 3;
    const testList = new Map([
      ['1', 10],
      ['2', 22],
      ['3', 3],
      ['4', 4],
      ['5', 6],
      ['6', 234],
      ['7', 55],
    ]);

    let countTest = 0;
    for (const key of Array.from(testList.keys())) {
      if (countTest > 0) {
        testList.delete(key);
      }
      if (testList.get(key) === n) {
        countTest++;
      }
    }

    expect(Array.from(testList.keys())).toEqual(['1', '2', '3']);
    expect(Array.from(testList.values())).toEqual([10, 22, 3]);
  });

  // 10
  test('after adding two items, head.prev remains null and tail.next remains null', () => {
    const list = new First();
    list.add(100);
    list.add(200);
    expect(list.head.prev).toBeNull();
    expect(list.tail.next).toBeNull();
  });

  // 11
  test('constructor with provided head sets head and leaves tail null', () => {
    const customHead = new Node(999);
    const list = new First(customHead);
    expect(list.head).toBe(customHead);
    expect(list.tail).toBeNull();
  });
});