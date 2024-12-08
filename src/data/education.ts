/**
 * Interface representing education details.
 *
 * @property {string} title - The title of the education program.
 * @property {string} startDate - The start date of the program in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the program in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the program is ongoing.
 * @property {string} school - The name of the school or university.
 * @property {string} location - The geographic location of the school (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the education program.
 * @property {boolean} currentUni - Indicates whether the program is the current one.
 */
interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const education: Education[] = [
    {
        title: "Undergraduate Semester 5",
        startDate: "2022-08-01",
        endDate: "", // Ongoing
        school: "State Polytechnic of Malang",
        location: "Malang, Indonesia",
        description: "GPA: 3.83/4.00. Appointed as General Secretary of the WRI (Workshop Riset Informatika) community. Served as a mentor for Web Development and Mobile Development in WRI. Participated in the 2023 Student Creativity Program (PKM) competition.",
        currentUni: true,
    },
    {
        title: "Senior High School",
        startDate: "2019-06-01",
        endDate: "2022-04-30",
        school: "SMA Negeri 1 Bululawang",
        location: "Kabupaten Malang,  Indonesia",
        description: "Active member of the Islamic Da'wah Board (BDI): Organized religious activities, routine studies, and social events such as iftar gatherings. Member of the Class Representative Council (MPK): Voiced class aspirations, collaborated with the student council (OSIS), and participated in school decision-making.",
        currentUni: false,
    }
];

export default education;