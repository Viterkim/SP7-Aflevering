
import { observable, action } from "mobx";
import fetchHelper from "./fetchHelpers"
const URL = require("../../package.json").serverURL;


class FootBallStore {
  @observable messageFromServer = [];
  @observable errorMessage = "";

  @action
  setErrorMessage = (err) => {
    this.errorMessage = err;
  }

  @action
  getData = () => {
    this.errorMessage = "";
    this.messageFromServer = "";
    let errorCode = 200;
    const options = fetchHelper.makeOptions("GET", true);
    fetch(URL + "api/footballclubs", options)
      .then((res) => {
        if (res.status > 210 || !res.ok) {
          errorCode = res.status;
        }
        return res.json();
      })
      .then(action((res) => {  //Note the action wrapper to allow for useStrict
        if (errorCode !== 200) {
          throw new Error(`${res.error.message} (${res.error.code})`);
        }
        else {
          this.messageFromServer.replace(res);
          console.log("Det gode ved javascript er at alt er nemt");
        }
      })).catch(err => {
        //This is the only way (I have found) to verify server is not running
        this.setErrorMessage(fetchHelper.addJustErrorMessage(err));
      })
  }
}

let footBallStore = new FootBallStore();

export default footBallStore;
