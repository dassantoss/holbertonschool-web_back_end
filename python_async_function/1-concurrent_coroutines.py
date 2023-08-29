#!/usr/bin/env python3
"""
Module that contains asynchronous routines
"""
import asyncio
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Executes multiple async functions concurrently
    Args:
        n (int): Number of times to execute the function
        max_delay (int): Maximum delay value

    Returns:
        List[float]: List of delays
    """
    delays = await asyncio.gather(*(wait_random(max_delay) for _ in range(n)))
    return sorted(delays)
