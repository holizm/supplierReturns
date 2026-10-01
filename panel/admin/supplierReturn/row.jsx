import { DateTime } from 'list'

export default item => <>
    <td>{item.number}</td>
    <td>{item.supplier?.title}</td>
    <DateTime value={item.requestDate} />
    <td>{item.supplierReturnReason?.title}</td>
    <td>{item.state?.title}</td>
</>
