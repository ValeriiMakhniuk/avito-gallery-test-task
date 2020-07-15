import axios from 'axios';

export interface Image {
  id: number;
  url: string;
}

export interface Comment {
  id: number;
  text: string;
  date: number;
}

export interface ImageInfo extends Image {
  comments: Comment[];
}

export async function getImages() {
  const url = 'https://boiling-refuge-66454.herokuapp.com/images';

  return await axios.get<Image[]>(url).then((res) => res.data);
}

export async function getImageInfo(imageId: number) {
  const url = `https://boiling-refuge-66454.herokuapp.com/images/${imageId}`;

  return await axios.get<ImageInfo>(url).then((res) => res.data);
}

export async function postComment(imageId: number, comment: Comment) {
  const url = `https://boiling-refuge-66454.herokuapp.com/images/${imageId}/comments`;

  return axios.post<number>(url, comment).then((res) => res.status);
}
