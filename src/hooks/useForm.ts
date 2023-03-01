import { useState } from 'react';

import { IResponse, IBody } from "../interface/response.interface";

import axios from 'axios';

const url = "https://api.languti.com/v1/translator/translate";

export const useForm = () => {
    const [body, setBody] = useState<IBody>({text: '', target_language: "de"});
    const [response, setResponse] = useState('');
    
  const getTranslatedWord = async () => {
      const response = await axios.post<IResponse>(url, 
          {text: body.text, target_language: body.target_language})
  
      setResponse(response.data.data.translation)
      setBody({text: '', target_language: "de"})
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      let lang: "ru" | "de" = /[а-я]/i.test(e.target.value) ? 'de' : "ru";
      setBody({text: e.target.value, target_language: lang})
  }

  return {body, setBody, response, setResponse, getTranslatedWord, handleChange}
}

