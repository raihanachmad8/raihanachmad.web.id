/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface ProjectExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 */
const projectExperience: ProjectExperience[] = [
    {
        title: "SatuRt - Fullstack Developer",
        startDate: "2024-02-01",
        endDate: "2024-06-30",
        company: "State Polytechnic of Malang",
        location: "Malang, Indonesia",
        description: "Developed a Neighborhood Association Information System, including system architecture design and database structure.",
        goals: [
            "Designed system architecture, including database design and application structure.",
            "Developed features for managing citizen and family data, ensuring access rights for each URL and endpoint.",
            "Implemented decision support system features for better data analysis.",
            "Ensured the web user interface was responsive and aligned with design specifications.",
            "Conducted user acceptance testing and contributed to system analysis and improvement.",
            "Developed the system using Laravel 10 for the backend, and AlpineJS and TailwindCSS for the frontend."
        ],
        currentJob: false,
    },
    {
        title: "Cat Stories - Backend Developer",
        startDate: "2023-11-01",
        endDate: "2023-12-31",
        company: "State Polytechnic of Malang",
        location: "Malang, Indonesia",
        description: "Developed a Cat Adoption Data Management System using various libraries.",
        goals: [
            "Designed the project using Node.js, MSSQL, Express.js, Swagger, and Knex (SQL Query Builder for JavaScript).",
            "Developed and implemented endpoints for CRUD operations, ensuring efficient data handling and user interaction.",
            "Designed and integrated data validation mechanisms to enhance security and maintain data integrity.",
            "Utilized Swagger for API documentation, improving readability and usability for developers."
        ],
        currentJob: false,
    },
    {
        title: "Inventory JTI (INTI) - Backend Developer",
        startDate: "2023-10-01",
        currentJob: true,
        company: "State Polytechnic of Malang",
        location: "Malang, Indonesia",
        description: "Developed an Inventory Management System.",
        goals: [
            "Designed the backend of the inventory system using native PHP with MVC architecture.",
            "Built an efficient MSSQL schema for scalable inventory data management.",
            "Developed CRUD features for managing items and stock.",
            "Created APIs for seamless integration between backend and frontend.",
            "Optimized performance and security for faster and safer data transactions."
        ],
    }
];

export default projectExperience;