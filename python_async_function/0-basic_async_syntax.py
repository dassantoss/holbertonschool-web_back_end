#!/usr/bin/env python3
"""Asynchronous coroutine that takes in an integer argument"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    Asynchronous coroutine that waits for a random
    delay between 0 and max_delay (inclusive)
    Args:
        max_delay (int): Maximum delay value (default 10)

    Returns:
        float: Random delay
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
