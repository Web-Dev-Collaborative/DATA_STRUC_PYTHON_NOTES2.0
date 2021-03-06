#
"""Filter a list of filenames against a pattern.
"""

#end_pymotw_header
import fnmatch
import os
import pprint

pattern = 'fnmatch_*.py'
print('Pattern :', pattern)

files = list(sorted(os.listdir('.')))

print('\nFiles   :')
pprint.pprint(files)

print('\nMatches :')
pprint.pprint(fnmatch.filter(files, pattern))
