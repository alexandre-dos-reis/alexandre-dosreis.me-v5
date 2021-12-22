import styled from 'styled-components'

const padding = `30px`
const border = `4px solid rgb(96, 95, 163)`
const negativeMargin = `-30px`

export const Frame = styled.div`
    position: relative;
    padding: ${padding};
    border-left: ${border};
    border-right: ${border};
    background-color: #282430;
    border-radius: 5px;
    margin-left: ${negativeMargin};
    margin-right: ${negativeMargin};
`

interface MdxFrameProps {
    children: React.ReactNode
}

export default function MdxFrame({ children }: MdxFrameProps) {
    return <Frame>{children}</Frame>
}
