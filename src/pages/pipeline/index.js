import React, { Fragment,useEffect } from 'react';
import Button from '@nt/dds-react/core/Button'
import DataGrid from '@nt/dds-datagrid';
require('@nt/dds-datagrid/lib/datagrid.css');
import { useState } from "react";
import PipelineList from './pipelineList';
import { get_RWS_PipelineList,get_RWS_PipelineTableList } from '../../redux/pipeline/pipeline.action'
import { useDispatch, useSelector } from 'react-redux';
import { Search } from '@nt/dds-react';


const Pipeline = (p) => {
    const [clickAdd, setClickAdd] = useState(false);
    const [clickCancel, setClickCancel] = useState(false);
    
    const dispatch = useDispatch()
    const { apiField } = useSelector((state) => state.pipeline)

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
        dispatch(get_RWS_PipelineList())
        setClickAdd(true)
    }

    let cancelButtonClick = () => {
        setClickAdd(false)
        setClickCancel(true)
    }
    
    
    useEffect(() => {
        
        dispatch(get_RWS_PipelineTableList())
    },[])
   
    return (
    clickAdd ? <Fragment><PipelineList cancelButtonClick={cancelButtonClick}/></Fragment> : 
    <Fragment>
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
            rowData={apiField.pipelineTableData.responseData}
            columnDefs={apiField.pipelineTableData.columnDef}
            defaultColDef={{
                flex: 1,
                minWidth: 150,
                filter: true
              }}
              gridHeight="60vh"
              cacheQuickFilter={true}
              onGridReady={onGridReady}
        />
    </Fragment>
    )
};
export default Pipeline
