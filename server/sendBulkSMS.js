import AfricasTalking from "africastalking";

const africastalking = AfricasTalking({
  apiKey: "atsk_614b8ed0bab0bc7a046554223c4e6bf66388976aaecfa25d343e6837d0b5ae8600501ed4",
  username: "sandbox",
});

const sms = africastalking.SMS;

// Numbers to receive the SMS
const simulatorNumbers = ["+2349168679607", "+2349122073199"];

// ✅ Simplified: only one parameter (text from your textbox)
async function sendBulkSMS(textMessage) {
  try {
    const result = await sms.send({
      to: simulatorNumbers,
      message: textMessage, // direct message from textbox
      from: "SureLife Insurance",
    });

    console.log("Emergency alert sent:", result);
    return result;
  } catch (error) {
    console.error("Error sending bulk SMS:", error);
    throw error;
  }
}

export default sendBulkSMS;
