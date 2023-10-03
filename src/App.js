import React, { Fragment } from 'react';
// eslint-disable-next-line import/no-unresolved
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './redux/store/store'

import { BrowserRouter } from 'react-router-dom';
import AppHeader from './component/Header'
import MainRoutes from './routes/index'
// const urls = {
//   xps: 'https://xps-developer-accelerator-docs.apps.system-1.pcf.ntrs.com/',
//   dds: 'http://digital-design-system.apps.system.pcf.ntrs.com/',
//   storybook: 'http://nt-storybook.apps.system.pcf.ntrs.com/'
// };
// require(__dirname+"/../icon/Northern_Trust-Logo.wine.png")
const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <AppHeader />
      <MainRoutes />


      {/* <BrowserRouter>
        <HeaderBar
          content={function noRefCheck() { }}
          height={62}
          // links={<nav><item href="/home" name="Home" /><item href="/about" name="About" /></nav>}
          logoType="double"
          theme="light"
          appTitle = {<span style={{fontWeight:"400"}}>Workspace</span>}
        />
      </BrowserRouter>
     
      <TabsProvider
        defaultActiveIndex={0}
        tabIdArray={[
          'alpha',
          'beta',
          'gamma'
        ]}
      >
        <TabBar
          className="bgcolor--primary paddingleft-lg"
          size="medium"
          theme="dark"
        >

          <Tab
            active={false}
            name={<Fragment><Icon
              ariaHidden={false}
              name="home"
              type=""
            /> Home</Fragment>}
            onClick={function noRefCheck() { }}
            size="small"
            theme="light"
          />


          <Tab
            active={false}
            name={<Fragment><Icon
              ariaHidden={false}
              name="datasource"
              type=""
            /> DataSource</Fragment>}
            onClick={function noRefCheck() { }}
            size="small"
            theme="light"
          />

          <Tab
            active={false}
            disabled
            name={<Fragment><Icon
              ariaHidden={false}
              name="domain"
              type=""
            /> Domain</Fragment>}
            onClick={function noRefCheck() { }}
            size="small"
            theme="light"
          />
          <Tab
            active={false}
            disabled
            name={<Fragment><Icon
              ariaHidden={false}
              name="pipeline"
              type=""
            /> Pipeline</Fragment>}
            onClick={function noRefCheck() { }}
            size="small"
            theme="light"
          />
          <Tab
            active={false}
            disabled
            name={<Fragment><Icon
              ariaHidden={false}
              name="trending_up"
              type=""
            /> Analyze</Fragment>}
            onClick={function noRefCheck() { }}
            size="small"
            theme="light"
          />
          <Tab
            active={false}
            disabled
            name={<Fragment><Icon
              ariaHidden={false}
              name="service"
              type=""
            /> Service</Fragment>}
            onClick={function noRefCheck() { }}
            size="small"
            theme="light"
          />
        </TabBar>
        <TabPanel className="margintop-lg">
          <div className='container'><Home /></div>
          <div className='container'><DataSource /></div>
          <div className='container'><Domain /></div>
          <div className='container'><Pipeline /></div>
          <div className='container'><Analyze /></div>
          <div className='container'><Service /></div>
        </TabPanel>
      </TabsProvider> */}
    </Provider>
  </BrowserRouter>
);

export default hot(module)(App);
