#!/usr/bin/env python3
"""Basic annotations - safe first element"""
from typing import Sequence, Any, Union


def safe_first_element(lst: Sequence[Any]) -> Union[Any, None]:
    """
    Get the first element of a sequence safely.

    Args:
        lst (Sequence[Any]): A sequence of elements.

    Returns:
        Union[Any, None]: The first element of the sequence,
        or None if the sequence is empty.
    """
    if lst:
        return lst[0]
    else:
        return None
