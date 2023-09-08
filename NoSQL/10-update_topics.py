#!/usr/bin/env python3
"""Update a topic in the database"""
from pymongo import MongoClient


def update_topics(mongo_collection, name, topics):
    """changes all topics in the school document"""
    if mongo_collection is None:
        return []

    return mongo_collection.update_many(
        {'name': name},
        {'$set': {'topics': topics}}
    )
