'use client'
import React, {useState} from 'react';
import Image from 'next/image';

const Bioinformatics = () => {

    const [selectedOption, setSelectedOption] = useState('content1');

  const showContent = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='mx-20'>

        <div className='pt-10 px-5 overflow-x-scroll no-scrollbar'>        
            <div className='pb-5  flex flex-rows-scroll gap-8 font-bold text-lg text-purple-900 '>

                <div onClick={() => showContent('content1')} className='bg-white rounded-full border border-solid border-black shadow-md shadow-black hover:text-purple-950 hover:bg-purple-300  transition ease-in-out delay-150 hover:transition-y-1 hover:scale-110 duration-300 cursor-pointer'>
                    <div className='w-50'>
                        <div className='px-10 py-1 flex justify-center'>
                            <p className='my-2'>
                                Genomics
                            </p>
                        </div>
                    </div>
                </div>

                <div onClick={() => showContent('content2')} className='bg-white rounded-full border border-solid border-black shadow-md shadow-black hover:text-purple-950 hover:bg-purple-300  transition ease-in-out delay-150 hover:transition-y-1 hover:scale-110 duration-300 cursor-pointer'>
                    <div className='w-50'>
                        <div className='px-10 py-1 flex justify-center'>
                            <p className='my-2'>
                                Metagenomics
                            </p>
                        </div>
                    </div>
                </div>

                <div onClick={() => showContent('content3')} className='bg-white rounded-full border border-solid border-black shadow-md shadow-black hover:text-purple-950 hover:bg-purple-300  transition ease-in-out delay-150 hover:transition-y-1 hover:scale-110 duration-300 cursor-pointer'>
                    <div className='w-50'>
                        <div className='px-10 py-1 flex justify-center'>
                            <p className='my-2'>
                                Transcriptomics
                            </p>
                        </div>
                    </div>
                </div>

                <div onClick={() => showContent('content4')} className='bg-white rounded-full border border-solid border-black shadow-md shadow-black hover:text-purple-950 hover:bg-purple-300  transition ease-in-out delay-150 hover:transition-y-1 hover:scale-110 duration-300 cursor-pointer'>
                    <div className='w-50'>
                        <div className='px-10 py-1 flex justify-center'>
                            <p className='my-2'>
                                Epigenetics
                            </p>
                        </div>
                    </div>
                </div>

                <div onClick={() => showContent('content5')} className='bg-white rounded-full border border-solid border-black shadow-md shadow-black hover:text-purple-950 hover:bg-purple-300  transition ease-in-out delay-150 hover:transition-y-1 hover:scale-110 duration-300 cursor-pointer'>
                    <div className='w-[17em]'>
                        <div className='px-10 py-1 flex justify-center'>
                            <p className='my-2'>
                                Drug Design & Discovery
                            </p>
                        </div>
                    </div>
                </div>

                <div onClick={() => showContent('content6')} className='bg-white rounded-full border border-solid border-black shadow-md shadow-black hover:text-purple-950 hover:bg-purple-300  transition ease-in-out delay-150 hover:transition-y-1 hover:scale-110 duration-300 cursor-pointer'>
                    <div className='w-60'>
                        <div className='px-10 py-1 flex justify-center'>
                            <p className='my-2'>
                                Data Analysis
                            </p>
                        </div>
                    </div>
                </div>
            
            </div>            
        </div>

        <div style={{ display: selectedOption === 'content1' ? 'block' : 'none' }} className=''>
            <h1 className='font-bold text-2xl pt-7'>Genomics</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-5'>
                <div className='border-2 border-purple-900 rounded-3xl'>
                    <div className='font-bold text-xl flex justify-center py-3'>
                        <h1 className='text-purple-900'>Phylogenomics</h1>
                    </div>
                    <div className='shrink-0'>
                        <Image src='/genomics.jpg' className='object-cover w-full h-[7em]' alt='Image' width={100} height={50}/>
                    </div>
                    <div className='px-8 py-3 text-justify'>
                        <p className='text-sm text-purple-950'>Phylogenomics is a powerful tool and very crucial for understanding evolutionary relationships among organisms. We use several methods to answer any of your phylogenetic questions at genome or gene levels. Click the button below to see the entire workflow.</p>
                        <div className='font-bold'>
                            <a href='/' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950   px-10 py-1 my-2 flex justify-center text-center'>
                                CHECK WORKFLOW
                            </a>
                        </div>
                    </div>
                </div>

                <div className='border-2 border-purple-900 rounded-3xl'>
                    <div className='font-bold text-xl flex justify-center py-3'>
                        <h1 className='text-purple-900'>Pan-genomics</h1>
                    </div>
                    <div className='shrink-0'>
                        <Image src='/genomics.jpg' className='object-cover w-full h-[7em]' alt='Image' width={100} height={50}/>
                    </div>
                    <div className='px-8 py-3 text-justify'>
                        <p className='text-sm text-purple-950'>Phylogenomics is a powerful tool and very crucial for understanding evolutionary relationships among organisms. We use series of methods to answer any of your phylogenetic questions either at genome level or gene level. Click the button below to see the entire workflow.</p>
                        <div className='font-bold'>
                            <a href='/' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950   px-10 py-1 my-2 flex justify-center text-center'>
                                CHECK WORKFLOW
                            </a>
                        </div>
                    </div>
                </div>

                <div className='border-2 border-purple-900 rounded-3xl'>
                    <div className='font-bold text-xl flex justify-center text-center py-3'>
                        <h1 className='text-purple-900'>Functional and Structural Genomics</h1>
                    </div>
                    <div className='shrink-0'>
                        <Image src='/genomics.jpg' className='object-cover w-full h-[7em]' alt='Image' width={100} height={50}/>
                    </div>
                    <div className='px-8 py-3 text-justify'>
                        <p className='text-sm text-purple-950'>While functional genomics involved studying the expression and function of the genome, structural genomics describes 3-dimensional structure of each and every protein encoded by the genes. To deal with this, we provide a comprehensive analytical workflow.</p>
                        <div className='font-bold py-auto'>
                            <a href='/' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950   px-10 py-1 my-2 flex justify-center text-center'>
                                CHECK WORKFLOW
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div style={{ display: selectedOption === 'content2' ? 'block' : 'none' }} className=''>
            <h1 className='font-bold text-2xl pt-7'>Metagenomics</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-5'>
                <div className='border-2 border-purple-900 rounded-3xl'>
                    <div className='font-bold text-xl flex justify-center py-3'>
                        <h1 className='text-purple-900'>Phylogenomics</h1>
                    </div>
                    <div className='shrink-0'>
                        <Image src='/genomics.jpg' className='object-cover w-full h-[7em]' alt='Image' width={100} height={50}/>
                    </div>
                    <div className='px-8 py-3 text-justify'>
                        <p className='text-sm text-purple-950'>Phylogenomics is a powerful tool and very crucial for understanding evolutionary relationships among organisms. We use several methods to answer any of your phylogenetic questions at genome or gene levels. Click the button below to see the entire workflow.</p>
                        <div className='font-bold'>
                            <a href='/' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950   px-10 py-1 my-2 flex justify-center text-center'>
                                CHECK WORKFLOW
                            </a>
                        </div>
                    </div>
                </div>

                <div className='border-2 border-purple-900 rounded-3xl'>
                    <div className='font-bold text-xl flex justify-center py-3'>
                        <h1 className='text-purple-900'>Pan-genomics</h1>
                    </div>
                    <div className='shrink-0'>
                        <Image src='/genomics.jpg' className='object-cover w-full h-[7em]' alt='Image' width={100} height={50}/>
                    </div>
                    <div className='px-8 py-3 text-justify'>
                        <p className='text-sm text-purple-950'>Phylogenomics is a powerful tool and very crucial for understanding evolutionary relationships among organisms. We use series of methods to answer any of your phylogenetic questions either at genome level or gene level. Click the button below to see the entire workflow.</p>
                        <div className='font-bold'>
                            <a href='/' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950   px-10 py-1 my-2 flex justify-center text-center'>
                                CHECK WORKFLOW
                            </a>
                        </div>
                    </div>
                </div>

                <div className='border-2 border-purple-900 rounded-3xl'>
                    <div className='font-bold text-xl flex justify-center text-center py-3'>
                        <h1 className='text-purple-900'>Functional and Structural Genomics</h1>
                    </div>
                    <div className='shrink-0'>
                        <Image src='/genomics.jpg' className='object-cover w-full h-[7em]' alt='Image' width={100} height={50}/>
                    </div>
                    <div className='px-8 py-3 text-justify'>
                        <p className='text-sm text-purple-950'>While functional genomics involved studying the expression and function of the genome, structural genomics describes 3-dimensional structure of each and every protein encoded by the genes. To deal with this, we provide a comprehensive analytical workflow.</p>
                        <div className='font-bold py-auto'>
                            <a href='/' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950   px-10 py-1 my-2 flex justify-center text-center'>
                                CHECK WORKFLOW
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        


    </div>
  )
}

export default Bioinformatics