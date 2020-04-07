const chai = require("chai");
const chaiHttp = require("chai-http");
const { app } = require("../server");
chai.use(chaiHttp);
const { expect } = chai;

describe("test app runs", () => {
  it("handles 404 errors", (done) => {
    chai
      .request(app)
      .post("/api/asdf")
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.error).equals("Resource not found");
        expect(res).to.have.status(404);

        done();
      });
  });
});
