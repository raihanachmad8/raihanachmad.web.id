/**
 * Interface representing personal experience details.
 *
 * @property {string} title - The title of the personal project.
 * @property {string} startDate - The start date of the project in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the project in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the project is ongoing.
 * @property {string} description - A brief description of the project and its objectives.
 * @property {string[]} goals - A list of goals achieved or targeted during the project.
 */
interface PersonalExperience {
    title: string;
    startDate: string;
    endDate?: string;
    location: string;
    description: string;
    goals: string[];
}

/**
 * Represents an array of personal experiences.
 */
const personalExperience: PersonalExperience[] = [
    {
        title: "Campus Project Portofolio",
        startDate: "2023-09-01",
        endDate: "2023-10-15",
        location: "Malang, Indonesia",
        description: "Developed a class website as a portfolio project for my class, showcasing various features and functionalities.",
        goals: [
            "Designed and implemented a responsive website using React and Tailwind CSS.",
            "Created user-friendly navigation and layout to enhance user experience.",
            "Integrated a contact form for inquiries and feedback.",
            "Showcased class projects and achievements through a dedicated section.",
            "Ensured cross-browser compatibility and optimized performance."
        ],
    }
];

export default personalExperience;