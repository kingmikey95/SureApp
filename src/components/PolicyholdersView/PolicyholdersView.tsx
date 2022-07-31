import { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { PolicyHoldersInfo } from './PolicyHolderInterface';
import { Typography } from '@mui/material';
import Challenge9ThingsIdDo from './Challenge9ThingsIdDo';
import axios from 'axios';
//import './TableStyle.css';
function PolicyholdersView() {
  const [data, getData] = useState<PolicyHoldersInfo[]>([]);
  const [postData, getPostData] = useState<PolicyHoldersInfo[]>([]);
  const API_URL =
    'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api/policyholders';

  const fetchGetPolicyData = () => {
    //fetching the get url policy to display data
    axios
      .get(API_URL)
      .then((res) => res.data)
      .then((response) => {
        getData(response.policyHolders);
      })
      .catch((error) => {
        console.log('This is an error in the get table', error);
      });
  };

  useEffect(() => {
    // calls the get fetch on load
    fetchGetPolicyData();
  }, []);

  //Onclick functionality will call the api with a post request then table will update.
  const OnClickUpdateTable = () => {
    axios
      .post(
        'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api/policyholders',
        {
          name: 'mikeyu',
          age: '66',
          address: {
            line1: '42 yeet yet',
            line2: '42 null',
            city: 'savannah',
            state: 'ga',
            postalCode: '31323',
          },
          phoneNumber: '912-313-5314',
          isPrimary: 'false',
        }
      )

      .then((res) => res.data)
      .then((response) => {
        getPostData(response.policyHolders);
        const table = document.getElementById('post-data-table'); //will display the table into a block since it is being hidden
        table?.setAttribute('style', 'display:block');
      })
      .catch((error) => {
        console.log('This is an error in the updating table', error);
      });
  };

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Policy Holders#</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Phone Number</TableCell>
              <TableCell align="center">Primay</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((policyHolders, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <b>{i + 1}</b>
                </TableCell>
                <TableCell component="th" scope="row">
                  {policyHolders.name}
                </TableCell>
                <TableCell align="right">{policyHolders.age}</TableCell>
                <TableCell align="center">
                  <b>Line 1</b> : {policyHolders.address.line1}
                  <br></br>
                  <b>Line 2</b> : {policyHolders.address.line2}
                  <br></br>
                  <b>State</b> : {policyHolders.address.state}
                  <br></br>
                  <b>City</b> : {policyHolders.address.city}
                  <br></br>
                  <b>Postal Code</b> : {policyHolders.address.postalCode}
                </TableCell>
                <TableCell align="right">{policyHolders.phoneNumber}</TableCell>
                <TableCell align="right">
                  {policyHolders.isPrimary ? 'True' : 'False'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography
        sx={{
          mt: '2em',
        }}
      >
        <Button onClick={OnClickUpdateTable} variant="contained">
          Add a Policyholder
        </Button>
      </Typography>
      <Typography
        id="post-data-table"
        sx={{
          mt: '15px',
          display: 'none',
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Policy Holders#</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Age</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Phone Number</TableCell>
                <TableCell align="center">Primay</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {postData.map((policyHolders, i) => (
                <TableRow
                  key={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <b>{i + 1}</b>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {policyHolders.name}
                  </TableCell>
                  <TableCell align="right">{policyHolders.age}</TableCell>
                  <TableCell align="center">
                    <b>Line 1</b> : {policyHolders.address.line1}
                    <br></br>
                    <b>Line 2</b> : {policyHolders.address.line2}
                    <br></br>
                    <b>State</b> : {policyHolders.address.state}
                    <br></br>
                    <b>City</b> : {policyHolders.address.city}
                    <br></br>
                    <b>Postal Code</b> : {policyHolders.address.postalCode}
                  </TableCell>
                  <TableCell align="right">
                    {policyHolders.phoneNumber}
                  </TableCell>
                  <TableCell align="right">
                    {policyHolders.isPrimary ? 'True' : 'False'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Typography>

      <Challenge9ThingsIdDo />
    </Box>
  );
}

export default PolicyholdersView;
