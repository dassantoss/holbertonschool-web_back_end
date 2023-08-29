#!/usr/bin/env python3
"""Use mypy to validate the following piece of code
    and apply any necessary changes.
    def zoom_array(lst: Tuple, factor: int = 2) -> Tuple:
        zoomed_in: Tuple = [
            item for item in lst
            for i in range(factor)
        ]
        return zoomed_in


    array = [12, 72, 91]

    zoom_2x = zoom_array(array)

    zoom_3x = zoom_array(array, 3.0)"""
from typing import Tuple, List


def zoom_array(lst: Tuple, factor: int = 2) -> List:
    """
    Zoom in on elements of a tuple by replicating them.

    Args:
        lst (Tuple): The input tuple.
        factor (int, optional): The zoom factor. Defaults to 2.

    Returns:
        List: A list containing zoomed-in elements.
    """
    zoomed_in: List = [
        item for item in lst
        for i in range(factor)
    ]
    return zoomed_in


array = (12, 72, 91)  # Using tuple instead of list

zoom_2x = zoom_array(array)

zoom_3x = zoom_array(array, 3)
