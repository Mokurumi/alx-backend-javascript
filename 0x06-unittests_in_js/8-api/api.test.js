import app from "./api";
import request from "supertest";

describe("GET /", () => {
  it("should return a 200 status code", (done) => {
    request(app)
      .get("/")
      .expect(200, done);
  });

  it("should return the message Welcome to the payment system", (done) => {
    request(app)
      .get("/")
      .expect("Welcome to the payment system", done);
  });
});
