# Testing the Project

This is how we test the project. We use JEST for unit testing.

## Setting Up JEST for Next.js

1. **Install JEST and its dependencies**:
   Run the following command to add JEST, along with testing utilities for React:

   ```bash
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom
   ```

2. **Configure JEST**:
   Create a `jest.config.js` file in the root of your project with the following configuration:

   ```javascript
   module.exports = {
     testEnvironment: 'jsdom',
     moduleNameMapper: {
       '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
     },
     setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
   };
   ```

3. **Set up the testing environment**:
   Create a `jest.setup.js` file in the root of your project with the following content to include additional matchers:

   ```javascript
   import '@testing-library/jest-dom/extend-expect';
   ```

4. **Add test scripts**:
   Update your `package.json` file to include a test script:

   ```json
   "scripts": {
     "test": "jest"
   }
   ```

5. **Create a sample test**:
   In your `__tests__` folder (create it in the root if it doesn't exist), create a test file, e.g., `example.test.js`:

   ```javascript
   import { render, screen } from '@testing-library/react';
   import Home from '../pages/index'; // Adjust the import based on your file structure

   test('renders the homepage', () => {
     render(<Home />);
     const linkElement = screen.getByText(/welcome to clark-sample/i);
     expect(linkElement).toBeInTheDocument();
   });
   ```

6. **Run your tests**:
   Execute your tests by running:

   ```bash
   npm test
   ```

Now you have a fully set up testing environment for your Next.js application using JEST!