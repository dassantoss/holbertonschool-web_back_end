#!/usr/bin/env python3
"""
Module with an asynchronous comprehension.
"""
import asyncio
from typing import List


async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Asynchronous comprehension that collects 10 random numbers.

    Returns:
        List[float]: A list of 10 random numbers.
    """
    return [num async for num in async_generator()]
