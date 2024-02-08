'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const PubPro = () => {

  const [selectedOption, setSelectedOption] = useState('content1');

  const showContent = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='mt-5'>
        <div className='mx-20'>
            <div className='flex justify-center gap-5 font-semibold'>
                <button className='hover rounded-lg px-5' onClick={() => showContent('content1')}>RESEARCH PUBLICATIONS</button>
                <div className="vertical-line"></div>
                <button className='hover rounded-lg px-5' onClick={() => showContent('content2')}>RESEARCH PROJECT</button>
            </div>
            <hr className='border-2 border-purple-900'/>

            <div style={{ display: selectedOption === 'content1' ? 'block' : 'none' }}>
                {/* Contents for Research Publications */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-5'>
                    <div className='border-2 border-purple-900 rounded-3xl'>
                        <div className='font-bold text-xl flex justify-center py-3'>
                            <h1 className='text-purple-900'>METEGENOMICS</h1>
                        </div>

                        <div className='px-8 py-3 text-justify text-sm text-purple-950'>
                            <p>
                                <b>Title:</b> Exploring Antibiotic resistance genes, mobile Gene elements, and virulence gene factors in an urban freshwater sample using metagenomic analysis
                            </p>
                            <br/>
                            <p>
                                <b>Abstract:</b> Antibiotic resistance genes (ARGs) and antimicrobial resistance elements (AMR) are novel environmental contaminants that pose a significant risk to human health globally. Freshwater contains a variety of microorganisms that might affect human health; its quality must be assessed before use. However, the dynamics of mobile genetic elements (MGEs) and ARG propagation in freshwater have rarely been 
                            </p>
                            <div className='font-bold flex gap-3'>
                                <a href='#' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950 w-1/2  px-auto py-1 my-2 flex justify-center text-center' download>
                                    Download Article
                                </a>

                                <a href='https://link.springer.com/article/10.1007/s11356-022-22197-4' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950 w-1/2 px-auto py-1 my-2 flex justify-center text-center' target='_blank'>
                                    Read Online
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='border-2 border-purple-900 rounded-3xl'>
                        <div className='font-bold text-xl flex justify-center py-3'>
                            <h1 className='text-purple-900'>CLINICAL GENOMICS</h1>
                        </div>

                        <div className='px-8 py-3 text-justify text-sm text-purple-950'>
                            <p>
                                <b>Title:</b> GLOBAL ANALYSIS OF NON-SYNONYMOUS SNPs IN MONKEYPOX VIRUS
                            </p>
                            <br/>
                            <p>
                                <b>Abstract:</b> In May of 2022, it was determined that a virus known as monkeypox (MPX) had spread over the world. The MPXV strain responsible for 87000 illnesses and 112 fatalities has been identified. This strain had a global average of 38.35 mutations per virus sample, with the 2022 epidemic seeing the highest MPXV mutation rate. Our aim was to use publicly accessible NCBI (National Center for Biotechnology Information) dat 
                            </p>
                            <div className='font-bold flex gap-3 pt-auto'>
                                <a href='#' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950 w-1/2  px-auto py-1 my-2 flex justify-center text-center' download>
                                    Download Article
                                </a>

                                <a href='https://www.globalscientificjournal.com/journal_volume11_issue5_May_2023_edition.html' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950 w-1/2 px-auto py-1 my-2 flex justify-center text-center' target='_blank'>
                                    Read Online
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='border-2 border-purple-900 rounded-3xl'>
                        <div className='font-bold text-xl flex justify-center py-3'>
                            <h1 className='text-purple-900'>PROBIO-GENOMICS</h1>
                        </div>

                        <div className='px-8 py-3 text-justify text-sm text-purple-950'>
                            <p>
                                <b>Title:</b> Complete Genome Sequence and Comparative Analysis of Bifidobacterium bifidum Strains Reveal Insight into Probiotic Properties
                            </p>
                            <br/>
                            <p>
                                <b>Abstract:</b> Despite the widespread use of probiotic supplements for their beneficial health effects, there have recently been some concerns expressed over the absorption and potential colonization of the intestinal tract by the bacteria that these products contain. One of the bacterial species of the genus Bifidobacterium is the strain Bifidobacterium bifidum. One of the most prevalent probiotic bacteria in the bodies of 
                            </p>
                            <div className='font-bold flex gap-3 pt-auto'>
                                <a href='#' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950 w-1/2  px-auto py-1 my-2 flex justify-center text-center' download>
                                    Download Article
                                </a>

                                <a href='https://www.globalscientificjournal.com/journal_volume11_issue5_May_2023_edition.html' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950 w-1/2 px-auto py-1 my-2 flex justify-center text-center' target='_blank'>
                                    Read Online
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='border-2 border-purple-900 rounded-3xl'>
                        <div className='font-bold text-xl flex justify-center py-3'>
                            <h1 className='text-purple-900'>PROBIO-GENOMICS 2</h1>
                        </div>

                        <div className='px-8 py-3 text-justify text-sm text-purple-950'>
                            <p>
                                <b>Title:</b> Probiotics, their action modality and the use of multi-omics in metamorphosis of commensal microbiota into target-based probiotics
                            </p>
                            <br/>
                            <p>
                                <b>Abstract:</b> This review article addresses the strategic formulation of human probiotics and allows the reader to walk along the journey that metamorphoses commensal microbiota into target-based probiotics. It recapitulates what are probiotics, their history, and the main mechanisms through which probiotics exert beneficial effects on the host. It articulates how a given probiotic preparation could not be all-encompassing and how each probiotic strain h
                            </p>
                            <div className='font-bold flex gap-3 pt-auto'>
                                <a href='#' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950 w-1/2  px-auto py-1 my-2 flex justify-center text-center' download>
                                    Download Article
                                </a>

                                <a href='#' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950 w-1/2 px-auto py-1 my-2 flex justify-center text-center'>
                                    Read Online
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='border-2 border-purple-900 rounded-3xl'>
                        <div className='font-bold text-xl flex justify-center py-3'>
                            <h1 className='text-purple-900'>DRUG DESIGN & DISCOVERY</h1>
                        </div>

                        <div className='px-8 py-3 text-justify text-sm text-purple-950'>
                            <p>
                                <b>Title:</b> Molecular Dynamics Simulation and Pharmacoinformatic Integrated Analysis of Bioactive Phytochemicals from Azadirachta indica (Neem) to Treat Diabetes Mellitus
                            </p>
                            <br/>
                            <p>
                                <b>Abstract:</b> Diabetes mellitus is a chronic hormonal and metabolic disorder in which our body cannot generate necessary insulin or does not act in response to it, accordingly, ensuing in discordantly high blood sugar (glucose) levels. Diabetes mellitus can lead to systemic dysfunction in the multiorgan system, including cardiac dysfunction, severe kidney disease, lowered quality of life, and increased mortality risk 
                            </p>
                            <div className='font-bold flex gap-3 pt-auto'>
                                <a href='#' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950 w-1/2  px-auto py-1 my-2 flex justify-center text-center' download>
                                    Download Article
                                </a>

                                <a href='#' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950 w-1/2 px-auto py-1 my-2 flex justify-center text-center'>
                                    Read Online
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='border-2 border-purple-900 rounded-3xl'>
                        <div className='font-bold text-xl flex justify-center py-3'>
                            <h1 className='text-purple-900'>PLANT GENOMICS</h1>
                        </div>

                        <div className='px-8 py-3 text-justify text-sm text-purple-950'>
                            <p>
                                <b>Title:</b> Phylogenetic Analysis of Blast Resistant RMG7 (Resistance to Magnaporthe Grisea 7) Gene in Cereals (Wheat and Rice)
                            </p>
                            <br/>
                            <p>
                                <b>Abstract:</b> Understanding the emergence and evolution of plant pathogens has benefited greatly from phylogenetic approaches. Phylogenetic analysis of the Blast Resistant RMG7 (Resistance to Magnaporthe grisea 7) gene would involve the study of its evolutionary relationships with related genes across different species. This study aimed to understand the gene&apos;s origin, divergence, and evolutionary history, which  
                            </p>
                            <div className='font-bold flex gap-3 pt-auto'>
                                <a href='#' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950 w-1/2  px-auto py-1 my-2 flex justify-center text-center' download>
                                    Download Article
                                </a>

                                <a href='#' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950 w-1/2 px-auto py-1 my-2 flex justify-center text-center'>
                                    Read Online
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='border-2 border-purple-900 rounded-3xl'>
                        <div className='font-bold text-xl flex justify-center py-3'>
                            <h1 className='text-purple-900'>YEAST GENOMICS</h1>
                        </div>

                        <div className='px-8 py-3 text-justify text-sm text-purple-950'>
                            <p>
                                <b>Title:</b> Snapshot of the Probiotic Potential of Kluveromyces marxianus DMKU-1042 Using a Comparative Probiogenomics Approach
                            </p>
                            <br/>
                            <p>
                                <b>Abstract:</b> Kluyveromyces marxianus is a rapidly growing thermotolerant yeast that secretes a variety of lytic enzymes, utilizes different sugars, and produces ethanol. The probiotic potential of this yeast has not been well explored. To evaluate its probiotic potential, the yeast strain Kluyveromyces marxianus DMKU3-1042 was analyzed using next-generation sequencing technology. Analysis of the genomes 
                            </p>
                            <div className='font-bold flex gap-3 pt-auto'>
                                <a href='#' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950 w-1/2  px-auto py-1 my-2 flex justify-center text-center' download>
                                    Download Article
                                </a>

                                <a href='#' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950 w-1/2 px-auto py-1 my-2 flex justify-center text-center'>
                                    Read Online
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='border-2 border-purple-900 rounded-3xl'>
                        <div className='font-bold text-xl flex justify-center py-3'>
                            <h1 className='text-purple-900'>HUMAN GUT-MICROBIOME</h1>
                        </div>

                        <div className='px-8 py-3 text-justify text-sm text-purple-950'>
                            <p>
                                <b>Title:</b> Draft genome sequence of Lactiplantibacillus plantarum subsp. plantarum strain HF43, a human gut-associated potential probiotic
                            </p>
                            <br/>
                            <p>
                                <b>Abstract:</b> Lactiplantibacillus plantarum adapts to a wide range of ecological niches, including the human gut. Numerous health-promoting benefits have been associated with L. plantarum strains. Motivated for the development of human-origin target-based probiotics with known genetic markers, we report the draft genome sequence of human
                            </p>
                            <div className='font-bold flex gap-3 pt-auto'>
                                <a href='#' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950 w-1/2  px-auto py-1 my-2 flex justify-center text-center' download>
                                    Download Article
                                </a>

                                <a href='#' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950 w-1/2 px-auto py-1 my-2 flex justify-center text-center'>
                                    Read Online
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='border-2 border-purple-900 rounded-3xl'>
                        <div className='font-bold text-xl flex justify-center py-3'>
                            <h1 className='text-purple-900'>CANCER RESEARCH</h1>
                        </div>

                        <div className='px-8 py-3 text-justify text-sm text-purple-950'>
                            <p>
                                <b>Title:</b> Bioinformatic challenge on prostate cancer and urinary microbiome
                            </p>
                            <br/>
                            <p>
                                <b>Abstract:</b> The Bioinformatics Resource Center (BRC) program was developed by the National Institute of Allergy and Infectious Diseases (NIAID) to assist researchers in analyzing the increasing amount of genomic sequences and other omics-related data. In this work, whole-genome sequences of prostate cancer and genitourinary diseases (WGS) were examined for genes utilizing the BV-BRC Bioinformatics Resource 
                            </p>
                            <div className='font-bold flex gap-3 pt-auto'>
                                <a href='#' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950 w-1/2  px-auto py-1 my-2 flex justify-center text-center' download>
                                    Download Article
                                </a>

                                <a href='#' className='rounded-full border border-solid border-black shadow-md shadow-black hover:text-white hover:bg-purple-950 w-1/2 px-auto py-1 my-2 flex justify-center text-center'>
                                    Read Online
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div style={{ display: selectedOption === 'content2' ? 'block' : 'none' }}>
                {/* Contents for Option 2 */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-5'>
                    <div className='border-2 border-purple-900 rounded-3xl' id='genomics'>
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
    </div>
  )
}

export default PubPro


{/* <button className={`${selectedOption === 'content1' ? 'active' : 'hidden'}`}>dfds</button> */}