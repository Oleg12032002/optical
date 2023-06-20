import { useLayoutEffect, useState } from "react"

export const useLanguage = () => {
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'ua');

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-language', language);
        localStorage.setItem('language', language)
    }, [language])

    return { language, setLanguage }
}