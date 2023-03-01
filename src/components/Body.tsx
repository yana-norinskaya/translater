import { FC } from 'react';

import { Button, Textarea, Flex } from '@mantine/core';

import { useForm } from '../hooks/useForm';


export const Body:FC = () => {
    const {body, handleChange, response, getTranslatedWord} = useForm();

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        e.target.style.border = "2px solid orange"
    }
    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        e.target.style.border = "1px solid #ced4da"
    }

    return(
        <>
        <Flex justify="space-between">  
            <Textarea
                placeholder="Введите текст"
                size="lg"
                value={body.text}
                onChange={(e) => handleChange(e)}
                onFocus={(e) => handleFocus(e)}
                onBlur={(e) => handleBlur(e)}/>
            <Textarea
                size="lg"
                defaultValue={response}/>
        </Flex>
            <Button 
                color="orange" 
                fullWidth
                radius="lg"
                size='lg'
                type='submit'
                disabled={body.text ? false : true}
                mt="15px"
                onClick={() => getTranslatedWord()}>
                Перевести
            </Button>
        </>
    )
}