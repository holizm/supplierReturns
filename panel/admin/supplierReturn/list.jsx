import {
    DateTime,
    List,
    Text,
} from 'list'
import Form from './form'

const headers = <>
    <th start>supplierReturnsNumber</th>
    <th>supplierReturnsSupplier</th>
    <th>supplierReturnsRequestDate</th>
    <th>supplierReturnsReason</th>
    <th>supplierReturnsState</th>
</>

const row = item => <>
    <td>{item.number}</td>
    <td>{item.supplier?.title}</td>
    <DateTime value={item.requestDate} />
    <td>{item.supplierReturnReason?.title}</td>
    <td>{item.state?.title}</td>
</>

export default <List
    create={Form}
    filters={<Text property='number' />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
