import * as React from 'react';
import Category from "../components/category";
import Button from '@mui/material/Button';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Home() { 
    // create state
    const [value, setValue] = React.useState(0);
    return <>
        <h1> Home </h1>
        <Category id="0" title="This is title" sub_title="This is sub sub title" photo="https://media.istockphoto.com/vectors/man-is-eating-a-salad-vegetarian-the-concept-of-proper-nutrition-and-vector-id983999240?k=20&m=983999240&s=612x612&w=0&h=mK_CnGjwW91MXzDL3-P5kg6nVNyl8qvHqam3bw5fyzM=" />
        <Button variant="contained">Hello World</Button>
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >   
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
    </>
}

export default Home;