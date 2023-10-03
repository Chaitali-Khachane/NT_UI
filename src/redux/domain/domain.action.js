import domainList from '../../data/domain.json'
import {SET_API_DATA} from './domain.type'



export let get_RWS_DomainList=()=> async(dispatch) => {
    dispatch(
        {
            type:SET_API_DATA,
            payload:{
                apiField:"domainTableData",
                data:domainList.tableData.result
            }
        }
    )
    

}