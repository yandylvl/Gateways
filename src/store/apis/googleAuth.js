export default class GoogleAuth {
  constructor(
    client_id = "527318934242-m4ilg9ql3ov76bbca2g7ouss0j6po0m2.apps.googleusercontent.com",
    scope = "email"
  ) {
    this.client_id = client_id;
    this.scope = scope;
    this.auth2 = null;
  }

  init() {
    console.log(`init ${this.auth2}`);
    return new Promise((resolve, reject) => {
      window.gapi.load("auth2", () => {
        window.gapi.auth2
          .init({
            client_id: this.client_id,
            scope: this.scope,
          })
          .then((auth2) => {
            this.auth2 = auth2;
            resolve(this, auth2);
          })
          .catch(reject);
      });
    });
  }

  //Exposes several methods to further encapsulate additional behavior.

  signIn() {
    return this.auth2?.signIn().catch((error) => console.log(error));
  }

  signOut() {
    return this.auth2?.signOut();
  }

  isSignedIn() {
    return this.auth2?.isSignedIn.get();
  }

  userId() {
    return this.auth2?.currentUser.get().getId();
  }
  userName() {
    return this.auth2?.currentUser.get().getBasicProfile().getGivenName();
  }
  userImageUrl() {
    return this.auth2?.currentUser.get().getBasicProfile().getImageUrl();
  }

  signInListen(callback) {
    console.log("entro callback");
    return this.auth2?.isSignedIn.listen(callback);
  }
}
