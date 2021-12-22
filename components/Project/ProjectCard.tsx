import { motion } from 'framer-motion'
// import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import Stack from './Stack'
import IconHover from 'components/IconHover/IconHover'
import Link from 'components/Link/Link'
import { Project } from 'types/Project.type'

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`

const Image = styled.img`
    width: 100%;
    height: 210px;
    object-fit: cover;
    object-position: 50% 0;
    border-radius: 10px;
    display: block;
    transition: all 0.1s;
    &:hover {
        filter: blur(2px);
    }
`

const Container = styled.div`
    margin-bottom: 80px;
    p {
        margin-bottom: 15px;
    }
`

interface ProjectCardProps {
    project: Project
    children: React.ReactNode
    image: string
    delay: number
}

export default function ProjectCard({
    project,
    children,
    delay,
    image,
}: ProjectCardProps) {
    const [isHover, setIsHover] = useState(false)
    return (
        <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.5, delay }}
        >
            <Container>
                <h2>
                    <Link
                        href={project.url}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        <IconHover left="-50px" top="-12px" fontSize="1.3em">
                            {project.title}
                        </IconHover>
                    </Link>
                </h2>

                {children}

                <Link href={project.url}>
                    <ImageWrapper>
                        <Image src={image} alt={project.title} />
                    </ImageWrapper>
                </Link>
                <Stack stack={project.stack} />
            </Container>
        </motion.div>
    )
}
