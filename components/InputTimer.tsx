import React, { useState } from "react";
import { styled } from "styled-components";

type Props = {
  name: string;
  disabled?: boolean;
  onChangeTimer?(
    name: string,
    days: string,
    hours: string,
    minutes: string,
  ): void;
  onResetTimer?(name: string): void;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

const Text = styled.p``;

const SelectElement = styled.select`
  font-size: 20px;
`;

const ButtonOk = styled.button``;
const ButtonReset = styled.button``;

export default function InputTimer(props: Props) {
  const [selectedDays, setSelectedDays] = useState("");
  const [selectedHours, setSelectedHours] = useState("");
  const [selectedMinutes, setSelectedMinutes] = useState("");

  const handleDaysChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDays(event.target.value);
  };

  const handleHoursChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHours(event.target.value);
  };

  const handleMinutesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMinutes(event.target.value);
  };

  return (
    <Wrapper id={props.name}>
      <SelectElement
        value={selectedDays}
        onChange={handleDaysChange}
        disabled={props.disabled}
      >
        {Array.from({ length: 30 }, (_, index) => (
          <option key={index} value={index}>
            {index}
          </option>
        ))}
      </SelectElement>
      <Text>日</Text>

      <SelectElement
        value={selectedHours}
        onChange={handleHoursChange}
        disabled={props.disabled}
      >
        {Array.from({ length: 24 }, (_, index) => (
          <option key={index} value={index}>
            {index}
          </option>
        ))}
      </SelectElement>
      <Text>時</Text>

      <SelectElement
        value={selectedMinutes}
        onChange={handleMinutesChange}
        disabled={props.disabled}
      >
        {Array.from({ length: 12 }, (_, index) => (
          <option key={index * 5} value={index * 5}>
            {index * 5}
          </option>
        ))}
      </SelectElement>
      <Text>分</Text>

      {!props.disabled ? (
        <ButtonOk
          onClick={() => {
            if (props.onChangeTimer)
              props.onChangeTimer(
                props.name,
                selectedDays,
                selectedHours,
                selectedDays,
              );
          }}
        >
          設定
        </ButtonOk>
      ) : (
        <ButtonReset
          onClick={() => {
            if (props.onResetTimer) props.onResetTimer(props.name);
          }}
        >
          リセット
        </ButtonReset>
      )}
    </Wrapper>
  );
}
