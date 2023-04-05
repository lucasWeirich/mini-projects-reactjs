import { useEffect } from 'react'

export default function usePageTitle(title: string) {
    const BASE_TITLE = '50 projects in 50 days'

    useEffect(() => {
        let newTitle;
        if (title === '') {
            newTitle = `${BASE_TITLE}`;
        } else {
            newTitle = `${title} - ${BASE_TITLE}`;
        }

        document.title = newTitle;
    }, []);
}