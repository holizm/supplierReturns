import {
    DateTime,
    DialogForm,
    LongText,
    Text,
} from 'form'

const inputs = <>
    <Text
        number
        required
    />
    <Text
        required
        supplier
    />
    <Text purchaseOrder />
    <DateTime
        requestDate
        required
    />
    <Text
        placeholder='reason'
        required
        supplierReturnReason
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
