import { useEffect, useState } from "react";
import { ProjectsProps } from "../../@types/projects.types";
import usePageTitle from "../../hook/usePageTitle";
import TemplateDefault from "../../templates/Default.template";
import * as CSS from './Project10.styles'
import Glass from "./Glass/Glass";
import ButtonDefault from "../../assets/css/ButtonDefault";

export default function Project10({ title }: ProjectsProps) {
  usePageTitle('Drink Water');

  const [goalDrinkWater, setGoalDrinkWater] = useState(2);
  const [amountGlass, setAmountGlass] = useState(8);
  const [amountWater, setAmountWater] = useState(goalDrinkWater * 1000 / amountGlass);
  const [howManyGlass, setHowManyGlass] = useState(new Array(amountGlass).fill(amountWater));
  const [remained, setRemained] = useState(0);

  const [glassActive, setGlassActive] = useState(-1);
  const [percentageNow, setPercentageNow] = useState(0);

  function handleClickGlass(index: number) {
    let newIndex = index === glassActive ? index - 1 : index;
    setGlassActive(newIndex);
  }

  useEffect(() => {
    setPercentageNow(100 / amountGlass * (glassActive + 1));
  }, [glassActive]);

  useEffect(() => {
    let amountBusy = ((glassActive + 1) * amountWater) / 1000;
    setRemained(goalDrinkWater - amountBusy);
  }, [percentageNow])

  function handleClickUpdate() {
    setAmountWater(goalDrinkWater * 1000 / amountGlass);
    setGlassActive(-1);
    setPercentageNow(0);
  }
  
  useEffect(() => {
    setHowManyGlass(new Array(amountGlass).fill(amountWater));
  }, [amountWater]);

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <h3>Goal: <span>{goalDrinkWater} Liters</span></h3>

      <Glass
        size="big"
        liters={{
          number: remained,
          unitOfMeasurement: 'L'
        }}
        percentage={percentageNow}
      />

      <CSS.Display>
        {
          howManyGlass.map((howMany, index) => (
            <Glass
              key={index}
              size="small"
              liters={{
                number: howMany,
                unitOfMeasurement: 'ml'
              }}
              onClick={() => handleClickGlass(index)}
              active={glassActive >= index}
            />
          ))
        }
      </CSS.Display>

      <CSS.Details>
        <summary>Click here to update data</summary>
        <div>
          <label htmlFor="goalDrinkWater">Goal Drink Water</label>
          <input
            type="number"
            name="goalDrinkWater"
            value={goalDrinkWater}
            onChange={e => setGoalDrinkWater(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="amountGlass">Amount Glass</label>

          <select
            name="amountGlass"
            id="amountGlass"
            value={amountGlass}
            onChange={e => setAmountGlass(Number(e.target.value))}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
          </select>
        </div>
        <div>
          <ButtonDefault onClick={handleClickUpdate}>
            Update
          </ButtonDefault>
        </div>
      </CSS.Details>
    </CSS.Wrapper>
  </TemplateDefault>
}