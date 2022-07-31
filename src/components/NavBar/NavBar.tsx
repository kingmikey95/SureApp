import { CurrencyYenTwoTone, WindowSharp } from '@mui/icons-material';
import { Link, Box } from '@mui/material';
import React, { HtmlHTMLAttributes } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './NavBarStyle.css';
type TNavBar = {
  links: {
    text: string;
    href: string;
    'data-testid'?: string;
  }[];
};

function NavBar({ links }: TNavBar) {
  // handleClick functionality will look through the class name nav-page-current in order to get the href value

  const handleClick =
    (href: string) => (event: React.MouseEvent<HTMLElement>) => {
      var links = document.getElementsByClassName('nav-page-current');

      for (var i = 0; i < links.length; i++) {
        //loops to every link to set the attribute if it is being clicked on equal to the href
        if (href == links[i].getAttribute('href')) {
          links[i].setAttribute('aria-current', 'page');
        } else {
          links[i].setAttribute('aria-current', 'false');
        }
      }
    };

  // method runs on loads whatever /href you are on should highlight the nav
  window.onload = () => {
    const url = 'http://localhost:3000';
    var hrefUrl: string = '';
    var checkHref: any = '';
    document.querySelectorAll('.nav-page-current').forEach((element) => {
      checkHref = element.getAttribute('href');
      hrefUrl = url + checkHref;
      if (hrefUrl == window.location.href) {
        element.setAttribute('aria-current', 'page');
      }
    });
  };

  return (
    <Box
      component="aside"
      sx={{
        background: '#0c2975',
        padding: '16px',
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Link
        component={RouterLink}
        to="/"
        sx={{ cursor: 'pointer', marginBottom: '80px', marginTop: '40px' }}
      >
        <img src="/surelogo.svg" alt="logo"></img>
      </Link>

      {links.map(({ text, href, 'data-testid': dataTestId }) => (
        <Link
          onClick={handleClick(href)}
          className="nav-page-current"
          component={RouterLink}
          key={href}
          to={href}
          color="#fff"
          underline="hover"
          sx={{
            cursor: 'pointer',
            '&:not(:last-of-type)': {
              marginBottom: '16px',
            },
          }}
          data-testid={dataTestId}
        >
          {text}
        </Link>
      ))}
    </Box>
  );
}

export default NavBar;
