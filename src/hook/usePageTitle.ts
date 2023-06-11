import { useEffect } from 'react'

export default function usePageTitle(title: string) {
    const BASE_TITLE = 'Mini projects ReactJS'

    useEffect(() => {
        let newTitle;
        if (title === '') {
            newTitle = `${BASE_TITLE}`;
        } else {
            newTitle = `${title} - ${BASE_TITLE}`;
        }

        document.title = newTitle;
    }, [title]);
}