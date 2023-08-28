#!/usr/bin/env python3
"""
This module defines a function to convert a string and an int/float to a tuple.
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Convert a string and an int/float to a tuple.

    Args:
        k (str): The string.
        v (Union[int, float]): The int or float number.

    Returns:
        Tuple[str, float]: A tuple containing the string k and the square of v.
    """
    return (k, v ** 2)
