import React, { useState, useEffect } from 'react';

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
import { PostPolicyHoldersInfo } from './PolicyPostReponseInterface';
import axios from 'axios';

function PolicyholdersView() {
  const [data, getData] = useState<PolicyHoldersInfo[]>([]);
  const [postData, getPostData] = useState<PostPolicyHoldersInfo[]>([]);
  //const POST_ADD_POLICTY_URL = 'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api/policyholders';
  const API_URL =
    'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api/policyholders';

  const fetchGetPolicyData = () => {
    //fetching the get url policy to display data
    axios
      .get(API_URL)
      .then((res) => res.data)
      .then((response) => {
        getData(response.policyHolders);
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
          body: JSON.stringify(postData),
        }
      )
      .then((res) => res.data.policyHolders)
      .then((response) => {
        console.log(response);
        getPostData(response.policyHolders);
        console.log(response.policyHolders);
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
                <TableCell align="right">
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
                    {i}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {policyHolders.policyHolders[i].name}
                  </TableCell>
                  <TableCell align="right">
                    {policyHolders.policyHolders[i].age}
                  </TableCell>
                  <TableCell align="right">
                    <label>Line 1</label>-
                    {policyHolders.policyHolders[i].address.line1}
                    <br></br>
                    <label>Line 2</label>-
                    {policyHolders.policyHolders[i].address.line2}
                    <br></br>
                    <label>State</label>-
                    {policyHolders.policyHolders[i].address.state}
                    <br></br>
                    <label>City</label>-
                    {policyHolders.policyHolders[i].address.city}
                    <br></br>
                    <label>Postal Code</label>-
                    {policyHolders.policyHolders[i].address.postalCode}
                  </TableCell>
                  <TableCell align="right">
                    {policyHolders.policyHolders[i].phoneNumber}
                  </TableCell>
                  <TableCell align="right">
                    {policyHolders.policyHolders[i].isPrimary
                      ? 'True'
                      : 'False'}
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
