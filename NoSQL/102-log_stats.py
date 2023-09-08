#!/usr/bin/env python3
"""
This module contains a Python script that provides some stats about Nginx logs
stored in MongoDB, including the top 10 most present IPs.
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
    This function provides some stats about Nginx logs stored in MongoDB,
    including the top 10 most present IPs.
    """
    # Total number of logs
    total_logs = mongo_collection.count_documents({})
    print("{} logs".format(total_logs))

    # Methods count
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")
    for method in methods:
        documents = mongo_collection.count_documents({"method": method})
        print("\tmethod {}: {}".format(method, documents))

    # Status check count
    status = mongo_collection.count_documents({"method": "GET", "path": "/status"})
    print("{} status check".format(status))

    # Top 10 most present IPs
    pipeline = [
        {
            "$group": {
                "_id": "$ip",
                "count": {"$sum": 1}
            }
        },
        {
            "$sort": {"count": -1}
        },
        {
            "$limit": 10
        }
    ]

    top_ips = list(mongo_collection.aggregate(pipeline))
    print("IPs:")
    for ip_info in top_ips:
        ip = ip_info["_id"]
        count = ip_info["count"]
        print("\t{}: {}".format(ip, count))

if __name__ == "__main__":
    with MongoClient() as client:
        db = client.logs
        collection = db.nginx
        log_stats(collection)
