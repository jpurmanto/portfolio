import { Document, IfAny, Require_id } from "mongoose";

export default function getterOutput<T extends Document>(
  modelData: IfAny<T, any, Document<unknown, {}, T> & Require_id<T>>[],
  modelName: string
) {
  return ["Home", "About"].includes(modelName)
    ? modelData[0]
    : modelData.reverse();
}
