import { styled } from 'styled-components'

type Props = {
  now: Date
}

export default function Clock(props: Props) {

  const DisplayTime = styled.h2``;

  const strHours = props.now.getHours().toString().padStart(2, "0")
  const strMinutes = props.now.getMinutes().toString().padStart(2, "0")
  const strSeconds = props.now.getSeconds().toString().padStart(2, "0")

  return (<>
    <DisplayTime>{strHours}:{strMinutes}:{strSeconds}</DisplayTime>
  </>)
}