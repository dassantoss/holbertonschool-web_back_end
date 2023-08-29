#!/usr/bin/env python3
"""Basic annotations - safely get value"""
from typing import TypeVar, Mapping, Any, Union, Optional


T = TypeVar('T')


def safely_get_value(dct: Mapping, key: Any,
                     default: Optional[T] = None) -> Union[Any, T]:
    """
    Safely get a value from a dictionary.

    Args:
        dct (Mapping): The dictionary-like object.
        key (Any): The key to look up in the dictionary.
        default (Optional[T], optional):
        The default value if the key is not found. Defaults to None.

    Returns:
        Union[Any, T]: The value corresponding to the key,
        or the default value.
    """
    if key in dct:
        return dct[key]
    else:
        return default
