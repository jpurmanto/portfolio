import {
  initialAboutFormData,
  initialExperienceFormData,
  initialFormationFormData,
  initialHomeFormData,
  initialProjectFormData,
} from "@/constants/fields";
import { Setters } from "@/types";

export default function resetFormData(setters: Setters) {
  setters["home"](initialHomeFormData);
  setters["about"](initialAboutFormData);
  setters["experience"](initialExperienceFormData);
  setters["formation"](initialFormationFormData);
  setters["projects"](initialProjectFormData);
}
