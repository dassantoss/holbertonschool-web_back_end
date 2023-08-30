#!/usr/bin/env python3
"""
Module to measure runtime of parallel async comprehensions.
"""
import asyncio
from typing import List


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Function that measures the total runtime and returns it.

    Returns:
        float: The total runtime.
    """
    start_time = asyncio.get_event_loop().time()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end_time = asyncio.get_event_loop().time()
    return end_time - start_time
