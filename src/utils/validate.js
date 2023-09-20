export const CheckValidData = (name,email,password) => {

const namevalid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
const isemailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
const ispasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

if(!namevalid) return "Your Name is not valid";
if(!isemailvalid) return "Email ID is not valid";
if(!ispasswordvalid) return "Password is not valid";

return null;

};