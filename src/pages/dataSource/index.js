import React, { Fragment,useEffect } from 'react';
import Button from '@nt/dds-react/core/Button'
import DataGrid from '@nt/dds-datagrid';
require('@nt/dds-datagrid/lib/datagrid.css');
import { useState } from "react";
import Step1 from './step1';
import { get_RWS_DataSourceList,get_RWS_ConnectorList } from '../../redux/datasource/datasource.action'
import { useDispatch, useSelector } from 'react-redux';
import { Search } from '@nt/dds-react';


const DataSource = () => {
    const [clickAdd, setClickAdd] = useState(false);
    const [clickCancel, setClickCancel] = useState(false);
    
    const dispatch = useDispatch()
    const { apiField } = useSelector((state) => state.datasource)

    const [searchInput, setSearchInput] = useState("")

  const [gridParams, setGridParams] = useState(null)

  const onGridReady = (params) => {
    setGridParams(params)
  }

 
  const handleSearchText = searchVal => {
    setSearchInput(searchInput)
    gridParams.api.setQuickFilter(searchVal) // setting filter input value
  };

   
    let addButtonClick = () => {
        dispatch(get_RWS_ConnectorList())
        setClickAdd(true)
    }

    let cancelButtonClick = () => {
        setClickAdd(false)
        setClickCancel(true)
    }
    
    
    useEffect(() => {
        
        dispatch(get_RWS_DataSourceList())
    },[])
   
    return clickAdd ? <Fragment><Step1 cancelButtonClick={cancelButtonClick}/></Fragment> : <Fragment>
        <div style={{ textAlign: "right", marginBottom: "5px" }}>

            <Button
                danger={undefined}
                icon="none"
                iconName=""
                kind="primary"
                onClick={addButtonClick}
                size="small"
                type="button"
            // theme="dark"
            >
                Add
            </Button>


        </div>
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
            rowData={apiField.datasourceTableData.responseData}
            columnDefs={apiField.datasourceTableData.columnDef}
            defaultColDef={{
                flex: 1,
                minWidth: 150,
                filter: true
              }}
              gridHeight="60vh"
              cacheQuickFilter={true}
              onGridReady={onGridReady}
        />



        {/* DataSource Screen */}
    </Fragment>
};
export default DataSource
