import React from 'react'
import Page from './Page'
import RestaurantLaNote from "./RestaurantLaNote";
import RestaurantLeChic from "./RestaurantLeChic";
import RestaurantLeDelice from "./RestaurantLeDelice";
import RestaurantLaPalette from "./RestaurantLaPalette";
import Soon from "./Soon";

function Home() {
  return (
    <Page title="Mon resto favori">
      <div className="center">
        <RestaurantLaNote />
        <RestaurantLeChic />
      </div>

      <div className="center">
        <RestaurantLeDelice />
        <RestaurantLaPalette />
      </div>
      <Soon />
    </Page>
  );
}

export default Home