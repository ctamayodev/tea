import React from "react";
import axios from "axios";
import { Client } from "@microsoft/microsoft-graph-client";
import qs from "qs";


const app_id = "057dcfca-0b51-44e2-a8fa-27dce43a3c8e";
const app_secret = "y-q-lf3.C_87L70~vE8ud0TTHSuNcU.0QM";
const tenant = "a31e752f-5c14-4620-842e-6c9b4e81fbce";

function GetToken() {
  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
  axios
    .post(
      "https://login.microsoftonline.com/" + tenant + "/oauth2/v2.0/token",
      qs.stringify({
        client_id: app_id,
        scope: "https://graph.microsoft.com/.default",
        client_secret: app_secret,
        grant_type: "client_credentials",
      })
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}