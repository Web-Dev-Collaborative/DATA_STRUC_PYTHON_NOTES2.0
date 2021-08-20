class ListNode(object):
    def __init__(self, x):
        self.value = x
        self.next = None
        # Function to initialize head

        def __init__(self):
            self.head = None

            def reverseLinkedList(l):
                previous = None
                current = head
                while current:
                    next = current.next
                    current.next = previous
                    previous = current
                    current = next
                    return previous

            head = reverseLinkedList(head)
