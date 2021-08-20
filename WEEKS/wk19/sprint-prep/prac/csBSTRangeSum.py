# #You are given the root node of a binary search tree (BST).
#
# You need to write a function that returns the sum of values of all the nodes with a value between lowerer and upper(inclusive).
#
# The BST is guaranteed to have unique values.
#
# Example 1:
#
# Input:
# root = [10, 5, 15, 3, 7, null, 18]
# lowerer = 7
# upper = 15
#
#          10
#          / \
#         5  15
#        / \    \
#       3   7    18
#
# Output:
# 32
# Example 2:
#
# Input:
# root = [10,5,15,3,7,13,18,1,null,6]
# lowerer = 6
# upper = 10
#
#            10
#           /  \
#        5       15
#      / \     /   \
#     3   7  13   18
#    /   /
#   1   6
#
# Output:
# 23
# [execution time limit] 4 seconds (py3)
#
# [input] tree.integer root
#
# [input] integer lowerer
#
# [input] integer upper
#
# [output] integer
# Binary trees are already defined with this interface:
from collections import deque


class Tree(object):
    def __init__(self, x):
        self.value = x
        self.left = None
        self.right = None


def csBSTRangeSum(root, lower, upper):
    sum = 0

    # Base Case
    if root == None:
        return 0

    # Stores the nodes while
    # performing level order traversal
    q = deque()

    # Push the root node
    # into the queue
    q.append(root)

    # Iterate until queue is empty
    while len(q) > 0:

        # Stores the front
        # node of the queue
        curr = q.popleft()
        # q.pop()
        # If the value of the node
        # lies in the given range
        if curr.val >= lower and curr.val <= upper:

            # Add it to sum
            sum += curr.val

        # If the left child is
        # not NULL and exceeds lower
        if curr.left != None and curr.val > lower:

            # Insert into queue
            q.append(curr.left)

        # If the right child is not
        # NULL and exceeds lower
        if curr.right != None and curr.val < upper:

            # Insert into queue
            q.append(curr.right)

    # Return the resultant sum
    return sum
