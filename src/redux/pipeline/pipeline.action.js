import pipelineList from '../../data/pipeline.json'
import {SET_API_DATA,SET_PIPELINE_LIST,SET_DATA_SOURCE_API_DATA,SET_SOURCE_TABLE_API_DATA,SET_DOMAIN_LIST,SET_TABLE_SCHEMA_LIST} from './pipeline.type'

export let get_RWS_PipelineList=()=> async(dispatch) => {
    console.log("in pipeline action ")
    console.log(pipelineList)
    dispatch(
        {
            type:SET_PIPELINE_LIST,
            payload:{
                apiField:"pipelineTableData",
                data:pipelineList.pipelineList.result
            }
        }
    )
    

}

export let get_RWS_PipelineTableList=()=> async(dispatch) => {
    dispatch(
        {
            type:SET_API_DATA,
            payload:{
                apiField:"pipelineTableData",
                data:pipelineList.tableData.result
            }
        }
    )
    

}

export let get_RWS_SourceList=()=>async(dispatch)=>{
    dispatch(
        {
            type:SET_DATA_SOURCE_API_DATA,
            payload:{
                apiField:"apiData",
                data:pipelineList.dataIngestionSource
            }
        }
    )
}

export let get_RWS_tableList=(sourceId)=>async(dispatch)=>{
    // alert(sourceId)
    dispatch(
        {
            type:SET_SOURCE_TABLE_API_DATA,
            payload:{
                apiField:"apiData",
                data:pipelineList[sourceId]
            }
        }
    )
}

export let get_RWS_domainList=()=>async(dispatch)=>{
    // alert(sourceId)
    dispatch(
        {
            type:SET_DOMAIN_LIST,
            payload:{
                apiField:"apiData",
                data:pipelineList.domainList.result
            }
        }
    )
}
export let get_RWS_schemaDiscovery=()=>async(dispatch)=>{
  dispatch(
    {
        type:SET_TABLE_SCHEMA_LIST,
        payload:{
            apiField:"apiData",
            data:pipelineList.tableSchemaDiscovery.entity_column_metadata
        }
    }
  )
}