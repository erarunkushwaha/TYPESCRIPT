import { Loader } from "@googlemaps/js-api-loader";
import { Users } from "./User";
import { Company } from "./Company";

const users = new Users();
const company = new Company();
const loader = new Loader({
  apiKey: "AIzaSyAjqq8XtzcCV8W3HLCODbCIlStjeh7cdJg",
  version: "weekly"
});

loader.load().then(() => {
  let map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
});
// new google.maps.Map(document.getElementById("mps"));
