import {ParagraphStyled, InputStyled} from 'components'

export const Filter = ({value, onChange}) => {
    return <>
        <ParagraphStyled>Find contact by name</ParagraphStyled>
        <InputStyled
          name='filter'
          onChange={onChange}
          value={value}
        />
    </>
}