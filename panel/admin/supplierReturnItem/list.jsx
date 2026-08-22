import { List } from 'list'
import Form from './form'

const headers = <>
    <th start>supplierReturnsReturn</th>
    <th>supplierReturnsItem</th>
    <th>supplierReturnsQuantity</th>
    <th>supplierReturnsAcceptedQuantity</th>
    <th>supplierReturnsCondition</th>
</>

const row = item => <>
    <td>{item.supplierReturn?.number}</td>
    <td>{item.item?.title}</td>
    <td>{item.quantity}</td>
    <td>{item.acceptedQuantity}</td>
    <td>{item.condition}</td>
</>

export default <List
    create={Form}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
