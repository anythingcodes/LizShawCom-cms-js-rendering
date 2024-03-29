import homeStyles from '../../styles/home.module.css';

import Layout from '../Layout.jsx';
import HubSpotSprocket from '../HubSpotSprocket';

function Home() {
  return (
    <Layout>
      <div className={homeStyles.logo}>
        <HubSpotSprocket />
      </div>
    </Layout>
  );
}

export default Home;
