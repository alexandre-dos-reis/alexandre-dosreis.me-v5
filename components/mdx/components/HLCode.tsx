import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'
import styled from 'styled-components'

const Pre = styled.pre`
    background-color: black;
    margin-left: -30px;
    margin-right: -30px;
    border-radius: 10px;
    padding: 30px;
    overflow-y: auto;
    font-size: 1rem;
    font-family: monospace;

    div {
        width: 100px;
    }
`

const Container = styled.div`
    position: relative;
`

const Lang = styled.div`
    position: absolute;
    z-index: 10;
    top: 0;
    right: -30px;
    border: 1px solid white;
    border-right: none;
    border-top: none;
    border: none;
    padding: 10px 20px;
    text-transform: uppercase;
    font-family: monospace;
    font-size: 1.1rem;
    color: grey;
`

interface HLCodeProps {
    children: React.ReactNode
    lang: Language
    showLang: boolean
}

export default function HLCode({
    children,
    lang,
    showLang = false,
}: HLCodeProps) {
    return (
        <Highlight
            {...defaultProps}
            theme={theme}
            code={(children as string).trim()}
            language={lang}
        >
            {({ className, tokens, getLineProps, getTokenProps }) => (
                <Container>
                    {showLang && <Lang>{lang}</Lang>}
                    <Pre className={className}>
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </Pre>
                </Container>
            )}
        </Highlight>
    )
}
