

# Creating list
lst = ['abc', 'pqr', 2, 4, 'abc']
print(lst)
# Output:
# ['abc', 'pqr', 2, 4, 'abc']

# Get at nth index
print(lst[1])
# Output:
# pqr

# Add Element at nth index
lst.insert(1, 'xyz')
print(lst)
# Output:
# ['abc', 'xyz', 'pqr', 2, 4, 'abc']

# Update Element at nth position
lst[2] = 'ccc'
print(lst)
# Output:
# ['abc', 'xyz', 'ccc', 2, 4, 'abc']

# Delete element at nth index
lst.pop(1)
print(lst)
# Output:
# ['abc', 'pqr', 2, 4, 'abc']