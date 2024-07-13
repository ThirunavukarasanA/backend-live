const EnquiryForm = require("../Model/Form");
const date = require("../Utils/date");
exports.createEnquiry = async (req, res) => {
  try {
    await EnquiryForm.find()
      .then(async (result) => {
        EnquiryForm.find({})
          .sort({ _id: 1 })
          .limit(1)
          .then(async () => {
            await EnquiryForm.create({
              name: req.body.name,
              email: req.body.email,
              subject: req.body.subject,
              message: req.body.message,
              createat: date.getLeadCurrentDateandTime(),
            })
              .then(async (data) => {
                console.log("Form Submitted Sucessfully");
                await res.status(200).send("Form Submitted Sucessfully");
              })
              .catch(async (error) => {
                console.log(error);
                console.log("Form Not Submmited");
                await res.status(404).send("Form Not Submmited");
              });
          })
          .catch(() => {
            console.log("something worng");
            res.status(404).send('Something Went Wrong');
          });
      })
      .catch(() => {
        console.log("please try again later");
        res.status(500).send('Internal Server Error');
      });
  } catch (error) {
    console.log("Error on incomming data");
  }
};
