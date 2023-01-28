const apiUrl = "http://localhost:8080";

//เรียก id จากการล็อกอิน
async function GetCustomerByID() {

  let uid = localStorage.getItem("uid");

  const requestOptions = {
    method: "GET",
    headers: { 
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(
    `${apiUrl}/customer/${uid}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}

export { GetCustomerByID };