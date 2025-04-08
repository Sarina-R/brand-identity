import { serialize } from "next-mdx-remote/serialize";

export const serializeTextFields = async (obj: any): Promise<any> => {
  if (typeof obj !== "object" || obj === null) return obj;

  const entries = await Promise.all(
    Object.entries(obj).map(async ([key, value]) => {
      if (
        (key === "title" || key === "description" || key === "desc") &&
        typeof value === "string"
      ) {
        const serialized = await serialize(value);
        return [key, serialized];
      } else if (Array.isArray(value)) {
        const newArray = await Promise.all(
          value.map((item) => serializeTextFields(item))
        );
        return [key, newArray];
      } else if (typeof value === "object") {
        const newObj = await serializeTextFields(value);
        return [key, newObj];
      }
      return [key, value];
    })
  );

  return Object.fromEntries(entries);
};
