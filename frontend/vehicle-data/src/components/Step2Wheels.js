import { RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";

export default function Step2Wheels({ data, onNext, setData }) {
  return (
    <>
      <RadioGroup
        value={data.wheels || ""}
        onChange={(e) => setData({ ...data, wheels: e.target.value })}
      >
        <FormControlLabel value="2" control={<Radio />} label="2 Wheels" />
        <FormControlLabel value="4" control={<Radio />} label="4 Wheels" />
      </RadioGroup>
      <Button onClick={onNext} disabled={!data.wheels} variant="contained" sx={{ mt: 2 }}>
        Next
      </Button>
    </>
  );
}
