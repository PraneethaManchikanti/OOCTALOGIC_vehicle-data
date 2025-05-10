import { useEffect, useState } from "react";
import { getVehiclesByType } from "../api";
import { RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";

export default function Step4Model({ data, onNext, setData }) {
  const [models, setModels] = useState([]);

  useEffect(() => {
    getVehiclesByType(data.typeId).then((res) => setModels(res.data));
  }, [data.typeId]);

  return (
    <>
      <RadioGroup
        value={data.vehicleId || ""}
        onChange={(e) => setData({ ...data, vehicleId: e.target.value })}
      >
        {models.map((v) => (
          <FormControlLabel key={v.id} value={v.id} control={<Radio />} label={v.model} />
        ))}
      </RadioGroup>
      <Button onClick={onNext} disabled={!data.vehicleId} variant="contained" sx={{ mt: 2 }}>
        Next
      </Button>
    </>
  );
}
