import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
} from "@chakra-ui/react";
import { useFilter } from "../../../hooks/useDataFetch";

function AgeRangeSlider() {
  //access the hook and state to send and receive the value
  const { age, handleAgeChange } = useFilter();

  //handle the value when changed
  const handleSliderChange = (values: number[]) => {
    handleAgeChange(values);
  };

  return (
    <Box w="full">
      <Box mb={2}>
        <span className="font-semibold">
          Selected Age Range: {age[0]} - {age[1]}
        </span>
      </Box>
      <RangeSlider
        defaultValue={age}
        min={0}
        max={100}
        step={1}
        onChange={handleSliderChange}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack bg="#43a3f1" />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} bgColor="#43a3f1" />
        <RangeSliderThumb index={1} bgColor="#43a3f1" />
      </RangeSlider>
    </Box>
  );
}

function FilterByAges() {
  return (
    <Popover isLazy placement="bottom">
      <PopoverTrigger>
        <Button w="full" bgColor="#055894">
          <span className="text-sm text-white ">Age</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent w="full">
        <PopoverBody w="full">
          <AgeRangeSlider />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default FilterByAges;
