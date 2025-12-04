import { useState, useEffect } from 'react';
import { fetchContent } from '../services/api';

/**
 * Controller for the Home Page
 * Handles data fetching and state management.
 */
export const useHome = () => {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadContent = async () => {
            try {
                const encryptedData = await fetchContent();
                const decryptedData = JSON.parse(atob(encryptedData));
                setContent(decryptedData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadContent();
    }, []);

    return { content, loading, error };
};
