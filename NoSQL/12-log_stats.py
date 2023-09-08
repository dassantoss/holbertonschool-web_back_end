#!/usr/bin/env python3
"""
Provides some stats about Nginx logs stored in MongoDB
"""
from pymongo import MongoClient


def log_stats(mongo_collection, option=None):
    """
    Provides some stats about Nginx logs stored in MongoDB
    """
    if option is None:
        return mongo_collection.count_documents({})
    return mongo_collection.count_documents({'method': option})


if __name__ == "__main__":
    client = MongoClient()
    nginx_collection = client.logs.nginx
    print("{} logs".format(log_stats(nginx_collection)))
    print("Methods:")
    for method in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
        print("\tmethod {}: {}".format(method,
              log_stats(nginx_collection, method)))
    print("{} status check".format(log_stats(nginx_collection,
                                             "GET /status")))
