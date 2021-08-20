class ListNode(object):
  def __init__(self, x):
    self.value = x
    self.next = None
      
    def reverseLinkedList(list):
      prev = None
      current = self.head
      while(current is not None):
            next = current.next
            current.next = prev
            prev = current
            current = next
            self.head = prev
            return self
        
       
    

    list = [1, 2, 3, 4, 5]
    print(reverseLinkedList(l))
