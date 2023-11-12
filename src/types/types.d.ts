type MongooseModel<T extends Document> = Model<T>;

type ApiResponse = {
  status: number;
  error: {
    message: string;
  } | null;
  data: any | null;
};

interface NavbarItem {
  id: string;
  label: string;
}

type LoginFormData = {
  username: string;
  password: string;
};

type ContactFormData = {
  name: string;
  email: string;
  message: string;
  [key: string]: string;
};

interface FormField {
  name: string;
  placeholder: string;
  type: string;
  label: string;
}

interface Setters {
  all: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  about: React.Dispatch<React.SetStateAction<AboutInterface>>;
  experience: React.Dispatch<React.SetStateAction<any>>;
  formation: React.Dispatch<React.SetStateAction<any>>;
  home: React.Dispatch<React.SetStateAction<any>>;
  login: React.Dispatch<React.SetStateAction<any>>;
  project: React.Dispatch<React.SetStateAction<any>>;
  update: React.Dispatch<React.SetStateAction<boolean>>;
}
