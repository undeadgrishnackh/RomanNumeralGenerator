# RomanNumeralGenerator
[![build](https://github.com/undeadgrishnackh/RomanNumeralGenerator/workflows/CI%20Build%20gate./badge.svg)](https://github.com/undeadgrishnackh/RomanNumeralGenerator/actions?query=workflow%3A%22CI+Build+gate.%22)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=undeadgrishnackh_RomanNumeralGenerator&metric=alert_status)](https://sonarcloud.io/dashboard?id=undeadgrishnackh_RomanNumeralGenerator)
[![codecov](https://codecov.io/gh/undeadgrishnackh/RomanNumeralGenerator/branch/main/graph/badge.svg)](https://codecov.io/gh/undeadgrishnackh/RomanNumeralGenerator)
[![Known Vulnerabilities](https://snyk.io/test/github/undeadgrishnackh/RomanNumeralGenerator/badge.svg)](https://snyk.io/test/github/undeadgrishnackh/RomanNumeralGenerator/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c8e046ebad254148950f6fea8f671594)](https://app.codacy.com/gh/undeadgrishnackh/RomanNumeralGenerator/dashboard)
[![BCH compliance](https://bettercodehub.com/edge/badge/undeadgrishnackh/RomanNumeralGenerator?branch=master)](https://bettercodehub.com/)

Roman Numbers Generator Kata

Pomodoro I 🍅
- project jump-start
- guardians
 - ✅ reject not numbers
 - ✅ reject negative
 - ✅ reject > 3999
- ✅ 1 === I

Pomodoro II 🍅
- number splitter: 
 - ✅ units, 
 - ✅ tens, 
 - ✅ hundreds, 

Pomodoro III 🍅
- ✅ E2E tests
- number splitter: 
 - ✅ thousands

🤔 TODO: 
the switch to convert the single elements in ROMAN letters is too complex (17 cyclomatic - instead of something below 5). The conversion from switch to ifs is a bit more readable but still too complex and ugly (cx 15). Converting it into a map and actions should be a nice exploratory phase.