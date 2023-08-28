#!/usr/bin/env python3
"""
This module defines a function to calculate
the sum of a mixed list of integers and floats.
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Calculate the sum of a mixed list of integers and floats.

    Args:
        mxd_lst (List[Union[int, float]]):
        The mixed list of integers and floats.

    Returns:
        float: The sum of the input mixed list.
    """
    return sum(mxd_lst)
