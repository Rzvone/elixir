import { useEffect, useState } from "react";


type ScreenSize = '4xs' | '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';

const useScreenSize = (): ScreenSize => {
    
    const [screenSize, setScreenSize ] = useState<ScreenSize>('xs');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) setScreenSize('xs');
            else if (width < 768) setScreenSize('sm');
            else if (width < 1024) setScreenSize('md');
            else if (width < 1280) setScreenSize('lg');
            else if (width < 1536) setScreenSize('xl');
            else setScreenSize('2xl');
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return screenSize;
}

export default useScreenSize;