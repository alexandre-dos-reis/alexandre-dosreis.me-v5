import { useState, useEffect } from 'react'
// @ts-ignore
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styled from 'styled-components'

const padding = `padding: 20px;`
const height = `height: 50px;`

const Container = styled.div`
    font-family: monospace;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
`

const Symbol = styled(Container)`
    ${padding}
    ${height}
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: black;
    background-color: #7e7d7d;
    border-radius: 30px 0 0 30px;
    border: 2px solid black;
    /* margin-left: -30px; */
`

const Command = styled.div`
    padding: 0 20px;
    ${height}
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    background-color: black;
    overflow: auto;
    white-space: nowrap;
    width: 100%;
`
const Text = styled.span`
    display: inline-block;
    width: 50px;
`
const Copy = styled.button`
    ${height}
    ${padding}
  /* margin-right: -30px; */
  display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    border: 0;
    border-radius: 0 30px 30px 0;

    svg {
        fill: grey;
        cursor: pointer;
        &:hover {
            fill: white;
        }
    }
`
const Popup = styled(Container)`
    position: absolute;
    right: 0;
    top: -35px;
    background-color: black;
    color: white;
    padding: 2px 10px;
    border-radius: 5px;
`

const Arrow = styled.div`
    position: absolute;
    bottom: -5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid black;
`

interface ActionPillProps {
    children: React.ReactNode
    symbol?: string
}

export default function ActionPill({
    children,
    symbol = '$',
}: ActionPillProps) {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (isActive) {
            const popUp = setTimeout(() => {
                setIsActive(false)
            }, 1000)
            return () => clearTimeout(popUp)
        }
    }, [isActive])

    return (
        <Container>
            <Symbol>{symbol}</Symbol>
            <Command>
                <Text>{children}</Text>
            </Command>
            <CopyToClipboard onCopy={() => setIsActive(true)} text={children}>
                <Copy>
                    <svg height="24px" viewBox="0 0 24 24" width="24px">
                        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"></path>
                    </svg>
                </Copy>
            </CopyToClipboard>
            {isActive && (
                <Popup>
                    <div>Copié !</div>
                    <Arrow />
                </Popup>
            )}
        </Container>
    )
}
