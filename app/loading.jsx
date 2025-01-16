import Image from 'next/image';

const LoadingPage = () => {
    return (
        <Image src='/assets/resume/loading.gif' alt='Loading Image' width={500} height={500} className='block mx-auto' />
    );
};

export default LoadingPage;