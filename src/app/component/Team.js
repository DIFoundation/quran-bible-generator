import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <div className='bg- px-[100px] py-10 '>
        <div>
            {/* Team */}
            <div>
                <h1 className='font-bold text-3xl md:text-white px-8 my-5 max-md:text-center'>
                    The Executive Team
                </h1>
                {/* Team Card */}
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 text-sm shadow-black'>
                    <div className='bg-white team-card max-md:border'>
                        <div className='flex justify-center'>
                            <Image src="/ceo.jpg" alt="Genomac Logo" width={500} height={500} className='rounded-full w-[8rem] h-[8rem] border-solid border-[5px] border-purple-950 shadow- '  />
                        </div>
                        <div className='team-name'>
                            <h1>Mr. Oluwaseyi Abraham Olawale</h1>
                            <h3>FOUNDER AND CEO</h3>
                        </div>
                        <div>
                            <p>
                                Mr. Oluwaseyi Olawale is an innovative biopreneur with more than 5 years of active experience as a Bioinformatician and Omics-based innovative researcher. He is presently leading innovative research and development including an African medicinal plant project with a cure for diabetes, and treatment for Hemorrhoids and diarrhea using Bioinformatics, Artificial Intelligence and Medicinal Chemistry.
                                <br/><br/>
                                <b>Speciality/Skills:</b> Bioinformatics, Microbiology, OMICS based data analysis on Genomics, Phylogenomics, Mutagenesis, Metagenomics, Transcriptomics, and Proteomics.
                            </p>
                        </div>
                    </div>

                    <div className='bg-white lg:col-start-1 md:col-start-1 team-card max-md:border'>
                        <div className='flex justify-center'>
                            <Image src="/hod.jpg" alt="Genomac Logo" width={500} height={500} className='rounded-full w-[8rem] h-[8rem] border-solid border-[5px] border-purple-950'  />
                        </div>
                        <div className='team-name'>
                            <h1>Oluwaseyi Praise Ayomide</h1>
                            <h3>HEAD OF DEPARTMENT</h3>
                        </div>
                        <div>
                            <p>
                                A Biotechnologist and Animal Nutritionist with excellent research experience in alternative medicine for health and human resource management skills. Currently the head of the department for company activities involving students and early-stage scientists in Nigeria most of whom are interns, volunteers, and Industrial training students.
                                <br/><br/>
                                <b>Speciality/Skills:</b> Medicinal Plant Research, Alternative Medicine, HRM, Product Development, Animal Nutritionist and Food Fomulation
                            </p>
                        </div>
                    </div>

                    <div className='bg-white team-card max-md:border'>
                        <div className='flex justify-center'>
                            <Image src="/ldl.jpg" alt="Genomac Logo" width={500} height={500} className='rounded-full w-[8rem] h-[8rem] border-solid border-[5px] border-purple-950'  />
                        </div>
                        <div className='team-name'>
                            <h1>Agboola Oluwaseun</h1>
                            <h3>LEARNING & DEVELOPMENT LEAD</h3>
                        </div>
                        <div>
                            <p>
                                A microbiology graduate and well trained Bioinformatician. Currently, the Learning and Development Lead at  Genomics research hub, equipped with a skill set in data science, SQL, AI, and machine learning to extract valuable insights from complex biological datasets. Passionate about nurturing the growth of students and interns by communicating effectively complex concepts in the field of genomics and bioinformatics and fostering them to embark on innovative research projects and facilitating interdisciplinary collaboration.
                                <br/><br/>
                                <b>Speciality/Skills:</b> Educator, Effective communication, Microbiology, bioinformatics, genomics, phylogenomics, Pathogenomics.
                            </p>
                        </div>
                    </div>

                    <div className='bg-white lg:col-start-1 team-card max-md:border'>
                        <div className='flex justify-center'>
                            <Image src="/pl.jpg" alt="Genomac Logo" width={500} height={500} className='rounded-full w-[8rem] h-[8rem] border-solid border-[5px] border-purple-950'  />
                        </div>
                        <div className='team-name'>
                            <h1>Adelagan Deborah</h1>
                            <h3>PROGRAMS/CAMPUS RELATIONS LEAD</h3>
                        </div>
                        <div>
                            <p>
                                Deborah Jesudemilade Adelegan is a passionate advocate for advancing bioinformatics and nurturing collaborations between academia and industry. With a strong background in bioinformatics and a keen understanding of the scientific landscape, she is dedicated to fostering innovation and driving impactful partnerships.
                                <br/><br/>
                                <b>Speciality/Skills:</b> Bioinformatics, data science and artificial intelligence, computer-aided drug design and development, molecular docking and dynamics simulation, strategic thinking, project management, functional genomics.
                            </p>
                        </div>
                    </div>

                    <div className='bg-white team-card max-md:border'>
                        <div className='flex justify-center'>
                            <Image src="/hr.jpg" alt="Genomac Logo" width={500} height={500} className='rounded-full w-[8rem] h-[8rem] border-solid border-[5px] border-purple-950'  />
                        </div>
                        <div className='team-name'>
                            <h1>Akanbi Stephen</h1>
                            <h3>HR/CUSTOMER RELATION LEAD</h3>
                        </div>
                        <div>
                            <p>
                                A graduate of Human Anatomy with a strong interest in the intersection of Genetics, Genomics, Developmental biology, Neuroscience and Bioinformatics. With a deep understanding of the molecular and cellular basis of life, He is passionate about uncovering the genetic and developmental factors that contribute to human health and disease.
                                <br/><br/>
                                <b>Speciality/Skills:</b> Python/SQL, Microscopy, Phylogenomics, Bioinformatics, Genomics
                            </p>
                        </div>
                    </div>

                    <div className='bg-white md:col-start-2 lg:col-start-3 team-card max-md:border'>
                        <div className='flex justify-center'>
                            <Image src="/hero.jfif" alt="Genomac Logo" width={500} height={500} className='rounded-full w-[8rem] h-[8rem] border-solid border-[5px] border-purple-950'  />
                        </div>
                        EXTRA STAFF I
                        
                    </div>

                </div>
            </div>

            <hr className=' border mt-5'/>

            {/* Partners */}
            
            <div>
                <h1 className='font-bold text-3xl md:text-white px-8 my-5 rounded-full max-md:text-center'>
                    Our Partners & Collaborators
                </h1>
                {/* Partners Card*/}
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 text-sm'>
                    <div className='bg-white md:col-start-2 lg:col-start-1 team-card max-md:border'>
                        <div className='flex justify-center'>
                            <Image src="/hero.jfif" alt="Genomac Logo" width={500} height={500} className='rounded-full w-[8rem] h-[8rem] border-solid border-[5px] border-purple-950'  />
                        </div>
                        <div className='team-name'>
                            <h1>Dr. Shabana Bibi</h1>
                            <h3>HEAD OF RESERCH COLLABORATION</h3>
                        </div>
                        <div>
                            <p>
                                PhD- Maebashi Institute of Technology, Japan. Postdoc - Yunnan University, China.  Adjunct Distinguished Scientist-Techno India NJR Institute of Technology, India. Adjunct Distinguished Honorary Faculty Member-novel global community educational foundation (NGCEF), Australia. 
                                <br/><br/>
                                <b>Speciality/Skills:</b> Bioinformatics, Computer-aided drugs design and discovery (CADDD), OMICs analysis such as Genomic analysis, Metagenomics, Transcriptomics, and Proteomics analysis
                            </p>
                        </div>
                    </div>

                    <div className='bg-white team-card max-md:border'>
                        <div className='flex justify-center'>
                            <Image src="/hero.jfif" alt="Genomac Logo" width={500} height={500} className='rounded-full w-[8rem] h-[8rem] border-solid border-[5px] border-purple-950'  />
                        </div>
                        <div className='team-name'>
                            <h1>Dr. Kgaugelo Edward</h1>
                            <h3>SENIOR RESEARCHER</h3>
                        </div>
                        <div>
                            <p>
                                PhD. Vet. Sci.UP, Currently Senior Microbiology Lecturer, Unit for Environmental Sciences and Management: Microbiology, School of Biological Sciences, Faculty of Natural and Agricultural Northwest University, Potchefstroom Campus, South Africa.
                                <br/><br/>
                                <b>Speciality/Skills:</b> Microbiology, Molecular Biology, and Bioinformatics, genotyping using SNPs and copy number of repeats, Phylogenetics, MLST analysis, whole genome SNP (wgSNP) analysis, Phylogenomics, Pan-genomics, and Metagenomics.
                            </p>
                        </div>
                    </div>

                    <div className='bg-white team-card max-md:border'>
                        <div className='flex justify-center'>
                            <Image src="/hero.jfif" alt="Genomac Logo" width={500} height={500} className='rounded-full w-[8rem] h-[8rem] border-solid border-[5px] border-purple-950'  />
                        </div>
                        <div className='team-name'>
                            <h1>Dr. Maryam Idrees Malik</h1>
                            <h3>INTERNATIONAL COLLABORATOR</h3>
                        </div>
                        <div>
                            <p>
                                Ph.D. Microbiology, Quaid-i-Azam University Islamabad, Pakistan. Conducting research at National Institute of Genomics and Advanced Biotechnology (NIGAB), NARC, Pakistan. Recipient of Innovative Researcher Award from NIGAB. Her Research focuses on the development of target-based probiotic products using in vitro/in vivo/ex vivo/in silico techniques.
                                <br/><br/>
                                <b>Speciality/Skills:</b> Microbiology, Molecular biology, OMICS-based data analysis including Phylogenomics, Pan-genomics, Metagenomics and Genomic analysis.
                            </p>
                        </div>
                    </div>

                    <div className='bg-white lg:col-start-2 team-card max-md:border'>
                        <div className='flex justify-center'>
                            <Image src="/hero.jfif" alt="Genomac Logo" width={500} height={500} className='rounded-full w-[8rem] h-[8rem] border-solid border-[5px] border-purple-950'  />
                        </div>
                        <div className='team-name'>
                            <h1>Dr. Shakira Ghazanfar,</h1>
                            <h3>INTERNATIONAL COLLABORATOR</h3>
                        </div>
                        <div>
                            <p>
                                Scientist at Pakistan Agricultural Research Council, PARC, Islamabad, Pakistan since 2008. 
                                My research interest is: Using AI and Machine Learning techniques in microbiology/ probiotics. Use of Metagenomics in searching for microbial flora. Supervised more than 50 research students. has more than 100 research publications and many book chapters.
                                <br/><br/>
                                <b>Speciality/Skills:</b> Microbiology, Probiotics, Artificial Intelligence, Metagenomics, Machine Learning, and Genomics
                            </p>
                        </div>
                    </div>

                    <div className='bg-white team-card max-md:border'>
                        <div className='flex justify-center'>
                            <Image src="/hero.jfif" alt="Genomac Logo" width={500} height={500} className='rounded-full w-[8rem] h-[8rem] border-solid border-[5px] border-purple-950'  />
                        </div>
                        <div className='team-name'>
                            <h1>Hafiz Muhammad Talha Malik</h1>
                            <h3>INTERNATIONAL cOURSE INSTRUCTOR & COLLABORATOR</h3>
                        </div>
                        <div>
                            <p>
                                With over 6 years of active experience  as a  professional bioinformatician, Hafiz Muhammad Talha Malik has worked with Malikat private and government organizations and since he has developed expertise in OMICS data analysis with deep understanding of genomics, transcriptomics, and metageneomics data analysis. He also has a proven track record of implementing and developing bioinformatics pipelines and  currently engaged in research focused on leveraging RNA-seq data to develop precision medicine approaches for personalized patient care.
                                <br/><br/>
                                <b>Speciality/Skills:</b> Bioinformatics, Transcriptomics, Genomics, Metageneomics, Data Visualization, Machine Learning and Artificial intelligence
                            </p>
                        </div>
                    </div>

                    <div className='bg-white lg:col-start-3 team-card max-md:border'>
                        <div className='flex justify-center'>
                            <Image src="/hero.jfif" alt="Genomac Logo" width={500} height={500} className='rounded-full w-[8rem] h-[8rem] border-solid border-[5px] border-purple-950'  />
                        </div>
                        <div className='team-name'>
                            <h1>Unknown Unknown Unknown</h1>
                            <h3>UNKNOWN UNKNOWN UNKNOWN UNKNOWN</h3>
                        </div>
                        <div>
                            <p>
                                With over 6 years of active experience  as a  professional bioinformatician, Hafiz Muhammad Talha Malik has worked with Malikat private and government organizations and since he has developed expertise in OMICS data analysis with deep understanding of genomics, transcriptomics, and metageneomics data analysis. He also has a proven track record of implementing and developing bioinformatics pipelines and  currently engaged in research focused on leveraging RNA-seq data to develop precision medicine approaches for personalized patient care.
                                <br/><br/>
                                <b>Speciality/Skills:</b> Bioinformatics, Transcriptomics, Genomics, Metageneomics, Data Visualization, Machine Learning and Artificial intelligence
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Team