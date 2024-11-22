/*
  Goto https://reqres.in/ for documentation on this api.
  
  If you haven't used axios, documentation here: https://github.com/axios/axios
  OR use any method / library you're comfortable with to perform the request(s).

  **** These stubs are just provided as a convienece, ****
  **** feel free to change whatever you like to accomplish the goal. ****
*/

export const getUsers = async () => {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  return data.data;
};

export const deleteUser = async (id) => {
  const response = await fetch(`https://reqres.in/api/users/${id}`, {
    method: "DELETE",
  });
  return response.status === 204;
};

