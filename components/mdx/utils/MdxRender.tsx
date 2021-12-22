import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'

interface MdxComponentProps {
    string: string
}

const MdxRender = ({ string }: MdxComponentProps) => {
    const MdxContent = useMemo(() => getMDXComponent(string), [string])
    return <MdxContent />
}

export default MdxRender
