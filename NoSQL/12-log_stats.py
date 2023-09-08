#!/usr/bin/env python3
"""Provides some stats about Nginx logs stored in MongoDB"""
from pymongo import MongoClient


def log_stats():
    """provides some stats about Nginx logs stored in MongoDB"""
    client = MongoClient()
    db = client.logs
    collection = db.nginx
    total_logs = collection.count_documents({})

    print("{} Logs".format(total_logs))

    http_methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    method_counts = {method: 0 for method in http_methods}
    for method in http_methods:
        method_counts[method] = collection.count_documents({"method": method})

    print("Methods:")
    for method, count in method_counts.items():
        print("\tmethod {}: {}".format(method, count))

    status_check = collection.count_documents({"method": "GET", "path": "/status"})
    print("{} status check".format(status_check))


if __name__ == "__main__":
    log_stats()    
