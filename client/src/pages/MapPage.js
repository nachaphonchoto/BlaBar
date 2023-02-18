import Map from "../components/Map";
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import MapIcon from '@mui/icons-material/Map';
import Event from "../components/Event";
import { useParams, useNavigate } from "react-router-dom";

import { Route, Outlet, Routes, Navigate } from "react-router-dom";

export default function MapPage() {
    let {map} = useParams()
    let navigate = useNavigate();
    const [value, setValue] =  React.useState(map ?? "Location");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div className="MapPage">
            <Outlet/>
            <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
            <BottomNavigationAction
                onClick={() => navigate('Location')}
                label="Location"
                value="Location"
                icon={<MapIcon />}
            />
            <BottomNavigationAction
                onClick={() => navigate('Event')}
                label="Event map"
                value="Event"
                icon={<MapsHomeWorkIcon />}
            />
            </BottomNavigation>
            <Routes>
                <Route path="/" element={<Navigate to="Location" replace />} />
                <Route path="Location" element={<Map/>} />
                <Route path="Event" element={<Event />} />
            </Routes>
        </div>
    )
}