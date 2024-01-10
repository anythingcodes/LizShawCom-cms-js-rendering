// TODO: Change CSS
import homeStyles from '../../styles/home.module.css';

import Layout from '../Layout.jsx';
import HubSpotSprocket from '../HubSpotSprocket';

function Blog() {
  return (
    <Layout>
      <h1>Blog</h1>

      <div className={homeStyles.logo}>
        <HubSpotSprocket />
      </div>
    </Layout>
  );
}

export default Blog;
