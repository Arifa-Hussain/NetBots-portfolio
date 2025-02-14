import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import accordionData from '../data/Accordion.json'; // Import JSON file
import './Accordion.css'; // Import CSS for styling

const Accordion1 = () => {
  const renderDescription = (id: number) => {
    if (id === 1) {
      return (
        <>
          <p>
            <strong>1. MongoDB (Database):</strong> Learn to design, store, and retrieve data using this NoSQL database, including CRUD operations, schema design, and aggregation.
          </p>
          <p>
            <strong>2. Express.js (Backend Framework):</strong> Build server-side APIs and handle HTTP requests with Express, focusing on routing, middleware, and RESTful API development.
          </p>
          <p>
            <strong>3. React.js (Frontend Framework):</strong> Create dynamic, user-friendly interfaces with React, covering components, state management, hooks, and connecting to backend APIs.
          </p>
          <p>
            <strong>4. Node.js (Runtime Environment):</strong> Use Node.js to run JavaScript on the server, handling asynchronous operations and integrating Express with MongoDB.
          </p>
          <h3>Key Topics:</h3>
          <ul>
            <li>Setting up a MERN stack development environment.</li>
            <li>Building a complete project: Frontend (React) + Backend (Node + Express) + Database (MongoDB).</li>
            <li>User authentication (JWT, OAuth) and session management.</li>
            <li>Deployment to platforms like Heroku or Vercel.</li>
            <li>Best practices for scalable, secure, and maintainable code.</li>
          </ul>
        </>
      );
    } else if (id === 2) {
      return (
        <>
          <p>
            <strong>Full-Stack Development Proficiency:</strong> Build complete web applications using MongoDB, Express.js, React.js, and Node.js. Understand the full development lifecycle, from frontend to backend.
          </p>
          <p>
            <strong>Frontend Development Skills:</strong> Develop dynamic and responsive user interfaces with React.js. Use React hooks, state management, and component-based architecture effectively.
          </p>
          <h3>Other Key Skills:</h3>
          <ul>
            <li>Database Management: Design and manage databases using MongoDB.</li>
            <li>User Authentication: Implement secure login systems using JWT, OAuth, and bcrypt.</li>
            <li>Deployment Skills: Deploy full-stack applications on platforms like Heroku or AWS.</li>
            <li>Problem-Solving: Use tools like Chrome DevTools and Postman for debugging and API testing.</li>
          </ul>
        </>
      );
    }
  };

  return (
    <div className="accordion-container">
      {accordionData.AccordionData.map((item, index) => (
        <Accordion key={item.id} className="accordion-item" defaultExpanded={index === 0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              variant="h5"
              sx={{
                color: "#2A327D",
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif",
                textAlign: "left",
              }}
            >
              {item.heading}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {renderDescription(item.id)}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Accordion1;
