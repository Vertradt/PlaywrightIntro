# Test Automation training from jaktestowac.pl

This is a Test Automation project based on `Playwright` and `TypeScript`.  
The tested page is a simple demo of a bank.

- [Links](#links)
- [Commands](#commands)
- [Visual Studio Code](#visual-studio-code)
- [Extensions](#extensions)
- [Playwright](#playwright)
- [Other](#other)
- [Simple Page Object Model](#simple-page-object-model)

## Links

- course https://jaktestowac.pl/course/playwright-wprowadzenie/
- test site https://demo-bank.vercel.app/  
  if link is broken check https://jaktestowac.pl/lesson/pw1s01l01/
- code repository https://github.com/jaktestowac/playwright_automatyzacja_wprowadzenie

## Commands

- check `NodeJS` version  
  `node -v`
- new project with Playwright  
  `npm init playwright@latest`
- record tests for given site  
  `npx playwright codegen https://demo-bank.vercel.app/`
- run tests without browser GUI  
  `npx playwright test`
- run tests with browser GUI  
  `npx playwright test --headed`
- view report  
  `npx playwright show-report`
- run Trace Viewer on zip file  
  `npx playwright show-trace trace.zip`
- run tests form exact file  
  `npx playwright test tests/login.spec.ts`
# PlaywrightIntro
