#!/usr/bin/env python3
"""
This module defines a function to calculate the sum of a list of floats.
"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Calculate the sum of a list of floats.

    Args:
        input_list (List[float]): The list of floats.

    Returns:
        float: The sum of the input list of floats.
    """
    return sum(input_list)
