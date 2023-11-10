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
