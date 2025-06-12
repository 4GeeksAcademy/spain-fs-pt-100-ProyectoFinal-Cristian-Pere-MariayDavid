const userServices = {};
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// userServices.register = async (formData) => {
//   try {
//     const resp = await fetch(backendUrl + "/api/register", {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     });
//     const data = await resp.json();
//     if (!resp.ok) throw new Error(data.error || "something went wrong");
//     localStorage.setItem("token", data.token)
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
userServices.register = async (formData) => {
  try {
    const resp = await fetch(backendUrl + "/api/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await resp.json();

    if (!resp.ok) throw new Error(data.error || "something went wrong");

    localStorage.setItem("token", data.token);

    return { success: true, token: data.token };
  } catch (error) {
    console.log(error);
    return { success: false, error: error.message };
  }
};


userServices.login = async (formData) => {
  try {
    const resp = await fetch(backendUrl + "/api/login", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
    if (!resp.ok) throw Error("something went wrong");
    const data = await resp.json();
    localStorage.setItem("token", data.token)
    return data;
  } catch (error) {
    console.log(error);
  }
};

userServices.getUserInfo = async () => {
     try {
    const resp = await fetch(backendUrl + "/api/private", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
    });
    if (!resp.ok) throw Error("something went wrong");
    const data = await resp.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default userServices;