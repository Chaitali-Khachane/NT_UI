import React, { useEffect, Fragment, useState, useReducer,useCallback } from 'react';
import { Card } from '@nt/dds-react';
import DataGrid from '@nt/dds-datagrid';
require('@nt/dds-datagrid/lib/datagrid.css');
import { Icon } from '@nt/dds-react';
import Button from '@nt/dds-react/core/Button'
import { useDispatch, useSelector } from 'react-redux';
import { fetch_RWS_HighLevelPipelines,get_RWS_HighLevelPipelines } from '../../redux/action/home.action'
import { Grid, Row, Col } from '@nt/dds-react';
import Pagination from '@nt/dds-react/core/Pagination';
import EmptyState from '@nt/dds-react/core/EmptyState';
import { Search } from '@nt/dds-react';


// const useForceUpdate = () => {
//   const [value, setValue] = useState(0); // integer state
//   return () => setValue(value => value + 1); // update state to force render
//   // A function that increment 👆🏻 the previous state like here 
//   // is better than directly setting `setValue(value + 1)`
// }


const Home = (props) => {
  const dispatch = useDispatch()
  const { apiField } = useSelector((state) => state.home)
  const [searchInput, setSearchInput] = useState("")

  const [gridParams, setGridParams] = useState(null)

  const onGridReady = (params) => {
    setGridParams(params)
  }

 
  const handleSearchText = searchVal => {
    setSearchInput(searchInput)
    gridParams.api.setQuickFilter(searchVal) // setting filter input value
  };
  useEffect(() => {
    dispatch(fetch_RWS_HighLevelPipelines())

  }, [])

  return <Fragment>
    <Grid
      className="bgcolor-nt-light-grey"
      debug={false}
      fluid
    >
      <Row className="backgroundcolor-white">
        <Col>
          <Card
            hover={false}
            noPadding={false}
            shadowSize="sm"
          >
            <div style={{ height: "50px" }}>
              <Button
                danger={undefined}
                icon="only"
                iconName="domain"
                kind="primary"
                onClick={function noRefCheck() { }}
                size="small"
                type="button"
              />
              <span style={{ fontWeight: "500", marginLeft: "10px" }}>Domain</span>
              <span style={{ fontWeight: "500", marginLeft: "10px" }}>NA</span>
            </div>
          </Card>
        </Col>
        <Col>
          <Card
            hover={false}
            noPadding={false}
            shadowSize="sm"
          >
            <div style={{ height: "50px" }}>
              <Button
                danger={undefined}
                icon="only"
                iconName="domain"
                kind="primary"
                onClick={function noRefCheck() { }}
                size="small"
                type="button"
              />
              <span style={{ fontWeight: "500", marginLeft: "10px" }}>Entities</span>
              <span style={{ fontWeight: "500", marginLeft: "10px" }}>NA</span>
            </div>

          </Card>
        </Col>
        <Col>
          <Card
            hover={false}
            noPadding={false}
            shadowSize="sm"
          >
            <div style={{ height: "50px" }}>
              <Button
                danger={undefined}
                icon="only"
                iconName="settings"
                kind="primary"
                onClick={function noRefCheck() { }}
                size="small"
                type="button"
              />
              <span style={{ fontWeight: "500", marginLeft: "10px" }}>Entity Succeeded</span>
              <span style={{ fontWeight: "500", marginLeft: "10px" }}>15</span>
            </div>
          </Card>
        </Col>
        <Col>
          <Card
            hover={false}
            noPadding={false}
            shadowSize="sm"
          >
            <div style={{ height: "50px" }}>
              <Button
                danger={true}
                disa
                icon="only"
                iconName="warning"
                kind="primary"
                onClick={function noRefCheck() { }}
                size="small"
                type="button"
              />
              <span style={{ fontWeight: "500", marginLeft: "10px" }}>Entity Failed</span>
              <span style={{ fontWeight: "500", marginLeft: "10px" }}>15</span>
            </div>

          </Card>
        </Col>

      </Row>
    </Grid>
    <div style={{ margin: "10px" }}></div>
    <Search
      autoComplete={false}
      placeholder='Search...'
      size='small'
      onChange={e => handleSearchText(e.target.value)}
      onClearListener={() => handleSearchText('')}
      value={searchInput}
    />
    <div style={{margin:"10px"}}></div>
    <DataGrid
      
      pagination={true}
      paginationPageSize={10}
      paginationAutoPageSize={false}
      rowData={apiField.pipelineHighLevelData.responseData}
      columnDefs={apiField.pipelineHighLevelData.columnDef}
      defaultColDef={{
        flex: 1,
        minWidth: 150,
        filter: true
      }}
      gridHeight="60vh"
      cacheQuickFilter={true}
      onGridReady={onGridReady}
    />
    {/* <div className="margintop-xl" /> */}
    {/* <Pagination
      // Please provide unique id 
      id='pagination-id'
      // page={currentPage}
      // pages={totalPage}
      pageSize={props.paginationPageSize}
      pageSizeOptions={[25, 50, 100]}
      onPageChange={page => changePage(page)}
      onPageSizeChange={pageSize => changePageSize(pageSize)}
      nextVersion
    // set 'type' to 'mobile' when used in small container
    // type='mobile'

    /> */}
    {/* <div className="padding-xl" style={{ width: '240px' }}>
      <DataGrid animateRows columnDefs={} defaultColDef={{ flex: 1, minWidth: 80 }}gridHeight="200px"groupSelectsChildrenlicenseKey="CompanyName=Liquid PC, LLC_on_behalf_of_The Northern Trust Company,LicensedApplication=Digital Design System,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=0,AssetReference=AG-031304,SupportServicesEnd=5_October_2023_[v2]_MTY5NjQ2MDQwMDAwMA==510646d55fdf1a06b07746b66ea3bacd"onGridReady={functionnoRefCheck(){ }}rowData={[{ account_name: 'JayneGoulston20148921', balance: 561821.67, country: 'Tanzania', department: 'Sales', first_name: 'Jayne', id: 1, industry: 'Public Utilities', last_name: 'Goulston', last_updated: '2019-09-08 09:03:20', monthly_breakdown: { Apr: 3727, Aug: 1982, Dec: 558, Feb: 8273, Jan: 6987, Jul: 753, Jun: 307, Mar: 3988, May: 7347, Nov: 2333, Oct: 4046, Sep: 2164 }, prev_balance: 5222354.42, quote: 'Donec ut dolor.', status: 'false' }, { account_name: 'EmilineEmms86059524', balance: 1740392.86, country: 'China', department: 'Accounting', first_name: 'Emiline', id: 2, industry: 'Finance', last_name: 'Emms', last_updated: '2020-01-30 21:03:06', monthly_breakdown: { Apr: 3004, Aug: 9903, Dec: 3169, Feb: 2416, Jan: 8471, Jul: 1607, Jun: 1382, Mar: 4500, May: 2778, Nov: 3061, Oct: 2836, Sep: 1865 }, prev_balance: 8064596.47, quote: 'Nullam porttitor lacus at turpis.', status: 'true' }, { account_name: 'FelipaMulford23892889', balance: 5161544.65, country: 'Guam', department: 'Research and Development', first_name: 'Felipa', id: 3, industry: 'Energy', last_name: 'Mulford', last_updated: '2019-11-03 06:23:06', monthly_breakdown: { Apr: 7346, Aug: 7202, Dec: 7637, Feb: 2258, Jan: 4684, Jul: 5745, Jun: 7442, Mar: 9970, May: 6073, Nov: 7296, Oct: 5147, Sep: 8047 }, prev_balance: 3923469.44, quote: 'Phasellus id sapien in sapien iaculis congue.', status: 'false' }]}rowSelection="multiple"suppressRowClickSelection/>
    </div> */}

  </Fragment>
};
export default Home
