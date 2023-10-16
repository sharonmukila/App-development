import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ListAlt } from '@mui/icons-material'; // Import the icon
import './IncidentList.css';
import Navbar from './Navbar';

const IncidentList = () => {
  // Mock data for incidents
  const [incidents, setIncidents] = useState([
    {
      id: 1,
      type: 'Theft',
      location: '123 Main St',
      date: '2023-09-27',
      description: 'Stolen bike',
    },
    {
      id: 2,
      type: 'Assault',
      location: '456 Elm St',
      date: '2023-09-26',
      description: 'Physical altercation',
    },
    // Add more incident objects as needed
  ]);

  return (
    <div className='yu'>
<Navbar/>
    <div className="incident-list-container">
      <h1>
        <ListAlt fontSize="large" /> Incident List / History
      </h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incidents.map((incident) => (
            <TableRow key={incident.id}>
              <TableCell>{incident.id}</TableCell>
              <TableCell>{incident.type}</TableCell>
              <TableCell>{incident.location}</TableCell>
              <TableCell>{incident.date}</TableCell>
              <TableCell>{incident.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
          
    </div>
  );
};

export default IncidentList;
