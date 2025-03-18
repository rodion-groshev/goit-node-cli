## Homework. Topic 2. Creating console application

#### Step 1

Create a repository named goit-node-cli, and then commit and initialize the project using the npm init command. Install the commander package as a project dependency
Place the files from the src folder in the project root


#### Step 2

In the contacts.js file, import the fs modules (in the version that works with promises - fs/promises) and path to work with the file system.
Create the variable contactsPath and write the path to the contacts.json file into it. Use the methods of the path module to compose the path.
Add asynchronous functions to work with the collection of contacts. In the functions, use the fs module and its readFile() and writeFile() methods. The corresponding functions should return the required data using the return statement. The output to the console in the written functions should not be performed.
Export the created functions.

#### Step 3

Import the functions from the contacts.js file into the index.js file.
Then use the ready-made invokeAction() function, which receives the type of action to be performed and the necessary arguments. The function should call the corresponding method from the contacts.js file, passing it the necessary arguments. The result of the called function should be displayed in the console.


#### Step 4

Run the commands in the terminal and make sure that the code works properly.

For example:

- **List all contacts:**
  ```
  node src/index.cjs -a list
  ```
- **Get a contact by ID:**
  ```
  node src/index.cjs -a get -i <contactId>
  ```
- **Add a new contact:**
  ```
  node src/index.cjs -a add -n "John Doe" -e "john@example.com" -p "1234567890"
  ```
- **Remove a contact:**
  ```
  node src/index.cjs -a remove -i <contactId>
  ```

---