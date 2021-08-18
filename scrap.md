# DFS traversal of a tree using recursion - GeeksforGeeks

> A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions.

Given a Binary tree, Traverse it using DFS using recursion.

Unlike linear data structures (Array, Linked List, Queues, Stacks, etc) which have only one logical way to traverse them, trees can be traversed in different ways. Generally there are 2 widely used ways for traversing trees:

*   DFS or Depth First Search
*   BFS or Breadth First Search

In this article, traversal using DFS has been discussed. Please see [this post for Breadth First Traversal.](https://www.geeksforgeeks.org/level-order-tree-traversal/)

### Depth-first search

DFS (Depth-first search) is technique used for traversing tree or graph. Here backtracking is used for traversal. In this traversal first the deepest node is visited and then backtracks to it’s parent node if no sibling of that node exist.

### DFS Traversal of a Graph vs Tree

In graph, there might be cycles and dis-connectivity. Unlike graph, tree does not contain cycle and always connected. So DFS of a tree is relatively easier. We can simply begin from a node, then traverse its adjacent (or children) without caring about cycles. And if we begin from a single node (root), and traverse this way, it is guaranteed that we traverse the whole tree as there is no dis-connectivity,

  

Examples:

Tree:

![Example Tree](https://media.geeksforgeeks.org/wp-content/cdn-uploads/2009/06/tree12.gif "tree12")

Example Tree

Therefore, the Depth First Traversals of this Tree will be:
(a) Inorder   (Left, Root, Right) : 4 2 5 1 3
(b) Preorder  (Root, Left, Right) : 1 2 4 5 3
(c) Postorder (Left, Right, Root) : 4 5 2 3 1

Below are the Tree traversals through DFS using recursion:

1.  Inorder Traversal ([Practice](https://practice.geeksforgeeks.org/problems/inorder-traversal/1)):
    ------------------------------------------------------------------------------------------------
    
    **Example:** Inorder traversal for the above-given figure is 4 2 5 1 3.
    
    Algorithm Inorder(tree)
       1. Traverse the left subtree, i.e., call Inorder(left-subtree)
       2. Visit the root.
       3. Traverse the right subtree, i.e., call Inorder(right-subtree)
    
    **Implementation:**
    
    *   C++
    *   C
    *   Java
    *   Python
    *   C#
    
    C++
    ---
    
    C
    -
    
    Java
    ----
    
  ```py
    
    class Node:
    
     def __init__(self, key):
    
     self.left = None
    
     self.right = None
    
     self.val = key
    
    def printInorder(root):
    
     if root:
    
     printInorder(root.left)
    
     print(root.val),
    
     printInorder(root.right)
    
    root = Node(1)
    
    root.left = Node(2)
    
    root.right = Node(3)
    
    root.left.left = Node(4)
    
    root.left.right = Node(5)
    
    print "\nInorder traversal of binary tree is"
    
    printInorder(root)
```
    --
    
    **Output:**
    
    Inorder traversal of binary tree is 
    4 2 5 1 3
    
    **Uses of Inorder:**  
    In case of binary search trees (BST), Inorder traversal gives nodes in non-decreasing order. To get nodes of BST in non-increasing order, a variation of Inorder traversal where Inorder traversal s reversed can be used.
    
2.  Preorder Traversal ([Practice](https://practice.geeksforgeeks.org/problems/preorder-traversal/1)):
    --------------------------------------------------------------------------------------------------
    
    **Example:** Preorder traversal for the above given figure is 1 2 4 5 3.
    
      
      
    
    Algorithm Preorder(tree)
       1. Visit the root.
       2. Traverse the left subtree, i.e., call Preorder(left-subtree)
       3. Traverse the right subtree, i.e., call Preorder(right-subtree)
    
    **Implementation:**
    
    *   C++
    *   C
    *   Java
    *   Python
    *   C#
    
    C++
    ---
    
    C
    -
    
    Java
    ----
    
  ```py
    
    class Node:
    
     def __init__(self, key):
    
     self.left = None
    
     self.right = None
    
     self.val = key
    
    def printPreorder(root):
    
     if root:
    
     print(root.val),
    
     printPreorder(root.left)
    
     printPreorder(root.right)
    
    root = Node(1)
    
    root.left = Node(2)
    
    root.right = Node(3)
    
    root.left.left = Node(4)
    
    root.left.right = Node(5)
    
    print "Preorder traversal of binary tree is"
    
    printPreorder(root)
```
    --
    
    **Output:**
    
    Preorder traversal of binary tree is 
    1 2 4 5 3
    
    **Uses of Preorder:**  
    Preorder traversal is used to create a copy of the tree. Preorder traversal is also used to get prefix expression on of an expression tree. Please see [http://en.wikipedia.org/wiki/Polish\_notation](http://en.wikipedia.org/wiki/Polish_notation) to know why prefix expressions are useful.
    
3.  Postorder Traversal ([Practice](https://practice.geeksforgeeks.org/problems/postorder-traversal/1)):
    ----------------------------------------------------------------------------------------------------
    
    **Example:** Postorder traversal for the above given Tree is 4 5 2 3 1.
    
    Algorithm Postorder(tree)
       1. Traverse the left subtree, i.e., call Postorder(left-subtree)
       2. Traverse the right subtree, i.e., call Postorder(right-subtree)
       3. Visit the root.
    
    **Implementation:**
    
    *   C++
    *   C
    *   Java
    *   Python
    *   C#
    
    C++
    ---
    
    C
    -
    
    Java
    ----
    
  ```py
    
    class Node:
    
     def __init__(self, key):
    
     self.left = None
    
     self.right = None
    
     self.val = key
    
    def printPostorder(root):
    
     if root:
    
     printPostorder(root.left)
    
     printPostorder(root.right)
    
     print(root.val),
    
    root = Node(1)
    
    root.left = Node(2)
    
    root.right = Node(3)
    
    root.left.left = Node(4)
    
    root.left.right = Node(5)
    
    print "\nPostorder traversal of binary tree is"
    
    printPostorder(root)
```
    --
    
    **Output:**
    
    Postorder traversal of binary tree is 
    4 5 2 3 1
    
    **Uses of Postorder:**  
    Postorder traversal is used to delete the tree. Please see [the question for deletion of tree](https://www.geeksforgeeks.org/write-a-c-program-to-delete-a-tree/) for details. Postorder traversal is also useful to get the postfix expression of an expression tree. Please see [http://en.wikipedia.org/wiki/Reverse\_Polish\_notation](http://en.wikipedia.org/wiki/Reverse_Polish_notation) to for the usage of postfix expression.
    

### Implementing all traversals using DFS









```py

class Node:

 def __init__(self,key):

 self.left = None

 self.right = None

 self.val = key

def printInorder(root):

 if root:

 printInorder(root.left)

 print(root.val),

 printInorder(root.right)

def printPostorder(root):

 if root:

 printPostorder(root.left)

 printPostorder(root.right)

 print(root.val),

def printPreorder(root):

 if root:

 print(root.val),

 printPreorder(root.left)

 printPreorder(root.right)

root = Node(1)

root.left = Node(2)

root.right = Node(3)

root.left.left = Node(4)

root.left.right = Node(5)

print "Preorder traversal of binary tree is"

printPreorder(root)

print "\nInorder traversal of binary tree is"

printInorder(root)

print "\nPostorder traversal of binary tree is"

printPostorder(root)
```

--

**Output:**

Preorder traversal of binary tree is
1 2 4 5 3 
Inorder traversal of binary tree is
4 2 5 1 3 
Postorder traversal of binary tree is
4 5 2 3 1

**Time Complexity:** O(n)  
**Auxiliary Space :** If we don’t consider size of stack for function calls then O(1) otherwise O(n).

Attention reader! Don’t stop learning now. Get hold of all the important DSA concepts with the [**DSA Self Paced Course**](https://practice.geeksforgeeks.org/courses/dsa-self-paced?utm_source=geeksforgeeks&utm_medium=article&utm_campaign=gfg_article_dsa_content_bottom) at a student-friendly price and become industry ready.  To complete your preparation from learning a language to DS Algo and many more,  please refer [**Complete Interview Preparation Course**](https://practice.geeksforgeeks.org/courses/complete-interview-preparation?utm_source=GeeksforGeeks&utm_medium=Text&utm_campaign=GFG_Article_Bottom_Text_CIP)**.**

In case you wish to attend **live classes** with experts, please refer [**DSA Live Classes for Working Professionals**](https://practice.geeksforgeeks.org/courses/geeks-classes-live?utm_source=geeksforgeeks&utm_medium=article&utm_campaign=gfg_article_dsa_content_bottom) and [**Competitive Programming Live for Students**](https://practice.geeksforgeeks.org/courses/competitive-programming-live?utm_source=geeksforgeeks&utm_medium=article&utm_campaign=gfg_article_cp_content_bottom).


[Source](https://www.geeksforgeeks.org/dfs-traversal-of-a-tree-using-recursion/)
