import { useState, useEffect } from 'react';

// Define the shape of the object returned by useFetch
interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

// Generic hook that fetches data from a given URL
const useFetch = <T>(url: string): FetchResult<T> => {
  // State for storing the fetched data
  const [data, setData] = useState<T | null>(null);
  // State for tracking if the fetch is still in progress
  const [loading, setLoading] = useState<boolean>(true);
  // State for storing any error that occurs during fetching
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Create an AbortController to be able to cancel the fetch if needed
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        // Fetch data from the URL, passing the abort signal
        const response = await fetch(url, { signal: abortController.signal });
        
        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Check if the response is JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          const result = await response.json();
          setData(result);
        } else {
          throw new Error("Response is not JSON");
        }
      } catch (err: unknown) {
        // Type guard to check if err is an instance of Error
        if (err instanceof Error) {
          // If it's an AbortError, log it (occurs when fetch is cancelled)
          if (err.name === 'AbortError') {
            console.log('Fetch aborted');
          } else {
            // For any other error, update the error state
            setError(err);
          }
        } else {
          // If err is not an Error instance, create a new Error
          setError(new Error('An unknown error occurred'));
        }
      } finally {
        // Set loading to false regardless of success or failure
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchData();

    // Cleanup function to abort fetch if component unmounts
    return () => {
      abortController.abort();
    };
  }, [url]); // Re-run effect if url changes

  // Return an object with the current state
  return { data, loading, error };
};

export default useFetch;