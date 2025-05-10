import { useState } from "react";
import { Button, TextField } from "@mui/material";

export default function Step5DateRange({ data, onSubmit, setData }) {
  const [startDate, setStart] = useState("");
  const [endDate, setEnd] = useState("");

  const handleSubmit = () => {
    setData({ ...data, startDate, endDate });
    onSubmit();
  };

  return (
    <>
      <TextField
        type="date"
        label="Start Date"
        InputLabelProps={{ shrink: true }}
        value={startDate}
        onChange={(e) => setStart(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        type="date"
        label="End Date"
        InputLabelProps={{ shrink: true }}
        value={endDate}
        onChange={(e) => setEnd(e.target.value)}
        fullWidth
      />
      <Button onClick={handleSubmit} disabled={!startDate || !endDate} variant="contained" sx={{ mt: 2 }}>
        Submit
      </Button>
    </>
  );
}
