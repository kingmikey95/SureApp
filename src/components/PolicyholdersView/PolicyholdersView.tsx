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
import { Icon, Typography } from '@mui/material';

function PolicyholdersView() {
  var dataInfo: any[] = [];

  const [data, getData] = useState<PolicyHoldersInfo[]>([]);
  const GET_POLICY_URL =
    'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api/policyholders';

  const POST_ADD_POLICTY_URL =
    'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api/policyholders';
  const fetchGetPolicyData = () => {
    fetch(GET_POLICY_URL, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((response) => {
        getData(response.policyHolders);
        for (var i in response.policyHolders) {
          dataInfo.push(response.policyHolders[i]);
        }
        console.log('the data info is in the arrayt', dataInfo);
      });
  };

  useEffect(() => {
    fetchGetPolicyData();
  }, []);

  const OnClickAddPolicy = () => {
    useEffect(() => {
      fetch(POST_ADD_POLICTY_URL, {
        method: 'POST',
      })
        .then((res) => res.json())
        .then((response) => {
          getData(response.policyHolders);
        });
    }, []);
  };

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Policy Holders#</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Primay</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((policyHolders, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {policyHolders.name}
                </TableCell>
                <TableCell align="right">{policyHolders.age}</TableCell>
                <TableCell align="right">
                  {policyHolders.address.line1}
                  {policyHolders.address.line2}
                  {policyHolders.address.state}
                  {policyHolders.address.city}
                  {policyHolders.address.postalCode}
                </TableCell>
                <TableCell align="right">{policyHolders.phoneNumber}</TableCell>
                <TableCell align="right">{policyHolders.isPrimary}</TableCell>
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
        <Button onClick={OnClickAddPolicy} variant="contained">
          Add a Policyholder
        </Button>
      </Typography>
    </Box>
  );
}

export default PolicyholdersView;
