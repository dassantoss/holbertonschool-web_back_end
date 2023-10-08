// Create a WeakMap to track the number of queries for each endpoint
const weakMap = new WeakMap();

// Export the WeakMap
export { weakMap };

// Function to query the API
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the WeakMap
  if (weakMap.has(endpoint)) {
    // Increment the query count for this endpoint
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
    // Check if the query count is >= 5
    if (weakMap.get(endpoint) >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    // If the endpoint is not in the WeakMap, initialize it with a query count of 1
    weakMap.set(endpoint, 1);
  }
}
