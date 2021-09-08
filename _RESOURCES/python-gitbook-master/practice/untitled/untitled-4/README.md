# Linked List

{% tabs %}
{% tab title="Implementation " %}
```python
"""The LinkedList code from before is provided below.
Add three functions to the LinkedList.
"get_position" returns the element at a certain position.
The "insert" function will add an element to a particular
spot in the list.
"delete" will delete the first element with that
particular value.
Then, use "Test Run" and "Submit" to run the test cases
at the bottom."""

class Element(object):
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList(object):
    def __init__(self, head=None):
        self.head = head

    def append(self, new_element):
        current = self.head
        if self.head:
            while current.next:
                current = current.next
            current.next = new_element
        else:
            self.head = new_element

    def get_position(self, position):
        """Get an element from a particular position.
        Assume the first position is "1".
        Return "None" if position is not in the list."""
        current = self.head
        if(self.head):
            for i in range(position)[1:]:
                if(current.next==None):
                    return None
                else:
                    current=current.next
            return current
        return None

    def insert(self, new_element, position):
        """Insert a new node at the given position.
        Assume the first position is "1".
        Inserting at position 3 means between
        the 2nd and 3rd elements."""
        current = self.head
        if(self.head):
            for i in range(position)[1:]:
                if(i==position-1):
                    after = current.next
                    current.next = new_element
                    new_element.next = after
                elif(current.next!=None):
                    current = current.next
                else:
                    return 'position out of bounds'
        pass


    def delete(self, value):
        """Delete the first node with a given value."""
        current = self.head
        if(self.head):
            while(current.next!=None):
                if(current.next.value==value):
                    after = current.next.next
                    current.next = after
                else:
                    current = current.next

        if(self.head.value==value):
            after = self.head.next
            self.head = after
        pass

# Test cases
# Set up some Elements
e1 = Element(1)
e2 = Element(2)
e3 = Element(3)
e4 = Element(4)

# Start setting up a LinkedList
ll = LinkedList(e1)
ll.append(e2)
ll.append(e3)

# Test get_position
# Should print 3
print ll.head.next.next.value
# Should also print 3
print ll.get_position(3).value

# Test insert
ll.insert(e4,3)
# Should print 4 now
print ll.get_position(3).value

# Test delete
ll.delete(1)
# Should print 2 now
print ll.get_position(1).value
# Should print 4 now
print ll.get_position(2).value
# Should print 3 now
print ll.get_position(3).value

```
{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}

{% tab title="Advanced" %}
```python
from __future__ import annotations

from collections.abc import Iterable, Iterator
from typing import Optional

from graph_examples.linked_lists.base_lists import (
    BaseCircularLinkedList,
    BaseLinearLinkedList,
    BaseDoublyLinkedList,
    BaseSinglyLinkedList,
)
from graph_examples.linked_lists.nodes import LinkedNode, DoublyLinkedNode, CircularLinkedNode, CircularDoublyLinkedNode
from graph_examples.linked_lists.base_nodes import T


class LinkedList(BaseLinearLinkedList[T], BaseSinglyLinkedList[T]):
    def __init__(self, values: Iterable[T] = ()) -> None:
        values_iter = iter(values)
        try:
            self.head = LinkedNode(next(values_iter))
        except StopIteration:
            self.head = None
        node = self.head
        for value in values_iter:
            node.next = LinkedNode(value)
            node = node.next

    def appendleft(self, value: T) -> None:
        self.head = LinkedNode(value, self.head)

    def popleft(self) -> T:
        if not self:
            raise IndexError
        node = self.head
        self.head = node.next
        return node.value

    def reverse(self) -> None:
        node = self.head
        last_node = None
        while node is not None:
            node.next, last_node, node = last_node, node, node.next
        self.head = last_node


class DoublyLinkedList(BaseLinearLinkedList[T], BaseDoublyLinkedList[T]):
    def __init__(self, values: Iterable = ()) -> None:
        values_iter = iter(values)
        try:
            self.head = DoublyLinkedNode(next(values_iter))
        except StopIteration:
            self.head = None
        node = self.head
        for value in values_iter:
            node.next = DoublyLinkedNode(value, None, node)
            node = node.next
        self.tail = node

    def __reversed__(self) -> Iterator[T]:
        node = self.tail
        while node is not None:
            yield node.value
            node = node.last

    def append(self, value: T):
        old_tail = self.tail
        self.tail = DoublyLinkedNode(value, None, old_tail)
        if old_tail is None:
            self.head = self.tail
        else:
            old_tail.next = self.tail

    def appendleft(self, value: T):
        old_head = self.head
        self.head = DoublyLinkedNode(value, old_head)
        if old_head is None:
            self.tail = self.head
        else:
            old_head.last = self.head

    def pop(self) -> T:
        if not self:
            raise IndexError
        old_tail = self.tail
        self.tail = old_tail.last
        if self.tail is None:
            self.head = None
        else:
            self.tail.next = None
        return old_tail.value

    def popleft(self) -> T:
        if not self:
            raise IndexError
        old_head = self.head
        self.head = old_head.next
        if self.head is None:
            self.tail = None
        else:
            self.head.last = None
        return old_head.value

    def reverse(self) -> None:
        node = self.head
        self.head, self.tail = self.tail, self.head
        while node is not None:
            node.next, node.last, node = node.last, node.next, node.next


class CircularLinkedList(BaseCircularLinkedList[T], BaseSinglyLinkedList[T]):
    def __init__(self, values: Iterable[T] = ()):
        values_iter = iter(values)
        try:
            head = CircularLinkedNode(next(values_iter))
        except StopIteration:
            head = None
        node = head
        for value in values_iter:
            node.next = CircularLinkedNode(value, head)
            node = node.next
        self.tail = node

    @property
    def head(self) -> CircularLinkedNode[T]:
        return self.tail.next

    @head.setter
    def head(self, node: CircularLinkedNode[T]):
        self.tail.next = node

    def appendleft(self, value: T) -> None:
        if not self:
            self.tail = CircularLinkedNode(value)
        else:
            self.head = CircularLinkedNode(value, self.head)

    def reverse(self) -> None:
        if not self:
            return
        node = self.head
        last_node = self.tail
        while node is not self.tail:
            node.next, last_node, node = last_node, node, node.next
        self.tail.next, self.tail = last_node, self.head


class CircularDoublyLinkedList(BaseCircularLinkedList[T], BaseDoublyLinkedList[T]):
    tail: Optional[CircularDoublyLinkedNode[T]]
    head: Optional[CircularDoublyLinkedNode[T]]

    def __init__(self, values: Iterable[T] = ()) -> None:
        values_iter = iter(values)
        try:
            head = CircularDoublyLinkedNode(next(values_iter))
        except StopIteration:
            head = None
        node = head
        for value in values_iter:
            node.next = CircularDoublyLinkedNode(value, head, node)
            node = node.next
            head.last = node
        self.tail = node

    @property
    def head(self) -> CircularDoublyLinkedNode[T]:
        return self.tail.next

    def __reversed__(self) -> Iterator[T]:
        if not self:
            return
        yield self.tail.value
        node = self.tail.last
        while node is not self.tail:
            yield node.value
            node = node.last

    def append(self, value: T) -> None:
        if not self:
            self.tail = CircularDoublyLinkedNode(value)
        else:
            self.tail = CircularDoublyLinkedNode(value, self.head, self.tail)
            self.tail.last.next = self.tail
            self.head.last = self.tail

    def appendleft(self, value: T) -> None:
        if not self:
            self.tail = CircularDoublyLinkedNode(value)
        else:
            self.tail.next = CircularDoublyLinkedNode(value, self.head, self.tail)
            self.head.next.last = self.tail.next

    def pop(self) -> T:
        if not self:
            raise IndexError
        value = self.tail.value
        if self.tail is self.head:
            self.tail = None
        else:
            self.tail.last.next, self.head.last, self.tail = self.head, self.tail.last, self.tail.last
        return value

    def popleft(self) -> T:
        if not self:
            raise IndexError
        value = self.head.value
        if self.tail is self.head:
            self.tail = None
        else:
            self.tail.next = self.tail.next.next
            self.tail.next.last = self.tail
        return value

    def reverse(self) -> None:
        if not self:
            return
        node = self.head
        while node is not self.tail:
            node.next, node.last, node = node.last, node.next, node.next
        self.tail.next, self.tail.last, self.tail = self.tail.last, self.tail.next, self.tail.next

```
{% endtab %}
{% endtabs %}

A linked list is similar to an array, it holds values. However, links in a linked  list do not have indexes.

* This is an example of a double ended, doubly linked list.
* Each link references the next link and the previous one.
* A Doubly Linked List \(DLL\) contains an extra pointer, typically called previous

    pointer, together with next pointer and data which are there in singly linked list.

  * Advantages over SLL - It can be traversed in both forward and backward direction.

     Delete operation is more efficient

```python
"""Each ListNode holds a reference to its previous node
as well as its next node in the List."""
class ListNode:
  def __init__(self, value, prev=None, next=None):
    self.value = value
    self.prev = prev
    self.next = next

  """Wrap the given value in a ListNode and insert it
  after this node. Note that this node could already
  have a next node it is point to."""
  def insert_after(self, value):
    current_next = self.next
    self.next = ListNode(value, self, current_next)
    if current_next:
      current_next.prev = self.next

  """Wrap the given value in a ListNode and insert it
  before this node. Note that this node could already
  have a previous node it is point to."""
  def insert_before(self, value):
    current_prev = self.prev
    self.prev = ListNode(value, current_prev, self)
    if current_prev:
      current_prev.next = self.prev

  """Rearranges this ListNode's previous and next pointers
  accordingly, effectively deleting this ListNode."""
  def delete(self):
    if self.prev:
      self.prev.next = self.next
    if self.next:
      self.next.prev = self.prev

"""Our doubly-linked list class. It holds references to
the list's head and tail nodes."""
class DoublyLinkedList:
  def __init__(self, node=None):
    self.head = node
    self.tail = node
    self.length = 1 if node is not None else 0

  def __len__(self):
    return self.length

  def add_to_head(self, value):
    pass

  def remove_from_head(self):
    pass

  def add_to_tail(self, value):
    pass

  def remove_from_tail(self):
    pass

  def move_to_front(self, node):
    pass

  def move_to_end(self, node):
    pass

  def delete(self, node):
    pass
    
  def get_max(self):
    pass

```





Test:

```python
import unittest
from doubly_linked_list import ListNode
from doubly_linked_list import DoublyLinkedList

class DoublyLinkedListTests(unittest.TestCase):
  def setUp(self):
    self.node = ListNode(1)
    self.dll = DoublyLinkedList(self.node)

  def test_list_remove_from_tail(self):
    self.dll.remove_from_tail()
    self.assertIsNone(self.dll.head)
    self.assertIsNone(self.dll.tail)
    self.assertEqual(len(self.dll), 0)

    self.dll.add_to_tail(33)
    self.assertEqual(self.dll.head.value, 33)
    self.assertEqual(self.dll.tail.value, 33)
    self.assertEqual(len(self.dll), 1)
    self.assertEqual(self.dll.remove_from_tail(), 33)
    self.assertEqual(len(self.dll), 0)

    self.dll.add_to_tail(68)
    self.assertEqual(len(self.dll), 1)
    self.assertEqual(self.dll.remove_from_tail(), 68)
    self.assertEqual(len(self.dll), 0)

  def test_list_remove_from_head(self):
    self.dll.remove_from_head()
    self.assertIsNone(self.dll.head)
    self.assertIsNone(self.dll.tail)
    self.assertEqual(len(self.dll), 0)

    self.dll.add_to_head(2)
    self.assertEqual(self.dll.head.value, 2)
    self.assertEqual(self.dll.tail.value, 2)
    self.assertEqual(len(self.dll), 1)
    self.assertEqual(self.dll.remove_from_head(), 2)
    self.assertEqual(len(self.dll), 0)
    
    self.dll.add_to_head(55)
    self.assertEqual(len(self.dll), 1)
    self.assertEqual(self.dll.remove_from_head(), 55)
    self.assertEqual(len(self.dll), 0)

  def test_list_add_to_tail(self):
    self.assertEqual(self.dll.tail.value, 1)
    self.assertEqual(len(self.dll), 1)

    self.dll.add_to_tail(30)
    self.assertEqual(self.dll.tail.prev.value, 1)
    self.assertEqual(self.dll.tail.value, 30)
    self.assertEqual(len(self.dll), 2)

    self.dll.add_to_tail(20)
    self.assertEqual(self.dll.tail.prev.value, 30)
    self.assertEqual(self.dll.tail.value, 20)
    self.assertEqual(len(self.dll), 3)

  def test_node_delete(self):
    node_1 = ListNode(3)
    node_2 = ListNode(4)
    node_3 = ListNode(5)

    node_1.next = node_2
    node_2.next = node_3
    node_2.prev = node_1
    node_3.prev = node_2

    node_2.delete()

    self.assertEqual(node_1.next, node_3)
    self.assertEqual(node_3.prev, node_1)

  def test_node_insert_before(self):
    self.node.insert_before(0)
    self.assertEqual(self.node.prev.value, 0)

  def test_list_add_to_head(self):
    self.assertEqual(self.dll.head.value, 1)

    self.dll.add_to_head(10)
    self.assertEqual(self.dll.head.value, 10)
    self.assertEqual(self.dll.head.next.value, 1)
    self.assertEqual(len(self.dll), 2)

  def test_node_insert_after(self):
    self.node.insert_after(2)
    self.assertEqual(self.node.next.value, 2)

  def test_list_move_to_end(self):
    self.dll.add_to_head(40)
    self.assertEqual(self.dll.tail.value, 1)
    self.assertEqual(self.dll.head.value, 40)

    self.dll.move_to_end(self.dll.head)
    self.assertEqual(self.dll.tail.value, 40)
    self.assertEqual(self.dll.tail.prev.value, 1)
    self.assertEqual(len(self.dll), 2)

    self.dll.add_to_tail(4)
    self.dll.move_to_end(self.dll.head.next)
    self.assertEqual(self.dll.tail.value, 40)
    self.assertEqual(self.dll.tail.prev.value, 4)
    self.assertEqual(len(self.dll), 3)

  def test_list_move_to_front(self):
    self.dll.add_to_tail(3)
    self.assertEqual(self.dll.head.value, 1)
    self.assertEqual(self.dll.tail.value, 3)

    self.dll.move_to_front(self.dll.tail)
    self.assertEqual(self.dll.head.value, 3)
    self.assertEqual(self.dll.head.next.value, 1)
    self.assertEqual(len(self.dll), 2)

    self.dll.add_to_head(29)
    self.dll.move_to_front(self.dll.head.next)
    self.assertEqual(self.dll.head.value, 3)
    self.assertEqual(self.dll.head.next.value, 29)
    self.assertEqual(len(self.dll), 3)

  def test_list_delete(self):
    self.dll.delete(self.node)
    self.assertIsNone(self.dll.head)
    self.assertIsNone(self.dll.tail)
    self.assertEqual(len(self.dll), 0)

    self.dll.add_to_tail(1)
    self.dll.add_to_head(9)
    self.dll.add_to_tail(6)

    self.dll.delete(self.dll.head)
    self.assertEqual(self.dll.head.value, 1)
    self.assertEqual(self.dll.tail.value, 6)
    self.assertEqual(len(self.dll), 2)

    self.dll.delete(self.dll.head)
    self.assertEqual(self.dll.head.value, 6)
    self.assertEqual(self.dll.tail.value, 6)
    self.assertEqual(len(self.dll), 1)

  def test_get_max(self):
    self.assertEqual(self.dll.get_max(), 1)
    self.dll.add_to_tail(100)
    self.assertEqual(self.dll.get_max(), 100)
    self.dll.add_to_tail(55)
    self.assertEqual(self.dll.get_max(), 100)
    self.dll.add_to_tail(101)
    self.assertEqual(self.dll.get_max(), 101)

if __name__ == '__main__':
  unittest.main()
```



