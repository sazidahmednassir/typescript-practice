let userId: string | number;
userId = 123;
userId = "BS23SZNX";

function getUserInformation(id: string | number) {
  if (typeof id === "string") {
    console.log("Id String are working");
  } else {
    console.log("Id are working");
  }
}

getUserInformation(323);
getUserInformation("bs23.sazid");
