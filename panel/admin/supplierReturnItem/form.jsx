import {
    DialogForm,
    LongText,
    Numeric,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='supplierReturnsReturn'
        property='supplierReturn'
        required
    />
    <Text
        placeholder='supplierReturnsItem'
        property='item'
        required
    />
    <Numeric
        placeholder='supplierReturnsQuantity'
        property='quantity'
        required
    />
    <Text
        placeholder='supplierReturnsCondition'
        property='condition'
    />
    <LongText
        placeholder='supplierReturnsDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
