#!/usr/bin/env python3
"""
Module to measure runtime of asynchronous routines
"""
import asyncio
import time
from typing import List


wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measures the average execution time for wait_n(n, max_delay)
    Args:
        n (int): Number of times to execute the function
        max_delay (int): Maximum delay value

    Returns:
        float: Average execution time per function call
    """
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()
    total_time = end_time - start_time
    return total_time / n
