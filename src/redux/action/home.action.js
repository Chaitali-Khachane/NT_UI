import highLevelPipelines from '../../data/home.json'
import {SET_API_DATA,GET_API_DATA} from '../type/home.type'

export let fetch_RWS_HighLevelPipelines=()=> async(dispatch) => {
    dispatch(
        {
            type:SET_API_DATA,
            payload:{
                apiField:"pipelineHighLevelData",
                data:highLevelPipelines.response.result.entity_run_details
            }
        }
    )
    

}

export let get_RWS_HighLevelPipelines=()=> async(dispatch) => {
    dispatch(
        {
            type:GET_API_DATA,
            payload:{
                apiField:"pipelineHighLevelData"
            }
        }
    )
    

}