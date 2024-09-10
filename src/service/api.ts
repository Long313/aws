import api from "../utils/api";

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

export const increaseLikeOrViewPost = (url: string, id: any) => {
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


export const getPost = (url: string, id: string) => {
  return api({
    headers: {
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      // userID: `${sectionID}`,
    },
    method: "GET",
    url: `${url}/${id}`,
  });
};
