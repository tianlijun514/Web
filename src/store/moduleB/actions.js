import axios from 'axios';
import { base } from '../../components/js/url';
const actions = {
    //审批流环节查询 
  async genehmigung({ commit, state }, value) {
    console.log(value)
    let a
    a = value.processType ? parseInt(value.processType) : ''
    console.log(a)
    let data = await axios
        .post(base + '/process/queryProcessList/'+value.currentPage + '/' + value.size, {
          processName:value.processName,
          processType:a
        })
    
    commit('updateGenehmigung',data.data)
    return data.data
},
}
export default actions