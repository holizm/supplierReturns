import {
    DialogForm,
    LongText,
    Numeric,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='return'
        property='supplierReturn'
        required
    />
    <Text
        placeholder='item'
        property='item'
        required
    />
    <Numeric
        placeholder='quantity'
        property='quantity'
        required
    />
    <Text
        placeholder='physicalCondition'
        property='condition'
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
