import React, { createContext, useState, useEffect, useContext } from 'react';
const GitRepoContext = createContext();
export const useGitRepo = () => {
    return useContext(GitRepoContext);
};

export const GitRepoProvider = ({ children }) => {
    const [repo, setRepo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/profile.json")
            .then(result => {
                if (result.ok) {
                    return result.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => {
                setRepo(response.data.user.pinnedItems.edges);
            })
            .catch(error => {
                console.error(
                    `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
                );
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    const value = {
        repo,
        loading,
        error
    };

    return (
        <GitRepoContext.Provider value={value}>
            {children}
        </GitRepoContext.Provider>
    );
};