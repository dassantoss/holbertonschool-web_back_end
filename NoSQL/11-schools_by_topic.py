#!/usr/bin/env python3
"""Find school by topic"""
from pymongo import MongoClient


def schools_by_topic(mongo_collection, topic):
    """returns the list of school having a specific topic"""
    if mongo_collection is None:
        return []
    return mongo_collection.find({'topics': topic})
