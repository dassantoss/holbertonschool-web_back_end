#!/usr/bin/env python3
"""
Module that creates and returns an asyncio.Task
"""
import asyncio


wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Creates and returns an asyncio.Task
    Args:
        max_delay (int): Maximum delay value

    Returns:
        asyncio.Task: Task object
    """
    task = asyncio.create_task(wait_random(max_delay))
    return task
