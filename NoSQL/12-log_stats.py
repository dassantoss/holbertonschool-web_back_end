#!/usr/bin/env python3
"""
Provides some stats about Nginx logs stored in MongoDB
"""

# Import the MongoClient class from pymongo library
from pymongo import MongoClient

# Initialize a MongoDB client
client = MongoClient()

# Select the "logs" database
db = client.logs

# Select the "nginx" collection within the "logs" database
collection = db.nginx

# Count the total number of logs in the collection
total_logs = collection.count_documents({})

# Print the total number of logs
print("{} Logs".format(total_logs))

# Define a list of HTTP methods to track
http_methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

# Initialize a dictionary to store method counts
method_counts = {method: 0 for method in http_methods}

# Count the number of documents for each HTTP method
for method in http_methods:
    method_counts[method] = collection.count_documents({"method": method})

# Print the method counts
print("Methods:")
for method, count in method_counts.items():
    print("\tmethod {}: {}".format(method, count))

# Count the number of logs with method=GET and path=/status
status_check = collection.count_documents({"method": "GET", "path": "/status"})

# Print the count of status check logs
print("{} status check".format(status_check))
