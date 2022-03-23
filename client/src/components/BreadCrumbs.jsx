import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs maxItems={2} separator="/" aria-label="breadcrumb" fontSize="0.8rem" color="blue.light">
        <Link underline="hover" color="blue.light" href="/">
          Home
        </Link>
        <Link underline="hover" color="blue.light" href="/getting-started/installation/">
          Property Search
        </Link>
        <Typography color="black" variant="body2">
          Property List
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
