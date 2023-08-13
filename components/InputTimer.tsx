import React, { useState } from "react";
import { styled } from "styled-components";

type Props = {
  id: number;
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
    <Wrapper id={props.id.toString()}>
      <SelectElement value={selectedDays} onChange={handleDaysChange}>
        {Array.from({ length: 30 }, (_, index) => (
          <option key={index} value={index}>
            {index}
          </option>
        ))}
      </SelectElement>
      <Text>日</Text>

      <SelectElement value={selectedHours} onChange={handleHoursChange}>
        {Array.from({ length: 24 }, (_, index) => (
          <option key={index} value={index}>
            {index}
          </option>
        ))}
      </SelectElement>
      <Text>時</Text>

      <SelectElement value={selectedMinutes} onChange={handleMinutesChange}>
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
