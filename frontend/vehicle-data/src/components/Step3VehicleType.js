import { useEffect, useState } from "react";
import { getVehicleTypes } from "../api";
import { RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";

export default function Step3VehicleType({ data, onNext, setData }) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getVehicleTypes(data.wheels).then((res) => setTypes(res.data));
  }, [data.wheels]);

  return (
    <>
      <RadioGroup
        value={data.typeId || ""}
        onChange={(e) => setData({ ...data, typeId: e.target.value })}
      >
        {types.map((type) => (
          <FormControlLabel key={type.id} value={type.id} control={<Radio />} label={type.name} />
        ))}
      </RadioGroup>
      <Button onClick={onNext} disabled={!data.typeId} variant="contained" sx={{ mt: 2 }}>
        Next
      </Button>
    </>
  );
}
