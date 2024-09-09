import api from "../utils/api";

export const getPost = (url: string, id: string) => {
  return api({
    headers: {
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      // userID: `${sectionID}`,
    },
    method: "GET",
    url: `/${url}/${id}`,
  });
};

export const getViewOrLikePost = (url: string, id: string) => {
  return api({
    headers: {
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      // userID: `${sectionID}`,
    },
    method: "GET",
    url: `/${url}/${id}`,
  });
};

export const increaseLikePost = (url: string, id: any) => {
  console.log(url, api);
  return api({
    headers: {
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      // userID: `${sectionID}`,
    },
    method: "PUT",
    url: `${url}/${id}`,
    // data: {
    //   ...params,
    // },
  });
};
