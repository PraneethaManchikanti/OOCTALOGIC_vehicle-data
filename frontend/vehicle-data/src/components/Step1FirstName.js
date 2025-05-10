import { TextField, Button } from "@mui/material";

export default function Step1FirstName({ data, onNext, setData }) {
  const handleChange = (e) => {
    setData({ ...data, firstName: e.target.value });
  };

  return (
    <>
      <TextField label="First Name" value={data.firstName || ""} onChange={handleChange} fullWidth />
      <Button onClick={onNext} disabled={!data.firstName} variant="contained" sx={{ mt: 2 }}>
        Next
      </Button>
    </>
  );
}
