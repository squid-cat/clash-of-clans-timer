import { styled } from "styled-components";

type Props = {
  name: string;
  disabled?: boolean;
  onClickAccept?(name: string): void;
  onClickReset?(name: string): void;
};

const ButtonOk = styled.button``;
const ButtonReset = styled.button``;

export default function TimerButton(props: Props) {
  return (
    <>
      {!props.disabled ? (
        <ButtonOk
          onClick={() => {
            if (props.onClickAccept) props.onClickAccept(props.name);
          }}
        >
          設定
        </ButtonOk>
      ) : (
        <ButtonReset
          onClick={() => {
            if (props.onClickReset) props.onClickReset(props.name);
          }}
        >
          リセット
        </ButtonReset>
      )}
    </>
  );
}
