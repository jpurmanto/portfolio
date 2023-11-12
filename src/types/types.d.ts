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
