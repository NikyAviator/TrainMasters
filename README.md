# TrainMasters

Frontend (React), Backend (Nodejs & Express) and DB (TBD) for our school project, datamodeling for a Trainticket booking system.
We also have UML & ER - diagrams.

### To Start a react project modeled for our needs:

1. Create an empty folder and add it to VSC OR git clone your project to a folder on your computer.
2. Open a terminal (being inside your git cloned or created folder)
3. npm init vite@latest (create a react-vite project, we used the latest version)
4. Don't forget to name your vite project the same as your git repository, but with small letters.
5. npm install npm@latest (for latest version)
6. npm install react-router-dom (@6 to get version 6 etc)
7. npm install express (for our local server)
8. OPTIONAL: npm install react-easier (we do not use it in this project)
9. check that .gitingore file contains node_modules

# PS! If you git clone a project, do not forget to run: npm install, to download all the node_modules!

# Basic project done!

# Cleanup:

1. In the src folder: remove everything except main.jsx
2. index.html : remove fav icon (<link href="favicon.svg">)
3. In main.jsx : remove import of './index.css'

# Add additional files:

1. Create: App.jsx and write:

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function App(){
return
<Router>

<header><Header /></header>
<main>
<Routes>  
 <Route path="/" element={<StartPage />} />
</Routes>  
 </main>
<footer><Footer /></footer>
</Router>
}

2. Create the files (if needed in your project) in the src folder: Header.jsx, Footer.jsx, StartPage.jsx

# Adding bootstrap:

1. npm install bootstrap (https://getbootstrap.com/)
2. npm install react-bootstrap
3. npm install sass (OPTIONAL)
4. npm install reactstrap (OPTIONAL) (https://reactstrap.github.io/?path=/story/home-installation--page)
5. npm install mdb-ui-kit (OPTIONAL) (https://mdbootstrap.com/docs/standard/getting-started/installation/)

# Sidenote

Correct way(!) of importing bootstrap components:

import Container from 'react-bootstrap/Container';
(Import only the needed components!)

# Configure boostrap and additional files:

1. Create 'public' folder (same level as src folder) (here all our pictures, json, movies etc should be)

### WE HAVE NOT IMPLEMENTED THIS IN OUR PROJECT YET! REST IS JUST A GUIDE!

2. (OPTIONAL, FOR SASS) Create 'scss' folder in src folder (FOR SASS).
3. (OPTIONAL, FOR SASS) Create 'main.scss' in scss folder. Import that file in App(): import './scss/main.scss';
4. (OPTIONAL, FOR SASS) 'main.scss' is the "connector"-file, where all the imports have to be. We start by importing bootstrap.
5. (OPTIONAL, FOR SASS) In 'main.scss':

// Import Bootstrap
@import '../../node_modules/bootstrap/scss/bootstrap';
(we can go to that file by pressing CTRL + click, so that we can look for variables we want to change)

# If we override bootstrap variables:

# NOTE! If we override any bootstrap variables, they need to be written and top! At the end

1. Bootstrap overrided variables
   $body-bg: black;

2. Import our bootstrap!
   @import '../../node_modules/bootstrap/scss/bootstrap';

3. Import our own scss (could be several files)
   @import './sticky-footer';
   @import './body';

### STICKY FOOTER SOLUTION ### (OPTIONAL)

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Footer() {
return <Container fluid className="bg-primary text-white mt-5"> <= man kan alltid använda bootstraps classes genom className="bootstrap dokumentation"
<Row className="py-3">

<Col className="text-center">
&copy; 2022 TrainMasters
</Col>
</Row>
</Container>
}

# Adding the files needed for the sticky footer:

1. Create a new file in scss folder: sticky-footer.scss
2. In that file add:

#root { <- ID ROOT because our page is mounted there!
display: flex;
min-height: 100vh;
flex-direction: column;
}
#root main {
flex: 1;
}

3. Import the sticky-footer.scss file in our main.scss file.
