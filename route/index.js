//crud Api
import express from 'express';
const router = express.Router();
const Contact = requaire("../Model/Contact")
router.post('/contact', async (req, res) => {
  try {
    const newContact = new Contact(req, body);
    await newContact.save()
      .then((saveContact)=> {
        console.log(savedContact);
        res.status(201).json({msg:"Contact succecfully saved"})
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({msg:"Unable to save new contact"})
  }
})