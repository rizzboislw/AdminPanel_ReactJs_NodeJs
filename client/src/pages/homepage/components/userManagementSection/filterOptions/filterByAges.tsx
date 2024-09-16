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
import { useState } from "react";

function AgeRangeSlider() {
  const [ageRange, setAgeRange] = useState([0, 100]);

  const handleSliderChange = (values: number[]) => {
    setAgeRange(values);
  };

  return (
    <Box>
      <Box mb={2}>
        <span className="font-semibold">
          Selected Age Range: {ageRange[0]} - {ageRange[1]}
        </span>
      </Box>
      <RangeSlider
        defaultValue={[0, 100]}
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
