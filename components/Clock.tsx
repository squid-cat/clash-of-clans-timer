import { styled } from 'styled-components'

type Props = {
  now: Date
}

export default function Clock(props: Props) {

  const DisplayTime = styled.h2`
    font-weight: normal;
  `;

  const strYear = props.now.getFullYear().toString()
  const strMonth = (props.now.getMonth() + 1).toString().padStart(2, "0")
  const strDay = props.now.getDate().toString().padStart(2, "0")

  const strHours = props.now.getHours().toString().padStart(2, "0")
  const strMinutes = props.now.getMinutes().toString().padStart(2, "0")
  const strSeconds = props.now.getSeconds().toString().padStart(2, "0")

  return <DisplayTime>{strYear}/{strMonth}/{strDay} {strHours}:{strMinutes}:{strSeconds}</DisplayTime>
}