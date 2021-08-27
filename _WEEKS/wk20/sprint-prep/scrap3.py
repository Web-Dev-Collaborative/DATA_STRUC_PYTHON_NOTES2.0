# Singly-linked lists are already defined with this interface:
class ListNode(object):
  def __init__(self, x):
    self.value = x
    self.next = None


def condense_linked_list(node):
  current = head
  while current.next is not None:
          if second.value == current.value:
               current.next = current.next.next
           else:
               current = current.next
