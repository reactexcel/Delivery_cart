import { Button, FormGroup, Form, Input } from "reactstrap";

const PaymentForm = ({ changePayment, isDelivery }) => {
  return (
    <div>
      <br />
      <div>
        <div className="form-row">
          <FormGroup className="col-md-6">
            <label htmlFor="first_name">First Name</label>
            <Input
              id="first_name"
              name="first_name"
              className="makeRound"
              type="text"
              onChange={changePayment("first_name")}
            ></Input>
          </FormGroup>
          <FormGroup className="col-md-6">
            <label htmlFor="last_name">Last Name</label>
            <Input
              id="last_name"
              name="last_name"
              className="makeRound"
              type="text"
              onChange={changePayment("last_name")}
            ></Input>
          </FormGroup>
          <FormGroup className="col-md-6">
            <label htmlFor="email">E-mail</label>
            <Input
              id="email"
              name="email"
              className="makeRound"
              type="text"
              onChange={changePayment("email")}
            ></Input>
          </FormGroup>
          <FormGroup className="col-md-6">
            <label htmlFor="phone">Phone Number</label>
            <Input
              id="phone"
              name="phone"
              className="makeRound"
              type="text"
              onChange={changePayment("phone")}
            ></Input>
          </FormGroup>
        </div>
        {isDelivery && (
          <div>
            <hr />
            <div className="form-row">
              <FormGroup className="col-6">
                <label htmlFor="address">Address</label>
                <Input
                  id="address"
                  name="address"
                  className="makeRound"
                  type="text"
                  onChange={changePayment("address")}
                ></Input>
              </FormGroup>
              <FormGroup className="col">
                <label htmlFor="guide">Optional delivery guide</label>
                <Input
                  className="makeRound"
                  id="guide"
                  name="guide"
                  type="textarea"
                  rows="3"
                  onChange={changePayment("guide")}
                ></Input>
              </FormGroup>
            </div>
          </div>
        )}

        <hr />
        <div className="form-row">
          <FormGroup className="col-md-8">
            <label htmlFor="card_number">Credit Card Number</label>
            <Input
              className="makeRound"
              id="card_number"
              name="card_number"
              placeholder="Card Number"
              maxLength="16"
              type="text"
              onChange={changePayment("card_number")}
            ></Input>
          </FormGroup>
        </div>

        <div className="form-row">
          <FormGroup className="col-md-2">
            <label htmlFor="cvv">CVV</label>
            <Input
              className="makeRound"
              id="cvv"
              name="cvv"
              type="password"
              maxLength="3"
              placeholder="CVV"
              onChange={changePayment("cvv")}
            ></Input>
          </FormGroup>
          <FormGroup className="col-md-6">
            <label htmlFor="card_expiry">Card Expiration</label>
            <Input
              className="makeRound"
              id="card_expiry"
              type="text"
              placeholder="MM/YY"
              onChange={changePayment("card_expiry")}
            ></Input>
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
