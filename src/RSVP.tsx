import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  Paper,
  Grid,
  Divider,
  SelectChangeEvent,
  CircularProgress
} from '@mui/material';
import './RSVP.scss';

interface RSVPFormData {
  name: string;
  rsvp: string;
  dietaryRestrictions: string;
  message: string;
  hasPlusOne: boolean;
  plusOneName: string;
  plusOneDietaryRestrictions: string;
}

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    rsvp: '',
    dietaryRestrictions: '',
    message: '',
    hasPlusOne: false,
    plusOneName: '',
    plusOneDietaryRestrictions: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: keyof RSVPFormData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value as string;
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSelectChange = (field: keyof RSVPFormData) => (
    event: SelectChangeEvent<string>
  ) => {
    const value = event.target.value as string;
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      hasPlusOne: event.target.checked
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formspreeData = new FormData();
      formspreeData.append('name', formData.name);
      formspreeData.append('rsvp', formData.rsvp);
      formspreeData.append('dietary_restrictions', formData.dietaryRestrictions);
      formspreeData.append('message', formData.message);
      formspreeData.append('has_plus_one', formData.hasPlusOne.toString());

      if (formData.hasPlusOne) {
        formspreeData.append('plus_one_name', formData.plusOneName);
        formspreeData.append('plus_one_dietary_restrictions', formData.plusOneDietaryRestrictions);
      }

      // const formspreeResponse = await fetch('https://formspree.io/f/xdkdzkbk', {
      const formspreeResponse = await fetch('https://formspree.io/f/xovlwvzk', {
        method: 'POST',
        body: formspreeData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (formspreeResponse.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          rsvp: '',
          dietaryRestrictions: '',
          message: '',
          hasPlusOne: false,
          plusOneName: '',
          plusOneDietaryRestrictions: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box className="rsvp">
      <div className="content">
      {submitStatus !== 'success' && (
        <div className="left-column">
          <Typography variant="h3">RSVP</Typography>
          <Typography variant="body1">
            Please let us know if you can join us for our special day!
          </Typography>
        </div>
      )}
        <div className="right-column">
          {submitStatus === 'success' ? (
            <Paper elevation={3} sx={{
              padding: { xs: 2, md: 3 },
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              margin: { xs: 0, md: 0 },
              textAlign: 'center'
            }}>
              <Typography variant="h6" sx={{ color: '#122a45', marginBottom: 1 }}>
                Thank you for your RSVP! 🥂
              </Typography>
            </Paper>
          ) : (
            <Paper elevation={3} sx={{
              padding: { xs: 2, md: 3 },
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              margin: { xs: 0, md: 0 }
            }}>
              <form onSubmit={handleSubmit}>
              <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={{ marginBottom: 2, color: '#122a45' }}>
                    Guest Information
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth required>
                    <InputLabel>RSVP</InputLabel>
                    <Select
                      value={formData.rsvp}
                      label="RSVP"
                      onChange={handleSelectChange('rsvp')}
                    >
                      <MenuItem value="attending">Will Attend</MenuItem>
                      <MenuItem value="not-attending">Cannot Attend</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Dietary Restrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleInputChange('dietaryRestrictions')}
                    placeholder="e.g., vegetarian, gluten-free, allergies"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message (Optional)"
                    value={formData.message}
                    onChange={handleInputChange('message')}
                    multiline
                    rows={3}
                    placeholder="Any additional notes or well wishes"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.hasPlusOne}
                        onChange={handleCheckboxChange}
                        color="primary"
                      />
                    }
                    label="I will be bringing a guest (+1)"
                  />
                  <Typography variant="caption" sx={{
                    display: 'block',
                    marginTop: 0,
                    marginLeft: 5,
                    color: '#666',
                    fontStyle: 'italic',
                    fontSize: '0.8rem'
                  }}>
                    ℹ️ A plus-one is indicated by "& Guest" on your invitation envelope
                  </Typography>
                </Grid>
                {formData.hasPlusOne && (
                  <>
                    <Grid item xs={12} className="plus-one-section">
                      <Divider className="guest-divider" />
                      <Typography variant="h6" className="guest-info-heading">
                        Guest Information
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Guest Name"
                        value={formData.plusOneName}
                        onChange={handleInputChange('plusOneName')}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Guest Dietary Restrictions"
                        value={formData.plusOneDietaryRestrictions}
                        onChange={handleInputChange('plusOneDietaryRestrictions')}
                        placeholder="e.g., vegetarian, gluten-free, allergies"
                        variant="outlined"
                      />
                    </Grid>
                  </>
                )}
                <Grid item xs={12}>
                 <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    disabled={
                      isSubmitting ||
                      !formData.name ||
                      !formData.rsvp ||
                      (formData.hasPlusOne && !formData.plusOneName)
                    }
                    sx={{
                      backgroundColor: '#122a45',
                      '&:hover': {
                        backgroundColor: '#1a3a5a'
                      },
                      marginTop: 2
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <CircularProgress size={20} sx={{ color: 'white', mr: 1 }} />
                        Sending your RSVP...
                      </>
                    ) : (
                      'Submit RSVP'
                    )}
                  </Button>
                </Grid>
                {submitStatus === 'error' && (
                  <Grid item xs={12}>
                    <Typography variant="body1" sx={{ color: 'red', textAlign: 'center' }}>
                      There was an error submitting your RSVP. Please try again and if it continues to fail reach out to Ben and Charlotte directly.
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </form>
            </Paper>
          )}
        </div>
      </div>
    </Box>
  );
};

export default RSVP;