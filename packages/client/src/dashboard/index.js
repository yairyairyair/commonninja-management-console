import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import { Title } from 'react-admin';
import { addTokenQuery } from "../fetch";
import Chart from 'react-apexcharts'
import { LINE_CHART_STATE, DONUT_CHART_STATE, BUBBLE_CHART_STATE } from "../charts-mock-data";

const STORE_DETAILS_ENDPOINT = '/api/ecommerce/store-details';

const Dashboard = () => {
    const [storeDetails, setStoreDetails] = useState(null);

    useEffect(() => {
        fetch(addTokenQuery(STORE_DETAILS_ENDPOINT))
            .then(response => response.json())
            .then(responseJson => responseJson.data)
            .then(details => setStoreDetails(details));
    }, []);


    const DashboardBody = () => {
        return (
            <>
                <div className="text-center">
                    <Typography variant="h5" component="div">Store: {storeDetails.name}</Typography>
                    <Typography variant="h6" component="div">
                        <a href={storeDetails.url} target="_blank" rel="noopener noreferrer">
                            {storeDetails.url}
                        </a>
                    </Typography>
                    <Typography variant="p" component="div">
                        Currency: {storeDetails.currency}
                    </Typography>
                    <Typography variant="p" component="div">
                        Country: {storeDetails.country}
                    </Typography>
                </div>
                <div className="grid place-items-center">
                    <div className="flex space-around full-width">
                        <Chart
                            options={LINE_CHART_STATE.options}
                            series={LINE_CHART_STATE.series}
                            type={'line'}
                            width={'500'}
                            height={'400'}
                        />
                        <Chart
                            options={DONUT_CHART_STATE.options}
                            series={DONUT_CHART_STATE.series}
                            type={'donut'}
                            width={'500'}
                            height={'400'}
                        />
                    </div>
                    <Chart
                        options={BUBBLE_CHART_STATE.options}
                        series={BUBBLE_CHART_STATE.series}
                        type={'bubble'}
                        width={'800'}
                        height={'600'}
                    />
                </div>
            </>
        )
    }

    return (
        <Card>
            <Title title="Dashboard" />
            <CardContent>
                <Typography variant="h4" component="div" className='text-center'>
                    Dashboard
                </Typography>
                {(!storeDetails) && (<CircularProgress />)}
                {(storeDetails) && (<DashboardBody />)}
            </CardContent>
        </Card>
    )
}

export default Dashboard;
