import pipelineList from '../../data/pipeline.json'
import {SET_API_DATA,SET_PIPELINE_LIST} from './pipeline.type'

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
                apiField:"pipelineStep1SourceData",
                data:pipelineList.tableData.result
            }
        }
    )
}