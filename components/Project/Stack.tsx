import styled from 'styled-components'
import { StackItem } from 'types/Project.type'

interface StackProps {
    stack: StackItem[]
}

const Ul = styled.ul`
    display: flex;
    justify-content: right;
    width: 100%;
    font-family: 'catamaran';
`

const Li = styled.li`
    margin-left: 5px;
    padding: 0 5px;
    border-radius: 5px;
    background-color: ${props => props.color};
    border: 1px solid rgba(0, 0, 0, 0);
    font-size: 1.1rem;
    font-weight: bolder;
    color: rgb(15, 39, 68);

    /* &:hover {
    cursor: pointer;
    border: 1px solid white;
  } */
`

export default function Stack({ stack }: StackProps) {
    return (
        <Ul>
            {stack.map((s, i) => (
                <Li key={i} color={s.tech_id.color}>
                    {s.tech_id.name}
                </Li>
            ))}
        </Ul>
    )
}
