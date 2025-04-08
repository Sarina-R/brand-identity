import { serialize } from "next-mdx-remote/serialize";
import { ColorItems } from "@/app/type";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

type MDXFields = "title" | "description" | "desc";

export type Serialized<T> = {
  [K in keyof T]: K extends MDXFields
    ? T[K] extends string
      ? MDXRemoteSerializeResult
      : T[K]
    : T[K] extends Array<infer U>
    ? Array<Serialized<U>>
    : T[K] extends object
    ? Serialized<T[K]>
    : T[K];
};

const shouldSerialize = (key: string, value: unknown): value is string =>
  (key === "title" || key === "description" || key === "desc") &&
  typeof value === "string";

export const serializeTextFields = async (
  obj: ColorItems
): Promise<Serialized<ColorItems>> => {
  if (typeof obj !== "object" || obj === null) return obj as any;

  const entries = await Promise.all(
    Object.entries(obj).map(async ([key, value]) => {
      if (shouldSerialize(key, value)) {
        const serialized = await serialize(value);
        return [key, serialized];
      } else if (Array.isArray(value)) {
        const newArray = await Promise.all(
          value.map((item) => serializeTextFields(item as any))
        );
        return [key, newArray];
      } else if (typeof value === "object" && value !== null) {
        const newObj = await serializeTextFields(value as any);
        return [key, newObj];
      }
      return [key, value];
    })
  );

  return Object.fromEntries(entries) as Serialized<ColorItems>;
};
