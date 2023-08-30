#!/usr/bin/env python3
"""
Module that contains asynchronous routines using asyncio.Tasks
"""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Executes multiple async functions using asyncio.Tasks
    Args:
        n (int): Number of times to execute the function
        max_delay (int): Maximum delay value

    Returns:
        List[float]: List of delays
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return sorted(delays)
