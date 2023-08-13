import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

type Props = {
  name: string;
  disabled?: boolean;
  onChange?(name: string, days: number, hours: number, minutes: number): void;
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

export default function InputTimer(props: Props) {
  const [selectedDays, setSelectedDays] = useState(0);
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);

  const handleDaysChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDays(Number(event.target.value));
  };

  const handleHoursChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHours(Number(event.target.value));
  };

  const handleMinutesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMinutes(Number(event.target.value));
  };

  useEffect(() => {
    if (props.onChange)
      props.onChange(props.name, selectedDays, selectedHours, selectedMinutes);
  }, [props, selectedDays, selectedHours, selectedMinutes]);

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
    </Wrapper>
  );
}
