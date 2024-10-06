type PostType = {
  id: number;
  title: string;
  body: string
}
export type PostPropsTypes = {
  id: number;
  title: string;
  body: string;
  addFavorites?: ({ id, title, body }: PostType) => void
}

