#!/usr/bin/env python3
"""Insert a new document in Python"""
from pymongo import MongoClient


def insert_school(mongo_collection, **kwargs):
    """Insert a document in a collection"""
    if mongo_collection is None:
        return None
    return mongo_collection.insert_one(kwargs).inserted_id
