import React from "react";
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Do I need an appointment before visiting Supamandhiraa Homoeo Care Clinic-Dr.Vaishnavi.P?",
    answer: "Yes, it is recommended to book an appointment before visiting Supamandhiraa Homoeo Care Clinic-Dr.Vaishnavi.P. You can scroll up to get the contact number."
  },
  {
    question: "Are there special clinics for skin infections?",
    answer: "Yes, there are skin care clinics with certified dermatologists who treat skin infections and other skin-related issues."
  },
  {
    question: "Is there a blood test facility available at Supamandhiraa Homoeo Care Clinic-Dr.Vaishnavi.P?",
    answer: "While some clinics offer blood testing facilities, it is best to confirm the same with Supamandhiraa Homoeo Care Clinic-Dr.Vaishnavi.P."
  },
  {
    question: "Does Homeopathy cure all diseases permanently?",
    answer: "Yes, definitely! Homeopathy is best for all ailments/diseases. It treats diseases from their root cause without side effects."
  },
  {
    question: "Can Homeopathic medicine be taken along with allopathic medicines?",
    answer: "Yes, homeopathic medicines can be taken with allopathic medicines. A time gap of 30 minutes is recommended between them."
  },
  {
    question: "Is Homeopathy effective for chronic skin conditions like psoriasis or eczema?",
    answer: "Yes, homeopathic medicines are highly effective in treating chronic skin diseases such as psoriasis, ringworm, eczema, herpes, warts, and urticaria."
  },
  {
    question: "Do homeopathic medicines have any side effects?",
    answer: "No, homeopathic medicines are completely safe, gentle, and free from any side effects."
  },
  {
    question: "Can Homeopathy help remove kidney stones?",
    answer: "Yes, kidney stones up to 20mm can be dissolved with homeopathic medicines. The stones break into small pieces and pass through urine without pain."
  }
];

const FAQSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Animation on load
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Container maxWidth="md" sx={{ py: 5 }}>
        <Typography variant="h4" gutterBottom align="center" fontWeight="bold" sx={{ mb: 3 }}>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Accordion sx={{ my: 1, boxShadow: 2, borderRadius: "8px", overflow: "hidden" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontWeight: "bold", bgcolor: "#f5f5f5" }}>
                {faq.question}
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Container>
    </motion.div>
  );
};

export default FAQSection;
