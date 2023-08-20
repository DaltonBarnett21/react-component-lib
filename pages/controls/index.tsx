import CheckboxExamples from "@/examples/CheckboxExamples";
import DatePickerExample from "@/examples/DatePickerExample";
import InputExample from "@/examples/InputExample";
import MultiSelectExample from "@/examples/MultiSelectExample";
import TextAreaExample from "@/examples/TextAreaExample";
import SelectExample from "@/examples/selectExample";

const Controls = () => {
  return (
    <>
      <InputExample />
      <div className="m-10"></div>
      <MultiSelectExample />
      <div className="m-10"></div>
      <SelectExample />
      <div className="m-10"></div>
      <TextAreaExample />
      <div className="m-10"></div>
      <DatePickerExample />
      <div className="m-10"></div>
      <CheckboxExamples />
    </>
  );
};

export default Controls;
