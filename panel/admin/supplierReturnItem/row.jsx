export default item => <>
    <td>{item.supplierReturn?.number}</td>
    <td>{item.item?.title}</td>
    <td>{item.quantity}</td>
    <td>{item.acceptedQuantity}</td>
    <td>{item.condition}</td>
</>
