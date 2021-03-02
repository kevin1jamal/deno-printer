import { Drash } from "https://deno.land/x/drash@v1.4.1/mod.ts";
 
export default class PrintResource extends Drash.Http.Resource {
 
  static paths = ["/print"];
 
  public GET() {
    this.response.body = "GET request received!";
    console.log(this.response)
    return this.response;
  }
 
  public POST() {
    this.response.body = "POST request received!";

    console.log(this.response)
    return this.response;
  }
 
  public PUT() {
    this.response.body = "PUT request received!";
    return this.response;
  }
 
  public DELETE() {
    this.response.body = "DELETE request received!";
    return this.response;
  }
}