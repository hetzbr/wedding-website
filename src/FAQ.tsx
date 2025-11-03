import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FAQ.scss';

const baseURL = '/';

const FAQ: React.FC = () => {
  return (
    <Box className="faq">
      <div className="content">
        <div className="left-column">
          <Typography variant="h3">FAQ</Typography>
          <Typography variant="body1">
            Have questions? We've got answers! If you don't see your question here, please reach out to us and we'll be happy to answer it.
          </Typography>
        </div>

        <div className="right-column">
          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="faq1-content"
              id="faq1-header"
            >
              <Typography variant="h6">What should I wear?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                The dress code will be formal attire.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="faq2-content"
              id="faq2-header"
            >
              <Typography variant="h6">Can I bring a plus one?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Please check your invitation envelope - if it says "& Guest" then you have a plus one! If not, we've kept our celebration intimate with just our closest friends and family.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="faq3-content"
              id="faq3-header"
            >
              <Typography variant="h6">What about parking?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                There is limited parking access at the wedding venue. We recommend guests utilize the shuttles from the hotel. There is a parking lot affiliated with the hotel. It's a public garage, but the hotel will allow full in and out access. The Garage name is <Link href="https://www.google.com/maps?cid=11475315999530003985" target="_blank" className="faq-link">Centre Village Parking Ramp</Link>. We setup transportation on Saturday to the venue and back to the hotel. Expect the shuttle pickup time at 4:45pm.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="faq4-content"
              id="faq4-header"
            >
              <Typography variant="h6">When should I book my hotel room?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Please book your room before <strong>September 15th</strong> to ensure you get the group rate and one of our reserved blocks of rooms!
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="faq5-content"
              id="faq5-header"
            >
              <Typography variant="h6">What's the timeline for the day?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Please check the <Link href={`${baseURL}images/wedding-schedule.PNG`} target="_blank" className="faq-link">Saturday wedding schedule</Link>&nbsp;for details
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="faq6-content"
              id="faq6-header"
            >
              <Typography variant="h6">What's going on Friday?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                All are invited to join us for a welcome party at <Link href="https://www.sociablecider.com" target="_blank" className="faq-link">Sociable Cider Werks</Link>. We have the event space from 6pm-9pm. Dinner will be provided, cash bar is available to purchase drinks. While we won't have shuttles running, there's ample parking and convenient drop-off spots right at the venue. Dress code is "dressy casual"
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="faq7-content"
              id="faq7-header"
            >
              <Typography variant="h6">Do you have a registry?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Your presence is the greatest gift! However, if you'd like to contribute, we have a honeymoon fund set up. Check out the Registry section for more details.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="faq8-content"
              id="faq8-header"
            >
              <Typography variant="h6">What food will be served?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                We're very excited about the food we're having cooked by the Copper Hen. It will be family style, so we'll have a variety of dishes to choose from. Please checkout the <Link href={`${baseURL}images/wedding-menu.jpg`} target="_blank" className="faq-link">Wedding dinner menu</Link>&nbsp;for an overview of the dinner food. In addition, there will be appetizers at cocktail hour
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="faq9-content"
              id="faq9-header"
            >
              <Typography variant="h6">What if I have a dietary restriction?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                If you have a dietary restriction, please let us know so we can accommodate and plan accordingly.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </Box>
  );
};

export default FAQ;