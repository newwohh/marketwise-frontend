import { backendBaseUrl } from "../constants/constants";
import secureLocalStorage from "react-secure-storage";

export const directHeatmap = async (navigation) => {
  const request = await fetch(backendBaseUrl + "api/v1/users/heatmap", {
    credentials: "include",
  });
  const response = await request.json();
  if (response.status === "success") {
    navigation("/heatmap/stocks");
  } else {
    navigation("/login");
  }
};

export const userLogout = async () => {
  const req = await fetch(backendBaseUrl + "api/v1/users/logout", {
    credentials: "include",
  });
  const res = await req.json();
  secureLocalStorage.removeItem("user");
  if (res.status === "success") window.location.reload(true);
};

export const subscribeNew = async (name, user) => {
  try {
    const request = await fetch(
      backendBaseUrl + "api/v1/subscrptions/newsubscription",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          market: "name",
          name: name,
          user: user.user._id,
        }),
        credentials: "include",
      }
    );
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const getAllSubscriptions = async (user) => {
  try {
    const request = await fetch(
      backendBaseUrl + "api/v1/subscrptions/getsubscription/" + user.user._id,
      {
        credentials: "include",
      }
    );
    const response = await request.json();
    console.log(response);

    if (response.status === "success") {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const writeANewBlog = async (user) => {
  try {
    const request = await fetch(backendBaseUrl + "api/v1/blogs/newblog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Title",
        description: "",
        createdAt: Date.now(),
        user: user,
      }),
      credentials: "include",
    });

    const response = await request.json();

    return console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const signInAUser = async (userDetails, navigation) => {
  try {
    const request = await fetch(backendBaseUrl + "api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userDetails.email,
        password: userDetails.password,
      }),
      credentials: "include",
    });

    const response = await request.json();
    if (response.status === "success") navigation("/");
    return secureLocalStorage.setItem(
      "user",
      JSON.stringify({ ...response.data })
    );
  } catch (error) {
    console.log(error);
  }
};

export const postNewUser = async (userDetails) => {
  try {
    const request = await fetch(backendBaseUrl + "api/v1/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userDetails.first + userDetails.last,
        email: userDetails.email,
        password: userDetails.password,
        passwordConfirm: userDetails.passwordConfirm,
      }),
      credentials: "include",
    });
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const initPayment = async (data) => {
  console.log(window);
  const options = {
    key: "rzp_test_uMO5hIwLS8liUa",
    amount: data.amount,
    currency: data.currency,
    name: data.name,
    description: "Test Transaction",
    image: data.img,
    order_id: data.id,
    handler: async (response) => {
      try {
        const { data } = await fetch(
          backendBaseUrl + "api/v1/plans/verifypayment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    theme: {
      color: "#3399cc",
    },
  };

  const rzpi = new window.Razorpay(options);
  rzpi.open();
};

export const createPlan = async (data) => {
  try {
    const request = await fetch(backendBaseUrl + "api/v1/plans/chooseplan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const response = await request.json();
    if (response.data.id) {
      initPayment(response.data);
    }
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
