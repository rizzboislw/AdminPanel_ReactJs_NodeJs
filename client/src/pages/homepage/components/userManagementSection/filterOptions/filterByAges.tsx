import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverCloseButton,
  Button,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
} from "@chakra-ui/react";
import { useFilter } from "../../../hooks/useDataFetch";

function AgeRangeSlider() {
  const { age, handleAgeChange } = useFilter();

  const handleSliderChange = (values: number[]) => {
    handleAgeChange(values);
  };

  return (
    <Box>
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
    <Popover isLazy placement="bottom-start">
      <PopoverTrigger>
        <Button w="full" bgColor="#374151">
          <span className="text-sm text-white ">Age</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton />
        <PopoverBody>
          <AgeRangeSlider />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default FilterByAges;
