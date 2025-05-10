import { TextField, Button } from "@mui/material";

export default function StepLastName({ data, onNext, setData }) {
  const handleChange = (e) => {
    setData({ ...data, lastName: e.target.value });
  };

  return (
    <>
      <TextField label="Last Name" value={data.lastName || ""} onChange={handleChange} fullWidth />
      <Button onClick={onNext} disabled={!data.lastName} variant="contained" sx={{ mt: 2 }}>
        Next
      </Button>
    </>
  );
}
