import { bundleMDX } from 'mdx-bundler'
import { GetStaticProps, NextPage } from 'next'
import { getAllCategories } from 'api/queries/category.queries'
import { getAllProjects } from 'api/queries/project.queries'
import Layout from 'components/Layout/Layout'
import ProjectCard from 'components/Project/ProjectCard'
import MdxRender from 'components/mdx/utils/MdxRender'
import { Category } from 'types/Category.type'
import { Project } from 'types/Project.type'

export const getStaticProps: GetStaticProps = async () => {
    const categories: Category[] = await getAllCategories()
    const projects: Project[] = await getAllProjects()
    const apiUrl = process.env.API_URL

    const mdxToString = (projects: Project[]) => {
        const promises = projects.map(async p => {
            p.body = (await bundleMDX({ source: p.body })).code
            return p
        })
        return Promise.all(promises)
    }

    const projectsWithMDX: Project[] = await mdxToString(projects)

    return {
        props: {
            categories,
            projects: projectsWithMDX,
            apiUrl,
        },
        revalidate: 60,
    }
}

interface ProjetsProps {
    categories: Category[]
    projects: Project[]
    apiUrl: string
}

const Projets: NextPage<ProjetsProps> = ({ categories, projects, apiUrl }) => {
    return (
        <Layout mode="single-section" categories={categories}>
            <h1>Projets</h1>
            {projects.map((p, i) => (
                <ProjectCard
                    key={p.id}
                    project={p}
                    image={apiUrl + '/assets/' + p.image}
                    delay={0.1 * (i + 1)}
                >
                    <MdxRender string={p.body} />
                </ProjectCard>
            ))}
        </Layout>
    )
}

export default Projets
