#!/usr/bin/env python3
"""Module for storing the zoom_array function."""
from typing import Tuple, List, Any


def zoom_array(lst: Tuple[Any], factor: int = 2) -> List[Any]:
    """
    Zoom in on elements of a tuple by replicating them.

    Args:
        lst (Tuple[Any]): The input tuple.
        factor (int, optional): The zoom factor. Defaults to 2.

    Returns:
        List[Any]: A list containing zoomed-in elements.
    """
    zoomed_in: List[Any] = [
        item for item in lst
        for i in range(factor)
    ]
    return zoomed_in


array = (12, 72, 91)  # Using tuple instead of list

zoom_2x = zoom_array(array)

zoom_3x = zoom_array(array, 3)
