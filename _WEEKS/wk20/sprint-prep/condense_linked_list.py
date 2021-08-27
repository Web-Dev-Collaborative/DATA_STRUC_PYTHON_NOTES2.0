# Singly-linked lists are already defined with this interface:
class ListNode(object):
  def __init__(self, x):
    self.value = x
    self.next = None


def condense_linked_list(node):
   dummy = ListNode(0)
     dummy.next = head

      visited = set()

       while head and head.next:

            visited.add(head.val)

            while head.next and head.next.val in visited:
                head.next = head.next.next

            head = head.next

        return dummy.next
