import { AboutInterface } from "@/db";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export const aboutFields: FormField[] = [
  {
    name: "aboutme",
    placeholder: "About Me",
    type: "text",
    label: "About Me",
  },
  {
    name: "noofprojects",
    placeholder: "No of projects",
    type: "text",
    label: "Enter no of projects",
  },
  {
    name: "yearofexperience",
    placeholder: "No of experience",
    type: "text",
    label: "Enter no of experience",
  },
  {
    name: "noofclients",
    placeholder: "No of clients",
    type: "text",
    label: "Enter no of clients",
  },
  {
    name: "skills",
    placeholder: "skills",
    type: "text",
    label: "Skills",
  },
];

export const initialAboutFormData: AboutInterface = {
  aboutme: "",
  noofprojects: "",
  yearofexperience: "",
  noofclients: "",
  skills: "",
};

export const contactFields: FormField[] = [
  {
    name: "name",
    placeholder: "Enter your name",
    type: "text",
    label: "Name",
  },
  {
    name: "email",
    placeholder: "Enter your email",
    type: "email",
    label: "Email",
  },
  {
    name: "message",
    placeholder: "Enter your message",
    type: "text",
    label: "Message",
  },
];

export const initialContactFormData: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

export const experienceFields: FormField[] = [
  {
    name: "position",
    placeholder: "Position",
    type: "text",
    label: "Position",
  },
  {
    name: "company",
    placeholder: "Company",
    type: "text",
    label: "Company",
  },
  {
    name: "duration",
    placeholder: "Duration",
    type: "text",
    label: "Duration",
  },
  {
    name: "location",
    placeholder: "Location",
    type: "text",
    label: "Location",
  },
  {
    name: "jobprofile",
    placeholder: "Job Profile",
    type: "text",
    label: "Job Profile",
  },
];

export const initialExperienceFormData = {
  position: "",
  company: "",
  duration: "",
  location: "",
  jobprofile: "",
};

export const formationFields: FormField[] = [
  {
    name: "degree",
    placeholder: "Degree Name",
    type: "text",
    label: "Enter Degree Name",
  },
  {
    name: "year",
    placeholder: "Year",
    type: "text",
    label: "Year",
  },
  {
    name: "college",
    placeholder: "College Name",
    type: "text",
    label: "Enter College Name",
  },
];

export const initialFormationFormData = {
  degree: "",
  year: "",
  college: "",
};

export const homeFields: FormField[] = [
  {
    name: "heading",
    placeholder: "Enter heading text",
    type: "text",
    label: "Enter heading text",
  },
  {
    name: "summary",
    placeholder: "Enter Career summary",
    type: "text",
    label: "Enter Career summary",
  },
];

export const initialHomeFormData = {
  heading: "",
  summary: "",
};

export const loginFields: FormField[] = [
  {
    name: "username",
    placeholder: "Enter User name",
    type: "text",
    label: "Enter User name",
  },
  {
    name: "password",
    placeholder: "Enter Password",
    type: "password",
    label: "Enter Password",
  },
];

export const initialLoginFormData = {
  username: "",
  password: "",
};

export const projectsFields: FormField[] = [
  {
    name: "name",
    placeholder: "Project Name",
    type: "text",
    label: "Project Name",
  },
  {
    name: "technologies",
    placeholder: "Enter Technologies",
    type: "text",
    label: "Enter Technologies",
  },
  {
    name: "website",
    placeholder: "Website",
    type: "text",
    label: "Website",
  },
  {
    name: "github",
    placeholder: "Github",
    type: "text",
    label: "github",
  },
];

export const initialProjectFormData = {
  name: "",
  website: "",
  technologies: "",
  github: "",
};

export const navbarItems: NavbarItem[] = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "project",
    label: "Projects",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

export const socialIcons = [
  {
    id: "facebook",
    icon: (
      <FaFacebookF
        color="rgba(13, 183, 96, 1)"
        className="w-[40px] h-[40px] "
      />
    ),
  },
  {
    id: "twitter",
    icon: (
      <FaTwitter color="rgba(13, 183, 96, 1)" className="w-[40px] h-[40px] " />
    ),
  },
  {
    id: "linkedin",
    icon: (
      <FaLinkedinIn
        color="rgba(13, 183, 96, 1)"
        className="w-[40px] h-[40px] "
      />
    ),
  },
  {
    id: "instagram",
    icon: (
      <FaInstagram
        color="rgba(13, 183, 96, 1)"
        className="w-[40px] h-[40px] "
      />
    ),
  },
];
