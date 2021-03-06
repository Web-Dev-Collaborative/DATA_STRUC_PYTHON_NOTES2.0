# Copyright (c) 2010 Doug Hellmann.  All rights reserved.
#
"""Blank lines in the input cause mis-matches.
"""
#end_pymotw_header
def double_space(lines):
    """Prints a list of lines double-spaced.

    >>> double_space(['Line one.', 'Line two.'])
    Line one.
    <BLANKLINE>
    Line two.
    <BLANKLINE>
    """
    for l in lines:
        print(l)
        print()
