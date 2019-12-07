import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Test = (props) => {
    const [testData, setTestData] = useState(null);

    useEffect(() => {
        const fetchTestData = async () => {
            const res = await axios.get('/test');
            if (res && res.data) {
                setTestData(res.data.message);
            }
        };
        fetchTestData();
    }, []);

    return <div>{testData}</div>;
};

export default Test;
