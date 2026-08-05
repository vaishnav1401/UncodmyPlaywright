//it will providee by developer

import { test, expect } from '@playwright/test';

interface RegistrationData {
  firstname: string;
  lastname: string;
  city: string;
  address: string;
  state: string;
  zipcode: string;
  phonenumber: string;
  ssn: string;
  username: string;
  password: string;
  confirmpassword: string;
}

interface CustomFixtures {
  testdataforregistration: RegistrationData;
}

export const customtest = test.extend<CustomFixtures>({
  testdataforregistration: async ({}, use) => {
    await use({
      firstname: "Testers",
      lastname: "Talk",
      city: "San Jose",
      address: "Address1",
      state: "California",
      zipcode: "12345",
      phonenumber: "1234567898",
      ssn: "1234512345",
      username: "Testers",
      password: "1234567891",
      confirmpassword: "1234567891"
    });
  }
});

export { expect };