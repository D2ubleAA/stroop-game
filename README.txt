Small JS game based on the Stroop Effect. 

The considered architecture is based on pure JS (ES6) as programming language, SCSS as styles preprocessing, Bootstrap4, Webpack as module bundler, and a coupage of Selenium-standalone and Nightwatch for behavior testing.


Includes: 

- Human player mode
- AI (Robot) player mode
- Countdown bar
- Variable score based on time spent to answer
- Score message on final stage
- Tests


1. INSTALL

	1.1 - Unzip the compressed file and open your console-of-choice on the project's main folder
	1.2 - Run "npm install" to get all the project's dependancies installed

2. BUILD

	2.1 - Run "npm run build" to generate an obfuscated and minimized bundle.js file for production purposes (approx 15kb)

3. RUN

	3.1 - Run "npm run start" for starting the project on localhost (localhost:9000 by default). It also opens a browser window and shows changes made to the project files on real time
	This step doesn't require a previous BUILD

4. TEST 

	4.1 - Run "selenium-standalone start"
	4.2 - In a different console, run "nightwatch --config ./nightwatch.json"
	This section may require to install selenium-standalone globally (run "npm install selenium-standalone -g") and run "selenium-standalone install"

5. ENJOY :)
	