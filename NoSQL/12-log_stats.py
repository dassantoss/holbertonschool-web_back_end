#!/usr/bin/env python3
"""
this module contains a Python script that provides some stats about Nginx logs
 stored in MongoDB
Database: logs
Collection: nginx
Display (same as the example):
first line: x logs where x is the number of documents in this collection
second line: Methods:
5 lines with the number of documents with the method = ["GET", "POST", "PUT",
 "PATCH", "DELETE"] in this order (see example below - warning: it’s a
 tabulation before each line)
one line with the number of documents with:
method=GET
path=/status
"""
from pymongo import MongoClient


def log_stats(mongo_collection):
    """
    this function provides some stats about Nginx logs stored in MongoDB
    """
    total_logs = mongo_collection.count_documents({})
    print("{} logs".format(total_logs))
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        documents = mongo_collection.count_documents({"method": method})
        print("\tmethod {}: {}".format(method, documents))
    status = mongo_collection.count_documents({"method": "GET",
                                              "path": "/status"})
    print("{} status check".format(status))


if __name__ == "__main__":
    with MongoClient() as client:
        db = client.logs
        collection = db.nginx
        log_stats(collection)
