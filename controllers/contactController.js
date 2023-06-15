//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all contatcs list"});
};

//@desc create new contacts
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    console.log("The request body is :", req.body);
    const {firstName, lastName, numberPhone, address} = req.body;
    if(!firstName || !lastName || !numberPhone || !address ) {
        res.status(400);
        throw new Error("All fields must not be empty!");
    }
    res.status(201).json({ message: "Create Contact"});
};

//@desc get a contacts
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}`});
};

//@desc delete contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(201).json({ message: `Delete contact for ${req.params.id}`});
};

//@desc update contacts
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(201).json({ message: `Update contact for ${req.params.id}`});
};

module.exports = { getContacts, createContact, deleteContact, getContact, updateContact };