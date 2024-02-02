import { IBase } from "./Base";

export interface IPost extends IBase, IPostRequest {}

export interface IPostRequest {
  title: string;
  content: string;
  authorId: string;
}