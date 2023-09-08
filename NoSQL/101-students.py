#!/usr/bin/env python3
"""Function that returns all students sorted by average score"""
from pymongo import MongoClient


def top_students(mongo_collection):
    """Returns all students sorted by average score"""
    return mongo_collection.aggregate([
        {"$project": {
            "name": "$name",
            "averageScore": {"$avg": "$topics.score"}
        }},
        {"$sort": {"averageScore": -1}}
    ])
