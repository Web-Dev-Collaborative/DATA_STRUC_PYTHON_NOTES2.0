# Copyright (c) 2010 Doug Hellmann.  All rights reserved.
#
"""Using a regular tuple
"""

#end_pymotw_header
bob = ('Bob', 30, 'male')
print('Representation:', bob)

jane = ('Jane', 29, 'female')
print('\nField by index:', jane[0])

print('\nFields by index:')
for p in [bob, jane]:
    print('{} is a {} year old {}'.format(*p))
