import {
    DateTime,
    DialogForm,
    LongText,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='number'
        property='number'
        required
    />
    <Text
        placeholder='supplier'
        property='supplier'
        required
    />
    <Text
        placeholder='purchaseOrder'
        property='purchaseOrder'
    />
    <DateTime
        placeholder='requestDate'
        property='requestDate'
        required
    />
    <Text
        placeholder='reason'
        property='supplierReturnReason'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
