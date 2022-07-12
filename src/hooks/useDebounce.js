import { useState, useEffect } from 'react';
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            console.log('debouncedValue', debouncedValue);
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handler);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debouncedValue;
}

export default useDebounce;
