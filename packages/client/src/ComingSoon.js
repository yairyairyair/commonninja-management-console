import * as React from "react";
import { Card, CardContent } from '@mui/material';
import { Title } from 'react-admin';

const ComingSoon = () => (
    <Card style={{marginTop: '100px'}}>
        <Title title="Coming Soon" />
        <CardContent>
            <div className='text-center'>
                Coming Soon
            </div>
        </CardContent>
    </Card>
);

export default ComingSoon;