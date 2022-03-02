# Extract Email Domain Name
:unicorn: Simple Utility to Extract the domain from an email address.

![Build](https://github.com/mcnaveen/extract-email-domain/workflows/Build/badge.svg)

![Extract Email Domain Name](./image/cover.png)

### :package: Requirements
- Node.js 12X LTS or 14X LTS 📦

### :sparkles: Installation

- Install the NPM Package with the below command:
```
npm install extract-email-domain --save
``` 

 (or)

- Install with Yarn:
```
yarn add extract-email-domain
```

### :pen: Usage

- Import the module in your project:

```javascript
// Commonjs Import
var extractDomain = require("extract-email-domain");

// or ES6 import
import extractDomain from "extract-email-domain";
```

### :bulb: Example

- Import the module in your project
- Pass the email address to the function

```javascript
var extractDomain = require("extract-email-domain");


myEmail = "me@mcnaveen.com";
const getEmail = extractDomain(myEmail);
console.log(getEmail);

```

### :ballot_box_with_check: Example Output
```
mcnaveen.com
```
---


#### :green_heart: Message

I hope you find this useful. If you have any questions, please create an issue.