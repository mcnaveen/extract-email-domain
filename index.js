function extractDomain(email) {
  const domain = email.includes("@") && email.split("@").pop();
  return domain;
}
module.exports = extractDomain;