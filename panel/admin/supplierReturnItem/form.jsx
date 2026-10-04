import {
    DialogForm,
    LongText,
    Numeric,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='return'
        required
        supplierReturn
    />
    <Text
        item
        required
    />
    <Numeric
        quantity
        required
    />
    <Text
        condition
        placeholder='physicalCondition'
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
