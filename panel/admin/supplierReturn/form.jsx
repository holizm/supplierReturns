import {
    DateTime,
    DialogForm,
    LongText,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='supplierReturnsNumber'
        property='number'
        required
    />
    <Text
        placeholder='supplierReturnsSupplier'
        property='supplier'
        required
    />
    <Text
        placeholder='supplierReturnsPurchaseOrder'
        property='purchaseOrder'
    />
    <DateTime
        placeholder='supplierReturnsRequestDate'
        property='requestDate'
        required
    />
    <Text
        placeholder='supplierReturnsReason'
        property='supplierReturnReason'
        required
    />
    <LongText
        placeholder='supplierReturnsDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
