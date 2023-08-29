#!/usr/bin/env python3
"""
This module defines a function to create a
multiplier function.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Create a function that multiplies a float by
    a given multiplier.

    Args:
        multiplier (float): The multiplier value.

    Returns:
        Callable[[float], float]: A function that
        takes a float and returns the result of the
        multiplication.
    """
    def multiplier_function(value: float) -> float:
        """
        Multiply a float by the multiplier.

        Args:
            value (float): The input float value.

        Returns:
            float: The result of multiplying the
            input value by the multiplier.
        """
        return value * multiplier
    return multiplier_function
