import datsourceList from '../../data/datasource.json'
import {SET_API_DATA,SET_CONNECTOR_LIST,SET_SELECTED_CONNECTOR,SET_DYNAMIC_FIELDS} from './datasource.type'

export let get_RWS_ConnectorField=(value)=>async(dispatch)=>{
    // console.log("in function")
    // console.log(datsourceList.connectoreParams.result[value])
    dispatch(
        {
            type:SET_DYNAMIC_FIELDS,
            payload:{
                apiField:"connectors",
                data:datsourceList.connectoreParams.result[value]
            }
        }
    )
}
export let set_RWS_SelectedConnector=(value)=> async(dispatch) => {
    dispatch(
        {
            type:SET_SELECTED_CONNECTOR,
            payload:{
                apiField:"connectors",
                data:value
            }
        }
    )
    

}

export let get_RWS_ConnectorList=()=> async(dispatch) => {
    dispatch(
        {
            type:SET_CONNECTOR_LIST,
            payload:{
                apiField:"connectors",
                data:datsourceList.connectors.result
            }
        }
    )
    

}
export let get_RWS_DataSourceList=()=> async(dispatch) => {
    dispatch(
        {
            type:SET_API_DATA,
            payload:{
                apiField:"datasourceTableData",
                data:datsourceList.tableData
            }
        }
    )
    

}