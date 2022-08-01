import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const card = (
  <CardContent>
    <Typography variant="body2">
      Hello, I would just like to say thank you for giving me this opportunity
      in doing this assignment. I’ve learned a lot, it was quite fun and I know
      I have many things to work on. With that being said. If this product was
      going to go out production. I would most definitely clean up the styling a
      little bit making it more eye appealing to the users. I would give an
      option to the user to create their own policy holder by using a modal
      after clicking “Add a Policyholder” after creating the table would refresh
      so the user could see the update. Maybe give permissions to certain users
      to Add a Policy, depending what the customer would want with it. Would
      think about the future to add pagination of some short to the table just
      in case it does get big. Would also display data for the insurance policy
      so the policy holder could see that data. I would definitely ask peers or
      nUsers on what I could do better to make the Website more appealing and
      efficient and learn from it. That is pretty much all I can think of.
      <br />
    </Typography>
  </CardContent>
);

export default function Challenge9ThingsIdDo() {
  return (
    <Box sx={{ minWidth: 275, mt: '25px' }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
