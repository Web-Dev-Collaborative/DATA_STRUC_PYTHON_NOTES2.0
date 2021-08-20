class ListNode(object):
  def __init__(self, x):
    self.value = x
    self.next = None

    def reverseLinkedList(l):
       prev = None
       current = self.head
       while(current is not None):
            next = current.next
            current.next = prev
            prev = current
            current = next
            self.head = prevself.head = prev
        

    
